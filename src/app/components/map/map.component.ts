import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { DomEvent, tileLayer, map, Map } from 'leaflet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public map!: Map;
  public lat: number = 0;
  public lng: number = 0;
  private gridApi!: GridApi;

  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'title' },
    { field: 'description', editable: true },
  ];

  rowData!: Observable<any[]>;

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 },
  // ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.rowData = this.http.get<any[]>('https://dev.rsv.clcg.fr/facesnaps');
  }

  private initMap(): void {
    this.map = map('map', {
      center: [44.84, -0.64],
      zoom: 15,
    });

    const tiles = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

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

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
}
