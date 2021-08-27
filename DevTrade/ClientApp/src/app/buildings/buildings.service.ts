import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

export class BuildingsService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient,
    private router: Router,
  ) { }

  get(): Observable<Building[]> {
    return this.http.get<Building[]>(this.baseUrl + 'buildings');
  }

}

export interface Building {
  id: number;
  area: string;
  price: number;
  buildingTypeId: number;
}
