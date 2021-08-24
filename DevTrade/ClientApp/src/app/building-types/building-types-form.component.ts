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

  onSubmit(): void {
    // Process data here
    this.http.post<BuildingType>(this.baseUrl + 'buildingtypes', this.buildingTypesForm.value).subscribe(
      result => { },
      error => console.error(error)
    );
    console.warn('Added new building type', this.buildingTypesForm.value);
    this.buildingTypesForm.reset();
    this.router.navigate(['/building-types-list']);
  }
}
