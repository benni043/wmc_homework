import { Injectable } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class PresentService {
  constructor() { }

  presents: {id: number, inhalt: string, farbe: string, groesse: string }[] = [];
  presentID: number = 0;

  addNewPresent(present: { inhalt: string, farbe: string, groesse: string }) {
    this.presents.push({id: this.presentID, inhalt: present.inhalt, farbe: present.farbe, groesse: present.groesse});

    this.presentID++;
  }

  drop(event: CdkDragDrop<{id: number, inhalt: string, farbe: string, groesse: string }[]>) {
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

  getPresentIdx(id: number): number {
    for (let i = this.presents.length - 1; i >= 0; i--) {
      if (this.presents[i].id == id) return i;
    }

    return -1;
  }

  deletePresent(id: number) {
    this.presents.splice(this.getPresentIdx(id), 1);
  }

}
