import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListHeaderItemComponent } from './product-list-header-item.component';

describe('ProductListHeaderItemComponent', () => {
  let component: ProductListHeaderItemComponent;
  let fixture: ComponentFixture<ProductListHeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListHeaderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
