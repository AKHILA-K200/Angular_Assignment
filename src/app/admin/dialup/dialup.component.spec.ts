import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialupComponent } from './dialup.component';

describe('DialupComponent', () => {
  let component: DialupComponent;
  let fixture: ComponentFixture<DialupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
