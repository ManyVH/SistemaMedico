import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { formPaciente } from './Form.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }


   valorForm:formPaciente  = {
    Nombre: '',
    Apellido: 'Hola',
    Sexo: '',
    Edad: 0,
    FechaRegistro: new Date(19/0/2022),
    FechaNacimiento:new Date(2022/0/2022),
    Nacionalidad:'',
    Religion:'',
    Telefono:0,
    Domicilio:'',
    correo:'',
    ConmtactoEmergencia:''

    
  }

  Guardar(){
    console.log(this.valorForm)
  
  
  }
  

}




