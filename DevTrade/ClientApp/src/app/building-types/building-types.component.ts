import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-building-types',
  templateUrl: './building-types.component.html'
})
export class BuildingTypesComponent {
  public buildingtypes: BuildingType[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<BuildingType[]>(baseUrl + 'buildingtypes').subscribe(result => {
      this.buildingtypes = result;
    }, error => console.error(error));
  }
}

interface BuildingType {
  id: number;
  name: string;
}
