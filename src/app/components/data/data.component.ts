import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

//Ademas importar ReactiveFormsModule en el app.components sino no va a funcionar

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent  {

  forma:FormGroup;

  usuario:any = {
    nombrecompleto: {
      nombre:"Leandro",
      apellido:"Marrocchi"

    },
    correo: "leaa.marrocchi@gmail.com",
    telefono: 2932415221,
    //pasatiempos:["Correr", "Dormir", "Comer"]

  }



  

  constructor(){
    console.log(this.usuario)

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('',[ Validators.required, Validators.minLength(3) ]),
        'apellido': new FormControl('', [Validators.required, Validators.minLength(3)])
       
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'telefono': new FormControl('', [Validators.required, Validators.pattern('/^[1-9]\d{6,10}$/') ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
      
    })

  this.forma.controls['password2'].setValidators([
    Validators.required,
    this.noIgual.bind(this.forma)
  ])

  }

noIgual ( control: FormControl ): { [s:string]:boolean } {

  let forma:any =this;

  if(control.value !== forma.controls['password1'].value){
  return{
    noiguales:true
  }
  }
  return {noiguales: false};
}


  guardarCambios(){
    console.log(this.forma.value)
    console.log(this.forma);

    this.forma.reset({
      nombrecompleto:{
        nombre:"",
        apellido:""
      },
      correo:"",
      telefono:""
    })
  }

}
