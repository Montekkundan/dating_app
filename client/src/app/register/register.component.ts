import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity:0,
  }),
  animate('0.3s ease-in', style({opacity: 1})),
]);
const exitTransition = transition(':leave', [
  style({
    opacity:1,
  }),
  animate('1s ease-out', style({opacity: 0})),
]);
const fadeIn = trigger('fadeIn', [enterTransition])
const fadeOut = trigger('fadeOut', [exitTransition])
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeIn, fadeOut]
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService,  private toastr: ToastrService) { }
  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.model).subscribe(
      {
        next: response =>
        {
          this.cancel();
        },
        error: error => this.toastr.error(error.error),

      }
    )
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
