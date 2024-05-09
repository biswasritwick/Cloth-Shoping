import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent {
  public menuType: string = 'default'

  logout(){
    
  }
  navitems = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-gauge',
      routlink: 'seller-dashboard',
    },
    {
      number: '2',
      name: 'seller profile',
      icon: 'fa-regular fa-user',
      routlink: 'seller-profile',
    },
    {
      number: '3',
      name: 'seller add product',
      icon: 'fa-solid fa-house',
      routlink: 'seller-add-product',


    },
    {
      number: '4',
      name: 'seller product list',
      icon: 'fa-solid fa-house',
      routlink: 'seller-product-list',

    },
    {
      number: '5',
      name: 'seller order list',
      icon: 'fa-solid fa-list',
      routlink: 'seller-order-list',
    },
    {
      number: '8',
      name: 'settings',
      icon: 'fa-solid fa-gear',
      routlink: '',
    }
  ]
}
