import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-text-output',
  templateUrl: './text-output.component.html',
  styleUrls: ['./text-output.component.css']
})
export class TextOutputComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  constructor() { }

  isBlink: boolean = true;

  ngOnInit(): void {
    console.log("ngOnInit")

    setInterval(() => {
      this.isBlink = !this.isBlink;
    }, 500)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
    console.log(changes['text'].previousValue + " --> " + changes['text'].currentValue)
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  @Input() text: string = "";

}
