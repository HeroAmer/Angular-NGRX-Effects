import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Adis2Service {

  constructor() { }


  // observable koji mozes "osluškivat" iz bilo koje komponente
  novoIme = new Subject<string>();



  //funkcija za mijenjanje subjekta (ovaj gore) -------> 2
changeStatus(newStatus){
  //next je ugradjena funkcija koja EMMITA vrijednost u subjekat -----> 3
  this.novoIme.next(newStatus); // <------ gurne AMer u status
  console.log(newStatus)
}

//Funkcija koja ti omogucava da osluskujes status -----> 4
listenToSubject(){
  return this.novoIme.asObservable();
}

  
}
