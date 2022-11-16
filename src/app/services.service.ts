import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Park } from './park';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseURL="http://localhost:8080/api/v1/park";
  constructor(private httpClient:HttpClient) { }

  getParkList():Observable<Park[]>{
    return this.httpClient.get<Park[]>(`${this.baseURL}`);
  }
  createPark(park:Park):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,park);
  }


  getParkId(id:number):Observable<Park>{
    return this.httpClient.get<Park>(`${this.baseURL}/${id}`);
  }

  updatePark(id:number,park:Park):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,park);
  }

  deletePark(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
