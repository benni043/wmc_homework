import {Injectable} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class ChildPresentServiceService {

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

  allListIds: string[] = ["availablePresents"];

  children: { id: number, vorname: string, nachname: string, geburtsdatum: Date, geschenke: {id: number, inhalt: string, farbe: string, groesse: string }[] }[] = [];
  childId: number = 0;

  addNewChild(child: { vorname: string, nachname: string, geburtsdatum: Date }) {
    this.children.push({
      id: this.childId,
      vorname: child.vorname,
      nachname: child.nachname,
      geburtsdatum: child.geburtsdatum,
      geschenke: []
    });

    this.allListIds.push("geschenk" + this.childId);
    this.childId++;
  }

  getChild(id: number): { id: number, vorname: string, nachname: string, geburtsdatum: Date, geschenke: {id: number, inhalt: string, farbe: string, groesse: string }[] } {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].id == id) return this.children[i];
    }

    return {id: -1, vorname: "", nachname: "", geburtsdatum: undefined, geschenke: []};
  }


  presents: { inhalt: string, farbe: string, groesse: string }[] = [];

  addNewPresent(present: { inhalt: string, farbe: string, groesse: string }) {
    this.presents.push({inhalt: present.inhalt, farbe: present.farbe, groesse: present.groesse});
  }

}
