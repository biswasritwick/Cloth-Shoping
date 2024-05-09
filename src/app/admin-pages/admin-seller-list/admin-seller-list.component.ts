import { Component } from '@angular/core';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-admin-seller-list',
  templateUrl: './admin-seller-list.component.html',
  styleUrls: ['./admin-seller-list.component.css']
})
export class AdminSellerListComponent {
  constructor(private dealerservice: DealerServiceService) { }

  dealers: any | undefined[] = []

  ngOnInit() {
    this.adminList()
  }

  public adminList() {
    this.dealerservice.getdealerslist().subscribe({
      next: (res) => {
        console.warn(res);
        this.dealers = res
      },
      error: (error) => {
        console.warn("errors", error);

      },
      complete: () => {

      },

    })
  }
  public getproduct(id: string) {
    this.dealerservice.getDetails(id).subscribe({
      next: (res) => {
        console.warn(res);
      },
      error: (error) => {
        console.warn("errors", error);

      },
      complete: () => {

      },
    })
  }
}
