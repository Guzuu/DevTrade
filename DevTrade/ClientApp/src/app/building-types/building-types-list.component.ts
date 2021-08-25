import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-building-types',
  templateUrl: './building-types-list.component.html'
})

export class BuildingTypesComponent implements OnInit {
  public buildingtypes: BuildingType[];

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
      this.http.get<BuildingType[]>(this.baseUrl + 'buildingtypes').subscribe(
      result => { this.buildingtypes = result; },
      error => console.error(error)
    );
  }
}
