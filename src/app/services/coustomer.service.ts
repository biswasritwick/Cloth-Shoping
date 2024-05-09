import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { coustomerData } from '../datatyps';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoustomerService {

  constructor(private Httpclient:HttpClient) { }

  coustomerApi="http://localhost:3000/coustomer_Data"


  
  public coustomerAdd(data: coustomerData) : Observable<object> {
    let myapi = `${this.coustomerApi}`
    return this.Httpclient.post(myapi, data)
  }
  public getcoustomerslist()  {  //all dealers details
    let myapi = `${this.coustomerApi}`
    return this.Httpclient.get<coustomerData[]>(myapi)
  }
  public getcoustomerDetails(id:any)  {
    let myapi = `${this.coustomerApi}/${id}`
    return this.Httpclient.get<coustomerData[]>(myapi)
  }
}
