import { Injectable } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class PresentService {
  constructor() { }

  presents: { inhalt: string, farbe: string, groesse: string }[] = [];

  addNewPresent(present: { inhalt: string, farbe: string, groesse: string }) {
    this.presents.push({inhalt: present.inhalt, farbe: present.farbe, groesse: present.groesse});
  }

  drop(event: CdkDragDrop<{ inhalt: string, farbe: string, groesse: string }[]>) {
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

  allPresentArrays: string[] = ["availablePresents"];

}
