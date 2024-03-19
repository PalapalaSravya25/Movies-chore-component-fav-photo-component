import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies: string[] = [
    'The Manchurian Candidate',
    'Oceans 8',
    'The Incredibles',
    'Hidden Figures'
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialization tasks can be performed here
  }
}
