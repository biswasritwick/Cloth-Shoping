import { Component } from '@angular/core';
import { DealerServiceService } from 'src/app/services/dealer-service.service';
import { ActivatedRoute } from '@angular/router';
import { sellerProduct } from 'src/app/datatyps';

@Component({
  selector: 'app-user-product-details',
  standalone: true,
  imports: [],
  templateUrl: './user-product-details.component.html',
  styleUrl: './user-product-details.component.css'
})
export class UserProductDetailsComponent {
  public productDetails:any | undefined
constructor(private dealerService:DealerServiceService,private ActivatedRoute:ActivatedRoute){}
ngOnInit() {
  this.showProfileDetails()

}
public showProfileDetails(){
  let productId=this.ActivatedRoute.snapshot.paramMap.get('productid')
  console.log(productId);
  productId&& this.dealerService.getProductDetails(productId).subscribe({
    next:(result)=>{
this.productDetails=result
    }
  })

  
}
}
