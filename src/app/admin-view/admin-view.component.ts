import { Component, OnInit } from '@angular/core';
import {Reg} from '../reg';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  user:Reg = new Reg();

  constructor() { }

  ngOnInit(): void {
  }

  
}
