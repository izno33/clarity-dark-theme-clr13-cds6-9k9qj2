import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  getZones(): Observable<any> {
    return this.http.get<any>(
      'https://86.ip-51-178-46.eu/origin_sector/zones_full.json'
    );
  }
}
