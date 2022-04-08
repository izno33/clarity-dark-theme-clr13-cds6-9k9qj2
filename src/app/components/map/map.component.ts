import { Component, OnInit } from '@angular/core';
import { DomEvent, tileLayer, map, Map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map!: Map;
  public lat: number = 0;
  public lng: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  private initMap(): void {
    this.map = map('map', {
      center: [ 44.84, -0.64 ],
      zoom: 15
    });

    const tiles = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.addEventListener('mousemove', (ev: any) => {
      this.lat = ev.latlng.lat;
      this.lng = ev.latlng.lng;
      // console.log(this.lat, this.lng);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
