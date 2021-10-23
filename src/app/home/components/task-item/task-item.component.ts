// angular
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

// interface
import { Task } from './../../../interfaces/task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  constructor() {}

  ngOnInit(): void {}
}
