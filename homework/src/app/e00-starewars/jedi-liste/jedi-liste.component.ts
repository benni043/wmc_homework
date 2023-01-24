import {Component, Input} from '@angular/core';
import {jedi} from "../jedi-form-component/jedi-form-component.component";
import {JediServiceService} from "../jedi-service.service";

@Component({
  selector: 'app-jedi-liste',
  templateUrl: './jedi-liste.component.html',
  styleUrls: ['./jedi-liste.component.css']
})
export class JediListeComponent {

  constructor(public jediService: JediServiceService) {
    jediService.jediReset.subscribe((reset: boolean) => {
      this.mission = reset;
    })
  }
  @Input() jedi: jedi;

  mission: boolean;

  addJediToMission() {
    if (!this.jediService.jedis.includes(this.jedi)) {
      this.jediService.addJediToMission(this.jedi);
    } else {
      this.jediService.addJediToMission(this.jedi);
      //todo remove
    }
  }

}
