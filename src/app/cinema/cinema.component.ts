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


  constructor(public cinemaService: CinemaService) { }

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

  getSalles(c: any) {
    this.cinemaService.getSalles(c)
      .subscribe(response => {
        this.salles = response;
       this.salles._embedded.salles.forEach((salle: { projections: Object; }) => {
          this.cinemaService.getProjections(salle)
            .subscribe(response => {
              salle.projections = response;
              console.log(response)
            },error => {
              console.log(error)
            })
        }
       )
        console.log(response)
      }, error => {
        console.log(error)
      })
  }
}
