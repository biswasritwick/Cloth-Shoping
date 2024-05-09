import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent {
  @Output()navStatus =new EventEmitter<boolean>()

  navBar:boolean=false
  public responceNavbar(){
  this.navBar=!this.navBar
  this.navStatus.emit(this.navBar)
  }
}
