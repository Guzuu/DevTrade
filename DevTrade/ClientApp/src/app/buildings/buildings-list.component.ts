import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings-list.component.html'
})

export class BuildingsComponent implements OnInit {
  public buildings: Building[];

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
      this.http.get<Building[]>(this.baseUrl + 'buildings').subscribe(
      result => { this.buildings = result; },
      error => console.error(error)
    );
  }
}
