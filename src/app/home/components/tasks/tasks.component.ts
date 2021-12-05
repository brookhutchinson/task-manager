// angular
import { Component, OnInit } from '@angular/core';



// interfaces
import { Task } from './../../../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit() {

  }
}
