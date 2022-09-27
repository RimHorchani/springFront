import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../components/model/client';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(environment.url);

  }
  createClient(client: Client):Observable<Client>{
    return this.http.post<Client>(environment.url, client /*, { headers } */);

  }
  getClientById(id:number):Observable<Client>{
    return this.http.get<Client>(environment.url+id);


  }
  updateClient(id: number, client:Client):Observable<Client>{
    return this.http.put<Client>(environment.url+id,client)

  }
  deleteCv(id:number):Observable<Client>{
    return this.http.delete<Client>(environment.url+id);

  }
}
