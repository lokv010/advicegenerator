import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface quote {
  id: number;
  advice: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'advicegenerator';
  qot$!:quote;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this.http
      .get<any>('https://api.adviceslip.com/advice').pipe(map(res=> res['slip']))
      .subscribe((data) => {
        this.qot$ = data;
        console.log(this.qot$);
      });
  }
}
