import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BuildingTypesComponent } from './building-types/building-types-list.component';
import { BuildingTypesFormComponent } from './building-types/building-types-form.component';
import { BuildingTypesService } from './building-types/building-types.service';
import { BuildingsComponent } from './buildings/buildings-list.component';
import { BuildingsService } from './buildings/buildings.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'building-types-list', component: BuildingTypesComponent, canActivate: [AuthorizeGuard], runGuardsAndResolvers: 'always' },
  { path: 'building-types-form', component: BuildingTypesFormComponent, canActivate: [AuthorizeGuard], runGuardsAndResolvers: 'always' },
  { path: 'buildings-list', component: BuildingsComponent, canActivate: [AuthorizeGuard], runGuardsAndResolvers: 'always' },
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BuildingTypesComponent,
    BuildingTypesFormComponent,
    BuildingsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    BuildingTypesService,
    BuildingsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
