import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInsertComponent } from './job-insert.component';

describe('JobInsertComponent', () => {
  let component: JobInsertComponent;
  let fixture: ComponentFixture<JobInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobInsertComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
