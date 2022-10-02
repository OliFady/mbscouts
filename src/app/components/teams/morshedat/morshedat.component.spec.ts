import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorshedatComponent } from './morshedat.component';

describe('MorshedatComponent', () => {
  let component: MorshedatComponent;
  let fixture: ComponentFixture<MorshedatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorshedatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorshedatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
