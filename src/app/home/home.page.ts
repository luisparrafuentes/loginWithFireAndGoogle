import { Component, OnInit } from '@angular/core';
import { personajes } from '../Modelo/listado/Listado';
import { ServicesService } from '../servicios/services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  personaje: personajes[] = [];

  correo:string;
  contrasena:string;

  constructor(private servicio: ServicesService) {}


  ngOnInit(){
   // this.servicio.obtenerPersonajes().subscribe(data => {
     // this.personaje = data.results;
      //console.log(this.personaje)
    //},error=>{console.log(error)})
  }
  loguearse(){
    this.servicio.login(this.correo,this.contrasena).then((respuesta)=>{
      console.log(respuesta)
    }).catch(error => alert('Datos incorrectos' + error));

  }

}
