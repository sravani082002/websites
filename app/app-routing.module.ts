import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyntraComponent } from './myntra/myntra.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BeautyComponent } from './beauty/beauty.component';
import { StudioComponent } from './studio/studio.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { AddComponent } from './add/add.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path:'myntra',component:MyntraComponent
  },
  {
    path:'men',component:MenComponent
  },
  {
    path:'women',component:WomenComponent
  },
  {
    path:'kids',component:KidsComponent
  },
  {
    path:'electronics',component:ElectronicsComponent
  },
  {
    path:'beauty',component:BeautyComponent
  },
  {
    path:'studio',component:StudioComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'wishlist',component:WishlistComponent
  },
  {
    path:'bag',component:BagComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'**',component:LoginComponent
  },
  {
    path:'order',component:OrderComponent
  },
  {
    path:'add',component:AddComponent
  },
  {
    path: 'contactus', component :ContactusComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
