import { Component, OnInit } from '@angular/core';
import {CinemaService} from "../services/cinema.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  villes: any;
  cinemas: any;
  salles: any;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getVilles()
      .subscribe(response => {
        this.villes = response;
        console.log(response)
      },error => {
        console.log(error)
      })
  }


  getCinema(v: any) {
    this.cinemaService.getCinemas(v)
      .subscribe(response => {
        this.cinemas = response;
        console.log(response)
      },error => {
        console.log(error)
      })
  }

  getSalles(s: any) {
    this.cinemaService.getSalles(s)
      .subscribe(response => {
        this.salles = response
        console.log(response)
      }, error => {
        console.log(error)
      })
  }
}
