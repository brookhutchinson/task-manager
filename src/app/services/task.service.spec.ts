// angular
import { TestBed } from '@angular/core/testing';

// services
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should create TaskService', () => {
    expect(service).toBeTruthy();
  });
});
