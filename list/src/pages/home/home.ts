import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MyService} from '../../providers/my-service';

export class Person{
  id: number;
  name: string;
  job:string;
  salary: number;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  parray: Person[];
  constructor(public navCtrl: NavController, public ms: MyService) {
    
  }

  ionViewDidLoad()
{
    this.ms.getData().subscribe(data=>this.parray=data);

}



}
