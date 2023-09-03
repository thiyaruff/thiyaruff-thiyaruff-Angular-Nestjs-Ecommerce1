import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBagsComponent } from './product-bags.component';

describe('ProductBagsComponent', () => {
  let component: ProductBagsComponent;
  let fixture: ComponentFixture<ProductBagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBagsComponent]
    });
    fixture = TestBed.createComponent(ProductBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
