import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChangeDetectorRef,  DoCheck, inject, OnInit } from '@angular/core';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { RefreshService } from '../../../services/refresh.service';
import { ToastService } from '../../../services/toast.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent implements  DoCheck {
  username: string = '';
  profileName: string = '';
  profileEmail: string = '';
  profilePhone: string = '';
  isActivate: boolean = false;
  private router = inject(Router);
  private authService=inject(AuthService);
  private toastService=inject(ToastService)
  currentUser: User | null = null;

  ngDoCheck(): void {
    this.checkUserStatus();
    this.loadUserData();
  }
  checkUserStatus() {
    const loggedInUser = this.authService.getLoggedInUser();
    if(loggedInUser){

      this.isActivate = true;
      
    }else{
      this.isActivate=false;
    }
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
 
  logout(): void {
    this.authService.logout();
    this.isActivate = false;
    this.router.navigate(['/login']); 
  }
}
