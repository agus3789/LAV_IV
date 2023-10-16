import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnGETComponent } from './components/btn-get/btn-get.component';
import { ListaGETComponent } from './components/lista-get/lista-get.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnGETComponent,
    ListaGETComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
