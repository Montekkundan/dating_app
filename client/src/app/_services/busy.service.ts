import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'square-jelly-box',
      bdColor: 'rgba(0,0,23,0.8)',
      color: '#ffffaa'
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <=0)
    {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
