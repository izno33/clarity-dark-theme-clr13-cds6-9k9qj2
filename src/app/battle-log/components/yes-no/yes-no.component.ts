import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss']
})
export class YesNoComponent implements OnInit {

  @Input() value: 'YES' | 'NO' | '--' | boolean = false; 
  
  constructor() { }

  ngOnInit(): void {
  }

  get _value(): boolean {
    return this.value === 'YES' || this.value === true;
  }
}
