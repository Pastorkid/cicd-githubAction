import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { Products } from './products';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap: {
              subscribe: () => {},
            },
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: vi.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain two products', () => {
    expect(component.products.length).toBe(2);
  });

  it('should render two products', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const products = compiled.querySelectorAll('.individual-product');

    expect(products.length).toBe(2);
  });

  it('should render product names', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Camera Pro');
    expect(compiled.textContent).toContain('Apple Watch');
  });

  it('should navigate to product details', () => {
    component.viewProduct(1);

    expect(router.navigate).toHaveBeenCalledWith(['/product-details', 1]);
  });

  it('should navigate when View details is clicked', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.individual-product button');

    buttons[0].click();

    expect(router.navigate).toHaveBeenCalledWith(['/product-details', 1]);
  });
});
