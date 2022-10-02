import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsLandingComponent } from './teams-landing.component';

describe('TeamsLandingComponent', () => {
  let component: TeamsLandingComponent;
  let fixture: ComponentFixture<TeamsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
