import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahratComponent } from './zahrat.component';

describe('ZahratComponent', () => {
  let component: ZahratComponent;
  let fixture: ComponentFixture<ZahratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZahratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
