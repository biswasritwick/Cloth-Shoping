import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//al components
import { WebsitesLayoutComponent } from './layouts/coustomer-layouts';
import { UserMainhomeComponent } from './user-pages/user-mainhome/user-mainhome.component';
import { UserAboutComponent } from './user-pages/user-about/user-about.component';
import { AdminWebsitesLayoutsComponent } from './layouts/admin-layouts/admin-index';

import { AdminAllUsersComponent } from './admin-pages/admin-all-users/admin-all-users.component';
import { AdminDashboardComponent } from './admin-pages/admin-dashboard/admin-dashboard.component';
import { AdminCoustomerListComponent } from './admin-pages/admin-coustomer-list/admin-coustomer-list.component';
import { LoginWebsiteLayoutsComponent } from './layouts/login-layouts/login-index';
import { LoginSignUpComponent } from './layouts/login-layouts/login-sign-up/login-sign-up.component';
import { AuthGuard } from './auth-file/admin-auth/admin-auth-gard.guard';
import { SellerWebsitesLayoutsComponent } from './layouts/seller-layouts/seller-index';
import { SellerDashboardComponent } from './seller-pages/seller-dashboard/seller-dashboard.component';
import { SellerProfileComponent } from './seller-pages/seller-profile/seller-profile.component';
import { SellerAddProductComponent } from './seller-pages/seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-pages/seller-product-list/seller-product-list.component';
import { SellerOrderListComponent } from './seller-pages/seller-order-list/seller-order-list.component';
import { sellerAuthGuard } from './auth-file/seller-auth/seller-auth.guard';
import { UserProductComponent } from './user-pages/user-product/user-product.component';
import { UserProductDetailsComponent } from './user-pages/user-product-details/user-product-details.component';

const routes: Routes = [
  {    //main layouts-----------------------------------
    path: '',
    component: WebsitesLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'app-home',
        pathMatch: 'full'
      },
      {
        path: 'app-home',
        component: UserMainhomeComponent
      },
      {
        path: 'about',
        component: UserAboutComponent
      },
      {
        path:'products',
        component:UserProductComponent
      },
      {
        path:'products-details/:productid',
        component:UserProductDetailsComponent
      }

    ]
  },
  {      //admin layouts-----------------------------------
    path: 'admin',
    component: AdminWebsitesLayoutsComponent,
    children: [
      {
        path: '',
        redirectTo: 'app-home',
        pathMatch: 'full'
      },
      {
        path: 'app-home',
        component: AdminDashboardComponent

      },

      {
        path: 'admin-user-list', loadChildren: () => import('./admin-pages/admin-all-users/admin-user-module/admin-user-module.module').then(m => m.AdminUserModuleModule)
      },
      {
        path: 'admin-seller-list',
        loadChildren: () => import('./admin-pages/admin-seller-list/admin-seller-module/admin-seller-module.module').then
          (m => m.AdminSellerModuleModule)
      },
      {
        path: 'admin-coustomer-list',
        component: AdminCoustomerListComponent
      }


    ], canActivate: [AuthGuard]
  },
  {     // LOGIN layouts-----------------------------------
    path: 'login-page-layout',
    component: LoginWebsiteLayoutsComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'loginpage'
    },

    {
      path: 'loginpage',
      component: LoginSignUpComponent
    }
    ]
  },
  {    // SELLER layouts-----------------------------------
    path: 'seller',
    component: SellerWebsitesLayoutsComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'seller-dashboard'
    },
    {
      path: 'seller-dashboard',
      component: SellerDashboardComponent
    },
    {
      path: 'seller-profile',
      component: SellerProfileComponent
    },
    {
      path: 'seller-add-product',
      component: SellerAddProductComponent
    },
    {
      path: 'seller-product-list',
      component: SellerProductListComponent
    },
    {
      path: 'seller-order-list',
      component: SellerOrderListComponent
    },
    ],canActivate:[sellerAuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
