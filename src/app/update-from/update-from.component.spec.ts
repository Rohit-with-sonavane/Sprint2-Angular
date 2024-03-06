import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFromComponent } from './update-from.component';

describe('UpdateFromComponent', () => {
  let component: UpdateFromComponent;
  let fixture: ComponentFixture<UpdateFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
