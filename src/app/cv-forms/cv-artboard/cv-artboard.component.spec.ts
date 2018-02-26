import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvArtboardComponent } from './cv-artboard.component';

describe('CvArtboardComponent', () => {
  let component: CvArtboardComponent;
  let fixture: ComponentFixture<CvArtboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvArtboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvArtboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
