import { Routes } from '@angular/router';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';



export const routes :Routes=[
   
    {
        path:'',
        component:UserInfoComponent
    },
    {
        path:'update-profile',
        component:UpdateProfileComponent
    },
  
]