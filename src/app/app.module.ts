  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//form control
import{ReactiveFormsModule,FormsModule}from '@angular/forms'

//layouts,coustomer layoutss
import { WebsitesLayoutComponent,NavbarComponent,FooterComponent,MobileNavComponent } from './layouts/coustomer-layouts';

//layouts,admin layoutss
import { AdminWebsitesLayoutsComponent,AdminNavbarComponent, AdminHeaderComponent,AdminFooterComponent} from './layouts/admin-layouts/admin-index';

//layouts,seller layoutss
import { SellerWebsitesLayoutsComponent,SellerNavbarComponent,SellerHeaderComponent,SellerFooterComponent } from './layouts/seller-layouts/seller-index';



import { UserMainhomeComponent } from './user-pages/user-mainhome/user-mainhome.component';
import { UserAboutComponent } from './user-pages/user-about/user-about.component';

import { AdminAllUsersComponent } from './admin-pages/admin-all-users/admin-all-users.component';
import { AdminDashboardComponent } from './admin-pages/admin-dashboard/admin-dashboard.component';
import { AdminAddSellerComponent } from './admin-pages/admin-add-seller/admin-add-seller.component';
import { AdminSellerListComponent } from './admin-pages/admin-seller-list/admin-seller-list.component';
import { AdminCoustomerListComponent } from './admin-pages/admin-coustomer-list/admin-coustomer-list.component';
import { AdminSignupSigninComponent } from './admin-pages/admin-signup-signin/admin-signup-signin.component';
import { AdminAddAdminComponent } from './admin-pages/admin-add-admin/admin-add-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginWebsiteLayoutsComponent } from './layouts/login-layouts/login-website-layouts/login-website-layouts.component';
import { LoginSignUpComponent } from './layouts/login-layouts/login-sign-up/login-sign-up.component';
import { SellerDashboardComponent } from './seller-pages/seller-dashboard/seller-dashboard.component';
import { SellerProfileComponent } from './seller-pages/seller-profile/seller-profile.component';
import { AdminProfileComponent } from './admin-pages/admin-profile/admin-profile.component';
import { SellerAddProductComponent } from './seller-pages/seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-pages/seller-product-list/seller-product-list.component';
import { SellerOrderListComponent } from './seller-pages/seller-order-list/seller-order-list.component';
import { CommonModule, JsonPipe } from '@angular/common';
;


@NgModule({
  declarations: [
    AppComponent,
    WebsitesLayoutComponent,
    NavbarComponent,
    FooterComponent,
    MobileNavComponent,
    UserMainhomeComponent,
    UserAboutComponent,
    AdminWebsitesLayoutsComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminAllUsersComponent,
    AdminDashboardComponent,
    AdminAddSellerComponent,
    AdminSellerListComponent,
    AdminCoustomerListComponent,
    AdminSignupSigninComponent,
    AdminAddAdminComponent,
    LoginWebsiteLayoutsComponent,
    LoginSignUpComponent,
    SellerFooterComponent,
    SellerHeaderComponent,
    SellerNavbarComponent,
    SellerWebsitesLayoutsComponent,
    SellerDashboardComponent,
    SellerProfileComponent,
    AdminProfileComponent,
    SellerAddProductComponent,
    SellerProductListComponent,
    SellerOrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
