import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit
{
  model: any ={};
  // TODO add member service reset userParams to reset filter on new UserLogin

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService)
  { }

  ngOnInit() :void
  {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')!;
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')!;

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }
    var themeToggleBtn = document.getElementById('theme-toggle')!;

    themeToggleBtn.addEventListener('click', function() {

      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }

      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }

  });

  }


  // login() {
  //   this.accountService.login(this.model).subscribe({
  //     next: response => this.router.navigateByUrl('/members'),
  //   })
  // }

  logout() {
    this.accountService.logout()
    this.router.navigateByUrl('/')
  }
}
