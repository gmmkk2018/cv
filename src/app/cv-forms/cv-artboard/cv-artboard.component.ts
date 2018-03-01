import { Component, OnInit } from '@angular/core';
import { CvService } from '../shared/cv.service';
import { PersonalData } from '../shared/cv.model';

@Component({
  selector: 'app-cv-artboard',
  templateUrl: './cv-artboard.component.html',
  styleUrls: ['./cv-artboard.component.css']
})
export class CvArtboardComponent implements OnInit {

  personalData = new PersonalData;

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.personalData = this.cvService.getSharedValue();
  }

}
