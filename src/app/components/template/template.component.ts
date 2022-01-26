import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `
  ]
})
export class TemplateComponent {

  usuario ={
    nombre: null,
    apellido: null,
    correo: null,
    pais:"",
    sexo:"",
    acepta: false
  }

  paises= [{
    codigo:"CRI",
    nombre:"Costa Rica"
  },
{
  codigo: "ESP",
  nombre:"España"
}]

sexos:string[] = ["Hombre", "Mujer"]

  constructor() { }


  guardar( forma:NgForm){
    console.log("formulario posteado")
    console.log("NgForm", forma)
    console.log("Valor", forma.value)
  }

}
