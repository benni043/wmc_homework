import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  kinder: {name: string, geschenke: string[]}[] = [{name: "Tobi", geschenke: []}, {name: "Benni", geschenke: ["Hallo", "Tschüss"]}];
  geschenke: string[] = ["PawPetrol", "Oktonauten", "Jake und die Nimmerlandpriatren"];

  allListIds: string[] = ["geschenk0", "geschenk1", "waehlbareGeschenke"];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
  }
}
