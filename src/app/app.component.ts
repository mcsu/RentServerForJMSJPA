import { Car } from './car';
import { CarService } from './car.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>


  <ul class="cars">
      <li *ngFor="let car of cars"
        [class.selected]="car === selectedCar"
        (click)="onSelect(car)">
        <span class="badge">{{car.id}}</span> {{car.plateNumber}}
      </li>
   </ul>
  <nav>
    <a routerLink="/cars">Rent a car</a>
  </nav>
    <router-outlet></router-outlet>
  `,
  providers: [CarService]
})

export class AppComponent implements OnInit {

  title = 'Car Rental Service';
  results: string[];
  cars: Car[];
  selectedCar: Car;

  //constructor(private carService: CarService) {}

  getCars(): void {
    //this.carService.getCars().then(cars => this.cars = cars);
  }
   constructor(private http: HttpClient) {}
   ngOnInit(): void {
    this.http.get('http://127.0.0.1:8080/voitures').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data[''];
    });
  }
  onSelect(car: Car): void {
    this.selectedCar = car;
  }

 }
