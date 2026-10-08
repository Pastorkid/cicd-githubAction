import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Nav } from './nav';

describe('Nav', () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nav],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the navigation heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const heading = compiled.querySelector('h1');

    expect(heading?.textContent).toContain('My Angular Routing Guide!');
  });

  it('should display Home link', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const links = compiled.querySelectorAll('a');

    expect(links[0]?.textContent?.trim()).toBe('Home');
  });

  it('should display Products link', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const links = compiled.querySelectorAll('a');

    expect(links[1]?.textContent?.trim()).toBe('Products');
  });

  it('should have two navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const links = compiled.querySelectorAll('nav a');

    expect(links.length).toBe(2);
  });
});
