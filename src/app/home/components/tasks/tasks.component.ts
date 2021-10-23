// angular
import { Component, OnInit } from '@angular/core';

// interfaces
import { Task } from './../../../interfaces/task.interface';

// data
import { MockTasks } from './../../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = MockTasks;

  constructor() {}

  ngOnInit(): void {}
}
