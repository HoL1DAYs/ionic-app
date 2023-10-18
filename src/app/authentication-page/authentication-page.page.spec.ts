import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationPagePage } from './authentication-page.page';

describe('AuthenticationPagePage', () => {
  let component: AuthenticationPagePage;
  let fixture: ComponentFixture<AuthenticationPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthenticationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
