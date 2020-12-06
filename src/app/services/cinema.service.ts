import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  host: string = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  public getVilles(){
    return this.httpClient.get(this.host + "villes")
  }

  public getCinemas(v: any) {
    return this.httpClient.get(v._links.cinemas.href)
  }

  public getSalles(c: any) {
    return this.httpClient.get(c._links.salles.href)
  }

  public getProjections(salle: any) {
    let url= salle._links.projections.href.replace("{?projection}", "") + "?projection=p1"
    return this.httpClient.get(url)
  }
}
