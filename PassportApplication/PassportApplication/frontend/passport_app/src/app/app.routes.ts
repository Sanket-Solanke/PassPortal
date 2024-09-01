import { LandingPageComponent } from './modules/public/landing-page/landing-page.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ApplicationFormComponent } from './modules/application-form/application-form.component';
import { routes as applicationFormRoutes } from './modules/application-form/form.routes';
import { UserInfoComponent } from './modules/user-module/user-info/user-info.component';
import { ApplicationInitStatus } from '@angular/core';
import { ApplicationStatusComponent } from './modules/user-module/application-status/application-status.component';
import { FeedbackComponent } from './modules/user-module/feedback/feedback.component';
import { AdminComponent } from './modules/admin/admin.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { routes as userRoutes } from './modules/user-module/user-info/user.routes';
import { AuthGuard } from './guards/auth.guard';
import { UserHomeComponent } from './modules/user-module/user-home/user-home.component';
import { BreadcrumbComponent } from './modules/shared/breadcrumb/breadcrumb.component';
import { UserLayoutComponent } from './modules/user-module/user-layout/user-layout.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { FaqComponent } from './modules/user-module/faq/faq.component';

export const routes: Routes = [
  //
  { path: '', component: LandingPageComponent },
  //

  //
  {
    path: 'user-home',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserHomeComponent,
        canActivate: [AuthGuard], data: { breadcrumb: 'Home' } },

      {
        path: 'feedback',
        component: FeedbackComponent,
        canActivate: [AuthGuard],
        data: { breadcrumb: 'Feedback' },
      },
      { path: 'faq', component: FaqComponent, data: { breadcrumb: 'FAQ' } },

      {
        path: 'history',
        component: ApplicationStatusComponent,
        canActivate: [AuthGuard],data: { breadcrumb: 'History' }
      },
 
  
      
      {
        path: 'payment',
        component: PaymentComponent,
        data: { breadcrumb: 'Payment' },
      },
    ],
  },
  //

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./modules/auth/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'application-form',
    component: ApplicationFormComponent,
    canActivate: [AuthGuard],
    children: applicationFormRoutes,
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: userRoutes,
  },
  {
    path: 'history',
    component: ApplicationStatusComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment/:applicationFee/:applicationId',
    component: PaymentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component:PageNotFoundComponent
  },
];
