import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.scss']
})
export class BubblechartComponent implements OnInit {

  public _val: number;
  @Input('value') public set value(val) {
    this._val = val;
  }
  constructor() { }

  ngOnInit() {
  }

}
