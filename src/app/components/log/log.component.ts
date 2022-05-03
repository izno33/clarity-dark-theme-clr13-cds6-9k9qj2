import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  file: any;

  constructor() {}

  ngOnInit(): void {}

  fileChanged(e: any) {
    this.file = e.target.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      const list = (fileReader.result as string).split('\r\n\r\n');
      list.forEach(console.log);
    };
    fileReader.readAsText(this.file);
  }
}
