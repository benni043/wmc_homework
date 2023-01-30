import {EventEmitter, Injectable} from '@angular/core';
import {jedi} from "./jedi";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";

@Injectable({
  providedIn: 'root'
})
export class JediServiceService {

  jedis: jedi[] = [];
  jedisOnMission: jedi[] = [];
  jediReset: EventEmitter<void> = new EventEmitter<void>();

  jedisImHohenRat: jedi[] = [];

  executed = false;

  addJedi($event: jedi): void {
    this.jedis.push({name: $event.name, rang: $event.rang, counter: $event.counter});
  }

  addJediToMission(jedi: jedi): void {
    this.jedisOnMission.push(jedi);
  }

  removeJediFromMission(jedi: jedi): void {
    for (let i = 0; i < this.jedisOnMission.length; i++) {
      if (this.jedisOnMission[i] === jedi) this.jedisOnMission.splice(i, 1);
    }
  }

  startMission() {
    for (let jedi of this.jedisOnMission) {
      let randNum = Math.random() * 100;

      if (randNum > 20) {
        jedi.counter++;
      } else {
        jedi.counter--;
      }
    }

    this.jedisOnMission = [];
    this.jediReset.emit();
  }

  isMissionAbleToStart(): boolean {
    for (let jedi of this.jedisOnMission) {
      if (jedi.rang !== "Padawan") return true;
    }

    return false;
  }

  getIdToJedi(jedi: jedi): number {
    for (let i = 0; i < this.jedis.length; i++) if (this.jedis[i] == jedi) return i;
    return -1;
  }

  promote(jedi: jedi) {
    let jediId: number = this.getIdToJedi(jedi);

    switch (jedi.rang) {
      case "Padawan": {
        this.jedis[jediId].rang = "Jedi-Ritter";
        break;
      }
      case "Jedi-Ritter": {
        this.jedis[jediId].rang = "Jedi-Meister";
        break
      }
      case "Jedi-Meister": {
        this.jedisImHohenRat.push(this.jedis[jediId]);
        this.jedis.splice(jediId, 1);
      }
    }

    jedi.counter = 0;
  }

  order66() {
    this.executed = true;

    for (let jedi of this.jedisImHohenRat) {
      if(jedi.rang === 'Jedi-Meister' && jedi.name === 'Joda' || jedi.rang === 'Jedi-Meister' && jedi.name === 'Obi-Wan') this.jedis.push(jedi)
    }

    for (let i = this.jedis.length - 1; i >= 0; i--) {
      let rang = this.jedis[i].rang
      let name = this.jedis[i].name;

      if (rang === 'Jedi-Meister' && name === 'Obi-Wan') this.jedis[i].name = "Ben";

      if (!((rang === 'Jedi-Meister' && name === 'Joda') || (rang === 'Jedi-Meister' && name === 'Obi-Wan') || rang === 'Sith-Lord')) {
        this.jedis.splice(i, 1);
      }
    }

    this.jedisImHohenRat = [];
  }

}
