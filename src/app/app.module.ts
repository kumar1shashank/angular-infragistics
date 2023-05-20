import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewGridComponent } from './newgrid/newgrid.component';
import { IgxGridModule } from 'igniteui-angular';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NewGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
