import { Injectable } from '@angular/core';
import {Proyect} from '../interfaces/proyect.interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  proyectList:any;
  constructor() { 
    this.proyectList = [
    {
      linkname:'http://alian.com',
      name_proyect:'Hostal-Linked',
      description:'este es el primer programa que vamos a ver ahora',
      picture:"../../../assets/barza.png"
   },
   {
    linkname:'http://mauel.com',
      name_proyect:'cats&dogs',
      description:'Segundo programa que vamos a ver ahora',
      picture:"../../../assets/barza.png"
   },
   {
    linkname:'http://tania.com',
      name_proyect:'kitchenStuff',
      description:'Tercer programa que vamos a ver ahora',
      picture:"../../../assets/barza.png"
   }];
  }
}
