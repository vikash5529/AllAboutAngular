import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor() { }
  question:string;
  ngOnInit() {
    this.question='Select the Command used to KickStart Angular Application?';
  }

}
