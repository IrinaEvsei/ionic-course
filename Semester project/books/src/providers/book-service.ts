import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../services/headers';
import { Observable }     from 'rxjs';

@Injectable()
export class BookService {
  constructor(private _http: Http) {}

  getBooksByTitle(title: string) {
    let request = 'http://openlibrary.org/search.json?title=' + title;

    return this._http.get(request, { headers: contentHeaders })
      .map((res: Response) => res.json().docs)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
