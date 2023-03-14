import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.css']
})
export class OpeningCrawlComponent implements OnInit, OnDestroy, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
      this.generateCrawlToDisplay();
  }

  @Input() crawl = "";
  @Input() episode = 0;
  @Input() title = "";

  splitTitle: string[] = []
  musik: any;

  ngOnInit(): void {
    this.generateCrawlToDisplay();

    this.musik = new Audio();
    this.musik.src = "assets/audio.mp3"
    this.musik.load()
    this.musik.volume = 0.1

    setTimeout(async () => {
      await this.musik.play()
    }, 7000)
  }

  generateCrawlToDisplay() {
    this.splitTitle = this.crawl.split("\r\n\r\n");
  }

  async ngOnDestroy(): Promise<void> {
    if(this.musik) {
      this.musik.pause();
      this.musik = null;
    }
  }


}
