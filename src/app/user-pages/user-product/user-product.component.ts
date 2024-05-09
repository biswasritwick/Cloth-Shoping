import { Component } from '@angular/core';
import { sellerProduct } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';


@Component({
  selector: 'app-user-product',
  standalone: true,
  imports: [
  ],
  templateUrl: './user-product.component.html',
  styleUrl: './user-product.component.css'
})
export class UserProductComponent {
  public frontProducts: sellerProduct[] = []
  constructor(private delerService: DealerServiceService) { }
  ngOnInit() {
    this.delerService.getdealersProductlist().subscribe({
      next:(result)=>{
console.log(result);
this.frontProducts=result
      }
    })
  }
}
