import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersManagerPageComponent } from './users-manager-page.component';

describe('UsersManagerPageComponent', () => {
  let component: UsersManagerPageComponent;
  let fixture: ComponentFixture<UsersManagerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersManagerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
