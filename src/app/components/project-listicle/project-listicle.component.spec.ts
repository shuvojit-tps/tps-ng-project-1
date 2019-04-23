import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListicleComponent } from './project-listicle.component';

describe('ProjectListicleComponent', () => {
  let component: ProjectListicleComponent;
  let fixture: ComponentFixture<ProjectListicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
