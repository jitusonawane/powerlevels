import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSaiyanTfourComponent } from './super-saiyan-tfour.component';

describe('SuperSaiyanTfourComponent', () => {
  let component: SuperSaiyanTfourComponent;
  let fixture: ComponentFixture<SuperSaiyanTfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSaiyanTfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSaiyanTfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
