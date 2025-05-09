import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styles: ``
})
export class UnCommonPageComponent {



  // i18n select
  public name: string = 'Richarson';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }



  changeClient() {
    this.name = 'Marcela';
    this.gender = 'female';
    }


    // i18n plural

  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Ricardo', 'Marcela'];
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': "Tenemos un cliente esperando.",
    '=2': 'Tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient() {
    this.clients.shift();
    }



    //keyValue pipe

    public person = {
      name: 'Richarson',
      age: 25,
      address: 'Otawa, Canada'
    }

// Async Pipe

//interval es una manera de crear observable que emite valores cada segundo o segun se defina
    public myObservable = interval(2000)
    .pipe(
      tap( (value ) => console.log('tap value ', value) )

      );


      public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve('Tenemos data de promesa')
        }, 3500)
      })

}
