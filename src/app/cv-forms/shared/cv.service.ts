import { Injectable } from '@angular/core';
import { PersonalData } from './cv.model';

@Injectable()
export class CvService {

  personalData = new PersonalData;

  constructor() { 
    this.personalData.email = 'fuck-me@gmail.com';
  }

  getSharedValue(){
    return this.personalData;
  }

  setSharedValue(personalData: PersonalData){
    this.personalData = personalData;
  }

}