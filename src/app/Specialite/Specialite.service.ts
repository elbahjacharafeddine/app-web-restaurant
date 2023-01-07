import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Specialite } from './Specialite';
import { FormBuilder} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  private baseURL3 = "http://localhost:8089/specialite";
  private baseURL = "http://localhost:8089/specialite/all";
  private baseURL1 = "http://localhost:8089/specialite/addSpeciality";
  private baseURL2 = "http://localhost:8089/specialite/Specialite";


  constructor(private httpClient: HttpClient,private builder: FormBuilder) { }

  getSpecialiteList(): Observable<Specialite[]>{
    return this.httpClient.get<Specialite[]>(`${this.baseURL}`);
  }

  createSpecilaite(specialite: Specialite): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, specialite);
  }

  getSpecialiteById(id: number): Observable<Specialite>{
    return this.httpClient.get<Specialite>(`${this.baseURL}/${id}`);
  }

  updateSpecialite(id: number, specialite: Specialite): Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`, specialite);
  }

  deleteSpecialite(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL2}/${id}`);
  }

}
