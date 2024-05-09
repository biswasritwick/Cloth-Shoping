import { Component } from '@angular/core';
import { sellerProduct } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-user-mainhome',
  templateUrl: './user-mainhome.component.html',
  styleUrls: ['./user-mainhome.component.css']
})
export class UserMainhomeComponent {
  public frontProducts: sellerProduct[] = []
  constructor(private delerService: DealerServiceService) { }
  ngOnInit() {
    this.delerService.getdealersProductlist().subscribe({
      next: (result) => {
        console.log(result);

        this.frontProducts = result
      }
    })
  }
}
