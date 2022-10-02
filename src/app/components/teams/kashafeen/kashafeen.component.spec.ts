import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KashafeenComponent } from './kashafeen.component';

describe('KashafeenComponent', () => {
  let component: KashafeenComponent;
  let fixture: ComponentFixture<KashafeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KashafeenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KashafeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
