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
      url_gitHub:'https://github.com/alianmc1988/portafolio',
      name_proyect:'Hostal-Linked',
      description:'Lorem ipsum dolor sit, amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eum reprehenderit esse tempore id, corporis aliquam dicta dolorem omnis eius! adipisicing elit. Maxime deserunt rerum repudiandae ipsam ut voluptate sed facere vitae omnis perspicia',
      picture:"../../../assets/barza.png",
   },
   {
      linkname:'http://mauel.com',
      url_gitHub:'https://github.com/alianmc1988/tourOfficeFront',
      name_proyect:'cats&dogs',
      description:'Lorem ipsum dolor sit, amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eum reprehenderit esse tempore id, corporis aliquam dicta dolorem omnis eius! adipisicing elit. Maxime deserunt rerum repudiandae ipsam ut voluptate sed facere vitae omnis perspicia',
      picture:"../../../assets/barza.png"
   },
   {
      linkname:'http://tania.com',
      url_gitHub:'https://github.com/alianmc1988/TourOfficeWebApp_Express',
      name_proyect:'kitchenStuff',
      description:'Lorem ipsum dolor sit, amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis eum reprehenderit esse tempore id, corporis aliquam dicta dolorem omnis eius! adipisicing elit. Maxime deserunt rerum repudiandae ipsam ut voluptate sed facere vitae omnis perspicia',
      picture:"../../../assets/barza.png"
   }];
  }
  
  
  
}
