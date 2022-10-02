import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshbalComponent } from './ashbal.component';

describe('AshbalComponent', () => {
  let component: AshbalComponent;
  let fixture: ComponentFixture<AshbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshbalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
