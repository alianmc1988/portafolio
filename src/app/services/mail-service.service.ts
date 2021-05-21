import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import {MailInterface } from '../interfaces/mailStructure.interfaces';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MailServiceService {
  constructor(
    private _http:HttpClient
    
  ) { }
  
  private urlAPI = 'http://localhost:3000';
  sendMail(mail:MailInterface): Observable<any> {
    return this._http.post(`${this.urlAPI}/send-email`, mail)
  }
  //
}
