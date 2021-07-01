import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  // Variables
  proyectList:any;
  
  constructor() { 
    this.proyectList= [
      {
        url:"../../../assets/codes/proyect_0/codeHtml.txt",
        url_gitHub:'https://github.com/alianmc1988/miFactura',
        name_proyect:'CalcElectric',
        technologies:'HTML 5, CSS 3, Bootstrap 4, Vanilla Javascript',
        description:'CalcElectric. Given a previous lecture of the electric clock and a current one, you could know exactly how munch mony you have to pay and store the report to keep tracking your electrical espences ',
        picture:"../../../assets/codes/proyect_0/Logo-ElectricApp.png",
     },
     {
        linkname:'http://mauel.com',
        url_gitHub:'https://github.com/alianmc1988/nail-art',
        name_proyect:'Nail-Art',
        technologies:'Angular CLI 12, NgBootstrap, CSS, NodeJS, Express, Mongo DB (MEAN)' ,
        description:'Business web-page, not only to display de services and resources of the company with a CRUD, but with a Rest-API that allows to edit and control the behavior of services and login options',
        picture:"../../../assets/nail-art-pic/nail-art-logo.jpg"
     },
     {
        linkname:'http://tania.com',
        url_gitHub:'https://github.com/alianmc1988/TourOfficeWebApp_Express',
        name_proyect:'kitchenStuff',
        technologies:'HTML, CSS, Bootstrap, vanilla Javascript',
        description:'Lorem ipsum dolor sit, amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eum reprehenderit esse tempore id, corporis aliquam dicta dolorem omnis eius! adipisicing elit. Maxime deserunt rerum repudiandae ipsam ut voluptate sed facere vitae omnis perspicia',
        picture:"../../../assets/barza.png"
     }
   ];
  }
  
  
  
}
