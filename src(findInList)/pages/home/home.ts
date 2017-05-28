import { Component } from '@angular/core';

import { NavController,ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: string[] = ['Apple','Banana','Orange','Tomatoes'];
  itemsNoFilter: string[];

  constructor(public navCtrl: NavController) {
    this.itemsNoFilter = this.items;
  }

  doAdd(itm: ItemSliding){
    let newItem: string = prompt("Insert new meal");
    this.items.push(newItem);
    this.itemsNoFilter = this.items;
    itm.close();
  }
  doRemove(item: string,itm: ItemSliding){
    let index: number = this.items.indexOf(item);
    this.items.splice(index,1);
    this.itemsNoFilter = this.items;
    itm.close();
  }

  getItems(evnt: any){
    this.items = this.itemsNoFilter;
    let term = evnt.target.value.toLowerCase();

    this.items=this.items.filter((item)=>{
      return(item.toLowerCase().indexOf(term)==0);});

  }

}
