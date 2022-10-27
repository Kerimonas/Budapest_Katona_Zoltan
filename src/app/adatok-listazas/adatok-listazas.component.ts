import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe,map, catchError, throwError} from 'rxjs';

@Component({
  selector: 'app-adatok-listazas',
  templateUrl: './adatok-listazas.component.html',
  styleUrls: ['./adatok-listazas.component.scss']
})
export class AdatokListazasComponent implements OnInit {
  adatok: any[] = [];
  adatokFejlec: string[] = ['evszam','magyar','nemet','szlovak','egyeb'];
  hibaUzenet: string = '';

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://budapest-lakossaga-default-rtdb.europe-west1.firebasedatabase.app/lakosok.json')
    .pipe(
      catchError( error  => {
        this.hibaUzenet = error.message;
        return throwError(error)
      }),
      map( adatok => {
        let ujAdatok: any[] = [];
        Object.entries(adatok).forEach( ([kulcs, ertek]) => {ujAdatok.push(ertek); })

        ujAdatok.sort((a, b) => (a.evszam < b.evszam)? 1: -1)

        return ujAdatok;
    })
    )
    .subscribe( (adatok: any []) => {
      this.adatok = adatok;});
  }

}
