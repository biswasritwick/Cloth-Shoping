import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-all-users',
  templateUrl: './admin-all-users.component.html',
  styleUrls: ['./admin-all-users.component.css']
})
export class AdminAllUsersComponent {
  constructor(private adminservice: AdminServiceService) { }
  public admins: any | undefined[] = []
  private subscriptions: Subscription[] = [];
public pass=true

  ngOnInit() {
    this.adminList()
  }

 public adminList() {
    this.subscriptions.push(this.adminservice.getAdminList().subscribe({
      next: (res) => {
        console.warn(res);
        this.admins = res
      },
      error: (error) => {

      },
      complete: () => {

      },

    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
