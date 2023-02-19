import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BattleLog } from 'src/app/models/battle-log.model';
import { LogEvent } from 'src/app/models/log-event.model';

class Damages {
  HullDamage: number = 0;
  MitigatedDamage: number = 0;
  ShieldDamage: number = 0;
  TotalDamage: number = 0;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  @Input() event = new BattleLog<LogEvent>(new LogEvent());

  refresh$!: Observable<boolean>;
  refreshSubscription!: Subscription;
  summary: any = {};

  get damageDealt() {
    return Object.values(this.summary?.totalDamageDealt ?? {})
  }

  get damageDealtByRound() {
    return Object.values(this.summary?.ddByRound ?? {})
  }

  get damageReceived() {
    return Object.values(this.summary?.totalDamageReceived ?? {})
  }

  get damageReceivedByRound() {
    return Object.values(this.summary?.drByRound ?? {})
  }

  constructor() { }

  ngOnInit(): void {
    console.debug("Registering refresh")
    this.refresh$ = this.event.needRefresh$;
    this.refreshSubscription = this.refresh$.subscribe(refresh => {
      console.debug("NeedRefresh", refresh)
      this.refresh();
    });
    this.refresh();
  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();
  }

  refresh(): void {
    this.computeSummary();
  }

  consolidateDamage(acc: Damages, value: Damages) {
    acc.HullDamage += +value.HullDamage
    acc.MitigatedDamage += +value.MitigatedDamage
    acc.ShieldDamage += +value.ShieldDamage
    acc.TotalDamage += +value.TotalDamage
  }

  computeSummary() {
    const types: {[type: string]: number} = {}
    const totalDamageDealt: {[type: string]: Damages} = {}
    const totalDamageReceived: {[type: string]: Damages} = {}
    const shieldDepleted: {[type: string]: {[type: string]: number}} = {}
    const shipDestroyed: {[type: string]: {[type: string]: number}} = {}
    this.event.items.forEach(event => {
      const count = types[event.Type] || 0;
      types[event.Type] = count + 1;

      if(event.Type === "Shield Depleted") {
        //shipDestroyed[event.
      }

      if(event.Type === "Attack") {
        const { AttackerName, TargetName } = event;
        //console.log("Attack", AttackerName, TargetName, HullDamage, ShieldDamage, MitigatedDamage, TotalDamage)
        const damageDealt = totalDamageDealt[AttackerName] || { AttackerName, ...(new Damages()) }
        this.consolidateDamage(damageDealt, event);
        totalDamageDealt[AttackerName] = damageDealt

        const damageReceived = totalDamageReceived[TargetName] || { TargetName, ...(new Damages()) }
        this.consolidateDamage(damageReceived, event);
        totalDamageReceived[TargetName] = damageReceived
      }
    })

    const ddByRound = Array.from(this.event.items
      .filter(item => item.Type === "Attack")
      .reduce((acc, v) => {
        const { AttackerName, Round } = v;
        const key = JSON.stringify({ AttackerName, Round });
        let dd = acc.get(key);
        //console.log("dd", dd);
        //console.log("acc", acc);
        if (!dd) {
          console.debug("key", key);
          dd = { AttackerName, Round, ...(new Damages()) }
          console.debug("dd", dd);
          acc.set(key, dd);
          //console.log("acc new", acc);
        }
        this.consolidateDamage(dd, v)
        return acc;
      }, new Map()).values());

    const drByRound = Array.from(this.event.items
      .filter(item => item.Type === "Attack")
      .reduce((acc, v) => {
        const { TargetName, Round } = v;
        const key = JSON.stringify({ TargetName, Round });
        let dd = acc.get(key);
        //console.log("dd", dd);
        //console.log("acc", acc);
        if (!dd) {
          console.debug(key);
          dd = { TargetName, Round, ...(new Damages()) }
          acc.set(key, dd);
          //console.log("acc new", acc);
        }
        this.consolidateDamage(dd, v)
        return acc;
      }, new Map()).values());

    this.summary = {
      nbEvents: this.event.items.length,
      nbRounds: this.event.items[this.event.items.length - 1].Round,
      eventTypes: types,
      totalDamageDealt,
      totalDamageReceived,
      ddByRound,
      drByRound,
    }
  }
}
