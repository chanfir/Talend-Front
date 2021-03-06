import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobUpdateComponent } from './job-update.component';

describe('JobUpdateComponent', () => {
  let component: JobUpdateComponent;
  let fixture: ComponentFixture<JobUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
