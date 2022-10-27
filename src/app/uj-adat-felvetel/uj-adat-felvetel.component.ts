import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-uj-adat-felvetel',
  templateUrl: './uj-adat-felvetel.component.html',
  styleUrls: ['./uj-adat-felvetel.component.scss']
})
export class UjAdatFelvetelComponent implements OnInit {
  ujAdat = {
    'evszam':   new Date().toISOString().substring(0,4),
    'magyar':   0,
    'nemet':   0,
    'szlovak':  0,
    'egyeb' :  0
  }

  hibaUzenet: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  felvetel(){
    this.http.post('https://budapest-lakossaga-default-rtdb.europe-west1.firebasedatabase.app/lakosok.json', this.ujAdat)

    .pipe(
      catchError( error  => {
        this.hibaUzenet = error.message;
        return throwError(error)
      })
    )

    .subscribe( () => this.router.navigate( ['adatok'] ) );
  }

}
