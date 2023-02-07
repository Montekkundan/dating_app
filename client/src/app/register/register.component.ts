import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  registerForm: FormGroup = new FormGroup({});
  validationErrors: string[] | undefined;

  constructor(private accountService: AccountService,  private toastr: ToastrService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]],
    });
    this.registerForm.controls['password'].valueChanges.subscribe({
      next: () => this.registerForm.controls['confirmPassword'].updateValueAndValidity()
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value ? null : {
        notMatching: true
      }
    }
  }

  register()
  {
    this.accountService.register(this.registerForm.value).subscribe(
      {
        next: () =>
        {
          this.router.navigateByUrl('/members')
        },
        error: error => {
          this.validationErrors = error
        }
      }
    )
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
