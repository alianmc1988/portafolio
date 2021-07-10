import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  // Variables
  proyectListEN:any;
  proyectListES:any;
  
  
  constructor() { 
    this.proyectListEN= [
      {
        linkname:"https://alianmc1988.github.io/MiFactura/",
        url_gitHub:'https://github.com/alianmc1988/miFactura',
        name_proyect:'CalcElectric',
        technologies:'HTML 5, CSS 3, Bootstrap 4, Vanilla Javascript',
        description:'CalcElectric. Given a previous lecture of the electric clock and a current one, you could know exactly how munch mony you have to pay. You can also store the report to keep tracking of your electrical espences. ',
        picture:"../../../assets/codes/proyect_0/Logo-ElectricApp.png",
     },
     {
        linkname:'https://github.com/alianmc1988/nail-art',
        url_gitHub:'https://github.com/alianmc1988/nail-art',
        name_proyect:'Nail-Art',
        technologies:'Angular CLI 12, NgBootstrap, CSS, NodeJS, Express, Mongo DB (MEAN)' ,
        description:'Business web-page, not only to display de services and resources of the company with a CRUD, but with a Rest-API that allows to edit and control the behavior of services and login options',
        picture:"../../../assets/nail-art-pic/nail-art-logo.jpg"
     },
     {
        linkname:'https://github.com/alianmc1988/TourOfficeWebApp_Express',
        url_gitHub:'https://github.com/alianmc1988/TourOfficeWebApp_Express',
        name_proyect:'Linked-House',
        technologies:'Angular CLI, NgBootstrap, NodeJs, Express, MySQL',
        description:'Web app and Startup-Business to make easy the way in how the hostal’s owners manage their reservations all around Cuba',
        picture:"../../../assets/casita.png"
     }
   ];
   //Lista en español
   this.proyectListES= [
    {
      linkname:"https://alianmc1988.github.io/MiFactura/",
      url_gitHub:'https://github.com/alianmc1988/miFactura',
      name_proyect:'CalcElectric',
      technologies:'HTML 5, CSS 3, Bootstrap 4, Vanilla Javascript',
      description:'CalcElectric.Dado un valor de lectura previo del metrocontador, se puede conocer exactamente cuanto debe pagar por consumo de corriente ',
      picture:"../../../assets/codes/proyect_0/Logo-ElectricApp.png",
   },
   {
      linkname:'https://github.com/alianmc1988/nail-art',
      url_gitHub:'https://github.com/alianmc1988/nail-art',
      name_proyect:'Nail-Art',
      technologies:'Angular CLI 12, NgBootstrap, CSS, NodeJS, Express, Mongo DB (MEAN)' ,
      description:'Aplicación web para un centro de belleza en la Habana. Esta le muestra al cliente todas las prestaciones del Centro y le permite hacer reservas. Además le permite al dueño, manejar esas reservas y administrar el stock de productos en existencia. ',
      picture:"../../../assets/nail-art-pic/nail-art-logo.jpg"
   },
   {
      linkname:'https://github.com/alianmc1988/TourOfficeWebApp_Express',
      url_gitHub:'https://github.com/alianmc1988/TourOfficeWebApp_Express',
      name_proyect:'Linked House',
      technologies:'Angular CLI, NgBootstrap, NodeJs, Express, MySQL',
      description:'Aplicación Web y Startup-Business que le hace la vida más fácil a los dueños de Hostales a la hora de manejar sus reservaciones por toda Cuba',
      picture:"../../../assets/casita.png"
   }
 ];
  }
  
  
  
}
