import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { Car } from './car';
import { CARS } from './mock-cars';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class CarService {


  private heroesUrl = 'http://127.0.0.1:8080/voitures';
  constructor(private http: Http) {}

  getCars(): Promise<Car[]> {
      return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json() as Car[])
             .catch(this.handleError);

}

  private handleError(error: any): Promise < any > {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  getCar(id: number): Promise < Car > {
    /** update this method with this.http.get... see https://angular.io/guide/http) **/
    //return Promise.resolve(CARS[id]);
     return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json() as Car[])
             .catch(this.handleError);
  }

  rent(car) {
    car.rented = true;
  }

  getBack(car) {
    car.rented = false;
  }

}
