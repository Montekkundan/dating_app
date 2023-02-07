import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users:any;
  model: any ={};
  constructor(public accountService: AccountService,  private router: Router) { }
  ngOnInit(): void {
  }

  registerToggle ()
  {
    this.registerMode =!this.registerMode;
  }

  cancelRegisterMode(event: boolean)
  {
    this.registerMode = event;
  }
  login() {
    this.accountService.login(this.model).subscribe({
      next: response => this.router.navigateByUrl('/members'),
    })
  }
}
