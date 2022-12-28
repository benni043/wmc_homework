import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildPresentServiceService {

  constructor() { }

  children: {id: number, vorname: string, nachname: string, geburtsdatum: Date}[] = [];
  childId: number = 0;
  addNewChild(child: {vorname: string, nachname: string, geburtsdatum: Date}) {
    this.children.push({id: this.childId, vorname: child.vorname, nachname: child.nachname, geburtsdatum: child.geburtsdatum});
    this.childId++;
  }

  getChild(id: number): {id: number, vorname: string, nachname: string, geburtsdatum: Date} {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if(this.children[i].id == id) return this.children[i];
    }

    return {id: -1, vorname: "", nachname: "", geburtsdatum: undefined};
  }


  presents: {id: number, inhalt: string, farbe: string, groesse: string}[] = [];
  presentId: number = 0;

  addNewPresent(present: {inhalt: string, farbe: string, groesse: string}) {
    this.presents.push({id: this.presentId, inhalt: present.inhalt, farbe: present.farbe, groesse: present.groesse});
  }

  getPresent(id: number): {id: number, inhalt: string, farbe: string, groesse: string} {
    for (let i = this.presents.length - 1; i >= 0; i--) {
      if(this.presents[i].id == id) return this.presents[i];
    }

    return {id: -1, inhalt: "", farbe: "", groesse: ""};
  }

}
