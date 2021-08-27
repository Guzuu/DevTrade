import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingsService, Building } from './buildings.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings-list.component.html'
})

export class BuildingsComponent implements OnInit {
  public buildings: Building[];

  constructor(
    private service: BuildingsService
  ) { }

  ngOnInit() {
    this.service.get().subscribe(result => this.buildings = result);
  }
}
