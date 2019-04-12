import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackesComponent } from './packes.component';

describe('PackesComponent', () => {
  let component: PackesComponent;
  let fixture: ComponentFixture<PackesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
