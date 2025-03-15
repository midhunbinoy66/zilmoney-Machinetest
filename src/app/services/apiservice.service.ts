import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interface/userInterfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http:HttpClient
  ) { }

  apiUrl= 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json'

  fetchData(){
    return this.http.get<IUser[]>(this.apiUrl)
  }
}
