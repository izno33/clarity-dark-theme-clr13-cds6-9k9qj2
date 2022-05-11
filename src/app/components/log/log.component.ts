import { Component, Input, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  file: any;
  @Input() parseResult: string = '';

  constructor(private papa: Papa) {}

  ngOnInit(): void {}

  fileChanged(e: any) {
    this.file = e.target.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // console.log(fileReader.result);
      const list = (fileReader.result as string).split('\r\n\r\n');
      let i = 0;
      list.forEach(file => {
        console.log('file', ++i);
        this.papa.parse(file, {
          step: (results, parser) => {
            console.info('step', results);
          },
          complete: (results, file) => {
            this.parseResult = JSON.stringify(results);
            console.log('Result', results, file);
          }
        })
      });
    };
    fileReader.readAsText(this.file);
  }
}
