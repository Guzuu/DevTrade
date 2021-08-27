import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BuildingTypesService, BuildingType } from './building-types.service'

@Component({
  selector: 'app-building-types',
  templateUrl: './building-types-form.component.html'
})

export class BuildingTypesFormComponent {
  buildingTypesForm = this.formBuilder.group({
    id: 0,
    name: ''
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: BuildingTypesService,
  ) { }

  async onSubmit() {
    // Process data here
    await this.service.create(this.buildingTypesForm.value);
    console.warn('Added new building type', this.buildingTypesForm.value);
    this.router.navigate(['/building-types-list']);
  }
}
