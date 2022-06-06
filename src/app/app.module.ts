import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { ServicioService } from './form-paciente/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    FormPacienteComponent,

     
  ],
  imports: [
    BrowserModule,
FormsModule,
  ],
  
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
