import { Component, OnInit }        from '@angular/core';
import { AuthService }              from "../../services/auth.service";
import { CurrentBookService }       from "../../services/currentBook.service";
import { Storage }                  from "@ionic/storage";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit{
  private favouriteBooksList: Array<Object>;

  constructor(private auth: AuthService,
              private _currentBookService: CurrentBookService,
              private _storage: Storage,
              private _navController: NavController) {
    this.favouriteBooksList = new Array<Object>();
    
    this._storage.ready()
      .then(() => {
        this._storage.get(this.auth.user.name)
          .then((val) => {
            if(val != null) {
              this.favouriteBooksList = JSON.parse(val);
            }
          })});
  }
  
  ngOnInit() {
    if(this._currentBookService.getOption() === "add") {
      this._storage.ready()
      .then(() => {
        this._storage.get(this.auth.user.name)
        .then((val) => {
          if(val != null) {
            this.favouriteBooksList = JSON.parse(val);
          }
  
          this.favouriteBooksList.push(this._currentBookService.getCurrentBook());
          this._storage.set(this.auth.user.name, JSON.stringify(this.favouriteBooksList));
        })});
    }
  }
  
  doRefresh(refresher) {
    this._navController.setRoot(this._navController.getActive().component);
    refresher.complete();
  }
  
  onRemoveClick(index: number) {
    this._storage.ready()
    .then(() => {
      this._storage.get(this.auth.user.name)
      .then((val) => {
        if(val != null) {
          this.favouriteBooksList = JSON.parse(val);
        }
      
        this.favouriteBooksList.splice(index, 1);
        this._storage.set(this.auth.user.name, JSON.stringify(this.favouriteBooksList));
      })});
  }
}
