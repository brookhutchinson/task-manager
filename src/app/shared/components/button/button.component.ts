// angular
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    console.log('Add Button onClick()');
  }
}
