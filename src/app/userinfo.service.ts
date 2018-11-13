import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor(private httpc: HttpClient) { }

  fetchData() {
    return this.httpc.get('assets/test.json');
  }




}
