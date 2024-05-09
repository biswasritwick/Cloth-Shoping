import { Component } from '@angular/core';
import { Dealersdata } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent {
  public dealesdetails: any = [  ];
  public dealesName: any = [];
  public dealesProductLength: number = 0;
  constructor(private adminService: AdminServiceService, private dealerService: DealerServiceService) { }

  ngOnInit() {
    this.dashboardAllitemsLength()
  }

  public dashboardAllitemsLength() {
    this.dealerService.logData()
    this.dealerService.employeLogData.subscribe({
      next: (result: Dealersdata) => {
        console.log(result);
        this.dealesdetails=result
        this.dealesdetails.forEach((element:any)=>{
        console.log(element.firstname +element.lastname);
this.dealesName=element.firstname + element.lastname
        })
      }
    })
    let sellerID = localStorage.getItem('seller')
    this.dealerService.getsellerProducttList(sellerID).subscribe({
      next: (result: any) => {
        console.warn(result.length);

        this.dealesProductLength = result.length
      }
    })
  }
}
