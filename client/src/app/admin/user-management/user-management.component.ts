import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  user: User[] =[];
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getUsersWithRoles()
  {
    this.adminService.getUsersWithRoles().subscribe({
      next: users => this.user = users
    })
  }

}
