import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryListComponent } from './countries/country-list.component';
import { CountryDetailsComponent } from './countries/country-details.component';
import { CountryService } from './countries/country.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: ' ', redirectTo: 'countries', pathMatch: 'full'},
      {path: 'countries', component: CountryListComponent},
      {path: 'countries/:code', component: CountryDetailsComponent},
      {path: '**', redirectTo: 'countries', pathMatch: 'full'},
    ])
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
