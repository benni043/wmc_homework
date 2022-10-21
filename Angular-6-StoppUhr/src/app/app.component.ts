import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    if (this.name == "" || !this.started) return;

    this.started = false;
    this.timerAndPersonList.push({timeInMilliseconds: this.timeInMilliseconds, name: this.name})

    this.timerAndPersonList.sort((a, b) => a.timeInMilliseconds-b.timeInMilliseconds);

    for (let i = 0; i < this.timerAndPersonList.length; i++) {
      if(this.timerAndPersonList[i].timeInMilliseconds === this.timeInMilliseconds && this.timerAndPersonList[i].name === this.name) {
        this.latestIndex = i;
        break;
      }
    }

    clearInterval(this.interval);
  }

}
