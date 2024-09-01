import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    UserNavbarComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
})
export class UserHomeComponent implements OnInit {
  username: string = '';
  profileName: string = '';
  profileEmail: string = '';
  profilePhone: string = '';


  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser);
        this.username = `${user.firstname} ${user.lastname}`;
        this.profileName = `${user.firstname} ${user.lastname}`;
        this.profileEmail = user.email;
        this.profilePhone = user.mobileNo;
      } catch (error) {
        console.error('Error parsing user data from local storage', error);
      }
    } else {
      console.warn('No user data found in local storage');
    }
  }
}
