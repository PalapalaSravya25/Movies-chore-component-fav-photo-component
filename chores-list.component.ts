import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrl: './chores-list.component.css'
})
export class ChoresListComponent implements OnInit  {
  chores = ['Empty dishwasher','Complete LaunchCode prep work','Buy groceries' ];

  constructor() { }

  ngOnInit(): void {
    // Initialization tasks can be performed here
  }


}
