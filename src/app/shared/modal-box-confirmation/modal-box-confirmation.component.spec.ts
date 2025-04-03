import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoxConfirmationComponent } from './modal-box-confirmation.component';

describe('ModalBoxConfirmationComponent', () => {
  let component: ModalBoxConfirmationComponent;
  let fixture: ComponentFixture<ModalBoxConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalBoxConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalBoxConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
