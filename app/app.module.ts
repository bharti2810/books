import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MainComponent }  from './main.component';
import { HttpModule } from "@angular/http";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    MainComponent
  ],
  bootstrap: [ MainComponent ]
})
export class AppModule { }