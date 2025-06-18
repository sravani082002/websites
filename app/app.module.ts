import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MyntraComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ElectronicsComponent,
    BeautyComponent,
    StudioComponent,
    ProfileComponent,
    WishlistComponent,
    BagComponent,
    LoginComponent,
    OrderComponent,
    AddComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
