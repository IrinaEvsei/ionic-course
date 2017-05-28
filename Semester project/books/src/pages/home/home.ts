import {Component} from '@angular/core';
import {BookService} from "../../providers/book-service";
import {CurrentBookService} from "../../services/currentBook.service";
import {NavController} from "ionic-angular";
import {UserPage} from "../user/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private isDataReceived: boolean = false;
  private canStartSpinner: boolean = false;
  private isFoundBooks: boolean;
  private booksList: Array<Object>;
  
  constructor(private _bookService: BookService,
              private _currentBookService: CurrentBookService,
              private _navController: NavController) {
    this.isDataReceived = false;
    this.canStartSpinner = false;
    this.isFoundBooks = true;
  }

  onSearchClick(bookTitle: string) {
    this.isDataReceived = false;
    this.canStartSpinner = true;
    this._bookService.getBooksByTitle(bookTitle)
      .subscribe(
        (data) => {
          if(data.length === 0) {
            this.isFoundBooks = false;
          } else {
            this.isFoundBooks = true;
          }
  
          this.booksList = new Array<Object>();
          this.isDataReceived = true;
          this.canStartSpinner = false;

          for(let i = 0; i < data.length; ++i) {
            if(JSON.parse(JSON.stringify(data[i])).cover_i) {
              this.booksList.push(data[i]);
            }
          }
        },
        (error) => {
          alert(error);
        }
      );
  }
  
  onBookLikeClick(book: Object) {
    this._currentBookService.setCurrentBook(book);
    this._currentBookService.setOption("add");
    this._navController.push(UserPage);
  }
}
