import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BuildingTypesService, BuildingType } from './building-types.service'

@Component({
  selector: 'app-building-types',
  templateUrl: './building-types-list.component.html'
})

export class BuildingTypesComponent implements OnInit {
  public buildingtypes: BuildingType[];

  constructor(
    private router: Router,
    private service: BuildingTypesService,
  ) { }

  ngOnInit() {
    this.service.get().subscribe(result => this.buildingtypes = result);;
  }

  editOnClick(id: number) {
    this.router.navigate(['/building-types-form/' + id]);
  }
}
