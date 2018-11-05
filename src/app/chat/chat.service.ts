import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {

  url: string = ":3001/api/marvin/"

  constructor(private http:Http) { }

  enviarParaWatson(message:string): Observable<string[]> {
    console.log("message: " + message)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var corpo = {
      context: {},
      input: {"text": message} || {}
    };
    return this.http.post(this.url, corpo, options)
                  .pipe(map(this.extractData),
                  catchError(this.handleErrorObservable));
  }

  private extractData(res: Response) {
	  let body = res.json();
    console.log(body.output.text);
    return body.output.text || [];
  }

  private handleErrorObservable (error: Response | any) {
  	console.error(error.message || error);
  	return Observable.throw(error.message || error);
  }
}
