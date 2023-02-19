import { Component, Input, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { LogEvent } from 'src/app/models/log-event.model';
import { LogFleet } from 'src/app/models/log-fleet.model';
import { LogReward } from 'src/app/models/log-reward.model';
import { LogSummary } from 'src/app/models/log-summary.model';
import '@cds/core/icon/register.js';
import { ClarityIcons, checkCircleIcon } from '@cds/core/icon';
import { BattleLog } from 'src/app/models/battle-log.model';
import { LogItem } from 'src/app/models/log-item.model';
import { circleIcon } from '@cds/core/icon/shapes/circle';

ClarityIcons.addIcons(checkCircleIcon, circleIcon);

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  file: any;
  @Input() parseResult: any[] = [];
  summary = new BattleLog<LogSummary>(new LogSummary());
  reward = new BattleLog<LogReward>(new LogReward());
  fleet = new BattleLog<LogFleet>(new LogFleet());
  event = new BattleLog<LogEvent>(new LogEvent());
  stepList = [this.summary, this.reward, this.fleet, this.event];
  step!: BattleLog<LogItem>;

  coeficients = new Map<string, Array<number>>([
    ["survey", [0.3, 0.3, 0.3]],
    ["battleship", [0.55, 0.2, 0.2]],
    ["explorer", [0.2, 0.55, 0.2]],
    ["interceptor", [0.2, 0.2, 0.55]],
  ]);

  constructor(private papa: Papa) {}

  ngOnInit(): void {}

  fileChanged(e: any) {
    this.file = e.target.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const list = (fileReader.result as string)
        .split('\r\n\r\n')
        .filter((value) => value.length > 0);
      let i = 0;
      this.parseResult = [];
      console.debug("Log content", list);
      list.forEach((file) => {
        this.step = this.stepList[i++];
        this.step.items = [];
        // this.step.clear(); // TODO
        console.debug('Content', i);
        this.papa.parse(file, {
          skipEmptyLines: true,
          complete: (results, file) => {
            this.parseResult.push(results);
            console.debug('Parsed content', results, file);

            const headers = results.data.shift();
            if (this.step.check(headers)) {
              results.data.forEach((line: any[]) => this.step.add(line));
              this.step.refresh();
            } else {
              console.warn(
                'Wrong headers.',
                'Expected',
                this.step.headers,
                'Provided',
                headers
              );
            }
          },
        });
      });
    };
    fileReader.readAsText(this.file);
  }
}
