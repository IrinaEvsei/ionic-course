import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {bufferToggle} from "rxjs/operator/bufferToggle";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mydate = new Date();
  toggle = true;
  constructor(public navCtrl: NavController) {
    
  }

  get format(){
  return this.toggle ? "fullDate" : "shortDate";

  }

  changeFormat(){
  this.toggle = !this.toggle;


  }

}
