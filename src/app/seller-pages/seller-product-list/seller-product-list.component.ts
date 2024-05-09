import { Component } from '@angular/core';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent {
  public productLists: any | undefined
  constructor(private dealerService: DealerServiceService) { }
  ngOnInit() {
    /*  this.dealerService.getdealersProductlist().subscribe({
        next: (result) => {
          console.log(result);
          // this.productLists=result
  
        }
      })*/
    this.sellerProduct()
  }
  public sellerProduct() {
    let sellerLogId = localStorage.getItem('seller')
    this.dealerService.getsellerProducttList(sellerLogId).subscribe({
      next: (result) => {
        console.log(result);
        this.productLists = result


      }
    })


    // this.dealerService.cartData.subscribe({
    //   next:(result)=>{
    //     let item =result.filter((item:string)=>)
    //   }
    // })
  }
}
