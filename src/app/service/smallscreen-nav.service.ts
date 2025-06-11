import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SmallscreenNavService {
  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable(); //this will be used by the components

  changeMessage(message: boolean) {
    console.log('value the service received: ', message);
    this.messageSource.next(message);
  }
}
