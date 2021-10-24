// angular
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

// interface
import { Task } from './../../../interfaces/task.interface';

// icons
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
