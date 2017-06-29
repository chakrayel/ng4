import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class JsonPhotoService {
  private myData:Array<any>;
  private httpObservable: Observable<Array<any>>;

  constructor(private http: Http) {
    //this.myData = new Array<any>();
    // this.http.get("http://jsonplaceholder.typicode.com/photos")
    // .map(response => response.json()).subscribe(res => {
    //   this.myData = res;})
  }

  public fetchPhotos(): Observable<Array<any>> {
    this.httpObservable = this.http.get('http://jsonplaceholder.typicode.com/photos')
    .map((response: Response) => {
      let body = response.json();
      return body;
    });
    // .subscribe(res => {
    //   this.myData = res;
    //   console.log(this.myData);
    //   console.log(res);
    // })
    return this.httpObservable;
  }

}

export class Photo {
  //constructor(public )
}
