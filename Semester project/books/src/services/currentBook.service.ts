import {Injectable} from "@angular/core";
@Injectable()
export class CurrentBookService {
  private currentBook: Object;
  private option: string = "nav";
  
  setCurrentBook(book: Object) {
    this.currentBook = book;
  }
  
  setOption(option: string) {
    this.option = option;
  }
  
  getCurrentBook() {
    return this.currentBook;
  }
  
  getOption() {
    return this.option;
  }
}