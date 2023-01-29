import {Component, Input} from '@angular/core';
import { jedi } from '../jedi';
import {JediServiceService} from "../jedi-service.service";

@Component({
  selector: 'app-jedi-liste',
  templateUrl: './jedi-liste.component.html',
  styleUrls: ['./jedi-liste.component.css']
})
export class JediListeComponent {

  constructor(public jediService: JediServiceService) {
    jediService.jediReset.subscribe(() => {
      this.omMission = false;
    })
  }
  @Input() jedi: jedi;
  omMission: boolean;

  addJediToMission() {
    if (!this.jediService.jedisOnMission.includes(this.jedi)) {
      this.jediService.addJediToMission(this.jedi);
    } else {
      this.jediService.removeJediFromMission(this.jedi);
    }
  }

  execute() {
    this.jediService.order66();
  }
}
