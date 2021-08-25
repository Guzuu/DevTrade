import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-types',
  templateUrl: './building-types-form.component.html'
})

export class BuildingTypesFormComponent {
  buildingTypesForm = this.formBuilder.group({
    name: ''
  });

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {}

  async onSubmit() {
    // Process data here
    await this.http.post<BuildingType>(this.baseUrl + 'buildingtypes', this.buildingTypesForm.value).toPromise();
    console.warn('Added new building type', this.buildingTypesForm.value);
    this.router.navigate(['/building-types-list']);
  }
}
