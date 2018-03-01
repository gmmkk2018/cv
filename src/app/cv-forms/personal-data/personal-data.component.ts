import { Component, OnInit } from '@angular/core';
import { CvService } from '../shared/cv.service';
import { PersonalData } from '../shared/cv.model';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  personalData = new PersonalData;

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.personalData.email = 'love@gmail.com';
  }

  testKeyUp(){
    this.cvService.setSharedValue(this.personalData);
    console.log(this.personalData.email);
  }
}