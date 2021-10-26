import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/app.constants';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  title = Constants.APP_NAME;
  constructor() { }
  ngOnInit() { }
}
