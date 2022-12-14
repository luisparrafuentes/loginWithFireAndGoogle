import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rickandmorty } from '../Modelo/listado/Listado';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  url = environment.url;
  constructor(private http: HttpClient , private AngFire: AngularFireAuth) { }

  login(correo:string, contrasena:string){
    return new Promise((resolve,rejects)=>{
    this.AngFire.signInWithEmailAndPassword(correo,contrasena).then((usuario)=> {
      console.log(usuario)
      resolve(usuario)
    }).catch(error=> rejects(error))
  })  
    
    }
 

  //obtenerPersonajes():Observable<rickandmorty> {
   // return this.http.get<rickandmorty>(this.url);

  //}
}
