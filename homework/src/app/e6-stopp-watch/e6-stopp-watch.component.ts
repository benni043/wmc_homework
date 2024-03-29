import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e6-stopp-watch',
  templateUrl: './e6-stopp-watch.component.html',
  styleUrls: ['./e6-stopp-watch.component.css']
})
export class E6StoppWatchComponent implements OnInit {

  constructor() { }

  title = 'Angular-6-StoppUhr';

  currentDateTime: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }


  timeInMilliseconds: number = 0;
  name: string = "";

  interval: any;
  started: boolean = false;

  latestIndex: number = 0;
  timerAndPersonList: { timeInMilliseconds: number, name: string }[] = [];

  start(): void {
    if (this.started) return;

    this.started = true;
    this.timeInMilliseconds = 0;

    let start = Date.now();

    this.interval = setInterval(() => {
      this.timeInMilliseconds = Date.now() - start;
    }, 10);
  }


  end(): void {
    if (this.lastName == "" || !this.started) return;

    this.started = false;
    this.timerAndPersonList.push({timeInMilliseconds: this.timeInMilliseconds, lastName: this.lastName})

    this.timerAndPersonList.sort((a, b) => a.timeInMilliseconds-b.timeInMilliseconds);

    for (let i = 0; i < this.timerAndPersonList.length; i++) {
      if(this.timerAndPersonList[i].timeInMilliseconds === this.timeInMilliseconds && this.timerAndPersonList[i].lastName === this.lastName) {
        this.latestIndex = i;
        break;
      }
    }

    clearInterval(this.interval);
  }

}
