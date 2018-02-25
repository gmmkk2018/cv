import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFormLinksComponent } from './cv-form-links.component';

describe('CvFormLinksComponent', () => {
  let component: CvFormLinksComponent;
  let fixture: ComponentFixture<CvFormLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvFormLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFormLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
