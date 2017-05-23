import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyService {

  myurl:string = '../assets/test3.json';
//myurl:string = 'http://timetable.sbmt.by/android/test/test3.json';

  constructor(public http: Http) {

  }

  getData(){
    return this.http.get(this.myurl).map(res=>res.json()['dishes']);

  }
}
