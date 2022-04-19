import { Component, Input, OnInit } from '@angular/core';
import { Zone } from 'src/app/models/zone.model';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.scss'],
})
export class ZoneDetailComponent implements OnInit {
  @Input() zone!: Zone;

  constructor() {}

  ngOnInit(): void {}
}
