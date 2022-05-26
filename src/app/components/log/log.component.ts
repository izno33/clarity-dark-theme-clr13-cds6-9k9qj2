import { Component, Input, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { LogEvent } from 'src/app/models/log-event.model';
import { LogFleet } from 'src/app/models/log-fleet.model';
import { LogReward } from 'src/app/models/log-reward.model';
import { LogSummary } from 'src/app/models/log-summary.model';
import '@cds/core/icon/register.js';
import { ClarityIcons, checkCircleIcon } from '@cds/core/icon';

ClarityIcons.addIcons(checkCircleIcon);

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  file: any;
  @Input() parseResult: any[] = [];
  summary: LogSummary = new LogSummary();
  reward: LogReward = new LogReward();
  fleet: LogFleet = new LogFleet();
  event: LogEvent = new LogEvent();
  stepList = [this.summary, this.reward, this.fleet, this.event];
  step: any;

  constructor(private papa: Papa) {}

  ngOnInit(): void {}

  fileChanged(e: any) {
    this.file = e.target.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // console.log(fileReader.result);
      const list = (fileReader.result as string).split('\r\n\r\n');
      let i = 0;
      this.parseResult = [];
      list.forEach((file) => {
        this.step = this.stepList[i++];
        this.step.items = [];
        // this.step.clear(); // TODO
        console.log('file', i);
        this.papa.parse(file, {
          skipEmptyLines: true,
          // step: (results, parser) => {
          //   console.info('step', results);
          //   console.info('parser', parser);
          // },
          complete: (results, file) => {
            this.parseResult.push(results);
            // this.parseResult = JSON.stringify(results, [2]);
            console.log('Result', results, file);

            const headers = results.data.shift();
            results.data.forEach((line: any[]) => this.step.add(line));
          },
        });
      });
    };
    fileReader.readAsText(this.file);
  }
}
