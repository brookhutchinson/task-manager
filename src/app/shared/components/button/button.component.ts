// angular
import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() text: string;

  @Output() btnClick = new EventEmitter;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.btnClick.emit();
  }
}
