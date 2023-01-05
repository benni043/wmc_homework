import {Injectable} from '@angular/core';
import {PresentService} from "./present.service";

@Injectable({
  providedIn: 'root'
})
export class ChildPresentServiceService {

  constructor(public presentService: PresentService) { }

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

    this.presentService.allPresentArrays.push("geschenk" + this.childId);
    this.childId++;
  }

  getChild(id: number): { id: number, vorname: string, nachname: string, geburtsdatum: Date, geschenke: {id: number, inhalt: string, farbe: string, groesse: string }[] } {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].id == id) return this.children[i];
    }

    return {id: -1, vorname: "", nachname: "", geburtsdatum: undefined, geschenke: []};
  }

}
