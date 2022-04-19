import {
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
} from '@angular/core';
import * as geojson from 'geojson';
import {
  map,
  Map,
  CRS,
  LatLngTuple,
  imageOverlay,
  geoJSON,
  LayerGroup,
} from 'leaflet';
import { Zone } from 'src/app/models/zone.model';
import { MapService } from 'src/app/services/map.service';
import { ZoneDetailComponent } from '../zone-detail/zone-detail.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public map!: Map;
  public lat: number = 0;
  public lng: number = 0;

  constructor(
    private mapService: MapService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit(): void {}

  private initMap(): void {
    const bounds: LatLngTuple[] = [
      [0, 0],
      [676, 895],
    ];

    this.map = map('map', {
      crs: CRS.Simple,
      center: [340, 450],
      zoom: 0,
      minZoom: 0,
      maxZoom: 0,
      maxBounds: bounds,
      maxBoundsViscosity: 1,
    });

    imageOverlay(
      'https://86.ip-51-178-46.eu/origin_sector/Origin_Map.png',
      bounds
    ).addTo(this.map);

    this.mapService.getZones().subscribe((data) =>
      geoJSON(data)
        .bindPopup((layer) => {
          const component = this.resolver
            .resolveComponentFactory(ZoneDetailComponent)
            .create(this.injector);
          const feature = (layer as LayerGroup)?.feature as geojson.Feature;
          component.instance.zone = feature.properties as Zone;
          component.changeDetectorRef.detectChanges();
          return component.location.nativeElement;
        })
        .addTo(this.map)
    );

    this.map.addEventListener('mousemove', (ev: any) => {
      this.lat = ev.latlng.lat;
      this.lng = ev.latlng.lng;
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
