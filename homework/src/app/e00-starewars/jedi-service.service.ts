import {EventEmitter, Injectable} from '@angular/core';
import {jedi} from "./jedi-form-component/jedi-form-component.component";

@Injectable({
  providedIn: 'root'
})
export class JediServiceService {

  jedis: jedi[] = [];
  jedisOnMission: jedi[] = [];
  jediReset: EventEmitter<boolean> = new EventEmitter<boolean>();
  ranks: string[] = ["Padawan", "Jedi-Ritter", "Jedi-Meister", "Mitglied des Hohen Rat"]

  hoheRatJedis: jedi[] = [];

  addJedi($event: jedi): void {
    this.jedis.push({name: $event.name, rang: $event.rang, counter: $event.counter});
  }

  addJediToMission(jedi: jedi): void {
    this.jedisOnMission.push(jedi);
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

    this.missionFinished()
  }

  canMissionStartFunc(): boolean {
    for (let jedi of this.jedisOnMission) {
      if (jedi.rang !== "Padawan") return true;
    }
    return false;
  }

  missionFinished(): void {
    this.jedisOnMission = [];
    this.jediReset.emit(false);
  }

  whichRankNext(jedi: jedi): number {
    for (let i = 0; i < this.ranks.length; i++) {
      if (jedi.rang == this.ranks[i]) return i + 1;
    }
    return -1;
  }

  getIdToJedi(jedi: jedi): number {
    for (let i = 0; i < this.jedis.length; i++) {
      if (this.jedis[i] == jedi) {
        return i;
      }
    }
    return -1;
  }

  promote(jediIdx: number, whichRankId: number) {
    if (this.ranks[whichRankId] === "Mitglied des Hohen Rat") {
      this.jedis[jediIdx].counter = 0;
      this.rankHoherRat(jediIdx);
      return;
    }

    this.jedis[jediIdx].rang = this.ranks[whichRankId];
    this.jedis[jediIdx].counter = 0;
  }

  rankHoherRat(jediIdx: number) {
    this.hoheRatJedis.push(this.jedis[jediIdx]);
    this.jedis.splice(jediIdx, 1);
  }

  constructor() {
  }
}
