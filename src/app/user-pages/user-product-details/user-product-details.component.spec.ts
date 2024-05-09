import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductDetailsComponent } from './user-product-details.component';

describe('UserProductDetailsComponent', () => {
  let component: UserProductDetailsComponent;
  let fixture: ComponentFixture<UserProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProductDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
