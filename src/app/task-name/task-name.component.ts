import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task-name',
  templateUrl: './task-name.component.html',
  styleUrls: ['./task-name.component.scss']
})
export class TaskNameComponent implements OnInit {

  @Output() addClick =  new EventEmitter<string>();
  taskName : string = "";
  constructor() { }

  ngOnInit(): void {
  }

  addTask(taskName: string) :void {
    if(!taskName)
      return;
    this.addClick.emit(taskName);
    this.taskName="";
  }
}
