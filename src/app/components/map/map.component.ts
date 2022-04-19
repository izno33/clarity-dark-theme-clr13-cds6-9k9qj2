import { Component, OnInit } from '@angular/core';
import * as geojson from 'geojson';
import {
  DomEvent,
  tileLayer,
  map,
  Map,
  CRS,
  LatLngTuple,
  imageOverlay,
  geoJSON,
  LayerGroup,
} from 'leaflet';
import { Observable } from 'rxjs';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public map!: Map;
  public lat: number = 0;
  public lng: number = 0;

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 },
  // ];

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  private initMap(): void {
    this.map = map('map', {
      crs: CRS.Simple,
      center: [450, 635],
      zoom: 1,
    });

    const bounds: LatLngTuple[] = [
      [0, 0],
      [676, 895],
    ];
    imageOverlay(
      'https://86.ip-51-178-46.eu/origin_sector/Origin_Map.png',
      bounds
    ).addTo(this.map);

    // const tiles = tileLayer(
    //   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //   {
    //     maxZoom: 18,
    //     minZoom: 3,
    //     attribution:
    //       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //   }
    // );

    // tiles.addTo(this.map);

    this.mapService.getZones().subscribe((data) =>
      geoJSON(data)
        .bindPopup((layer) => {
          const feature = (layer as LayerGroup)?.feature as geojson.Feature;
          console.log(feature);
          return feature?.properties?.name ?? 'Inconnu';
        })
        .addTo(this.map)
    );

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
