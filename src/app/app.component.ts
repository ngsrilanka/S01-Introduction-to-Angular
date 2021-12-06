import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  taskNameList: string[] = [];
  
  addTaskName(taskName: string): void {
    this.taskNameList.push(taskName);
  }
}
