import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

export class BuildingTypesService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient,
    private router: Router,
  ) { }

  get(): Observable<BuildingType[]> {
    return this.http.get<BuildingType[]>(this.baseUrl + 'buildingtypes');
  }

  async create(buildingType: BuildingType) {
    await this.http.post<BuildingType>(this.baseUrl + 'buildingtypes', buildingType).toPromise();
  }
} 

export interface BuildingType {
  id: number;
  name: string;
}


