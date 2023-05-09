import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e25';

  animalLovers: AnimalLover[] = [];

  animalLover = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), controlName]),
    vorname: new FormControl("", [Validators.required, Validators.minLength(3), controlName]),
    alter: new FormControl(0, [Validators.required, Validators.min(18)]),
    pet: new FormGroup({
      petName: new FormControl("", [Validators.required, Validators.minLength(3), controlName]),
      art: new FormControl("", [Validators.required]),
      petAlter: new FormControl(0, [Validators.required, Validators.min(18)])
    })
  });

  id: number = 0;
  onSubmit() {
    this.animalLovers.push({
      alter: this.animalLover.get("alter")?.value!,
      haustier: {
        alter: this.animalLover.get("pet")?.get("petAlter")?.value!,
        art: this.animalLover.get("pet")?.get("art")?.value!,
        name: this.animalLover.get("pet")?.get("petName")?.value!
      },
      id: this.id,
      name: this.animalLover.get("name")?.value!,
      vorname: this.animalLover.get("vorname")?.value!
    });

    this.id++;
  }
  load() {
    this.animalLover.get("pet")?.get("petName")?.setValue("Bello");
    this.animalLover.get("pet")?.get("petAlter")?.setValue(19);
    this.animalLover.get("pet")?.get("art")?.setValue("dog");
  }
}

export function controlName(control: AbstractControl): ValidationErrors | null {
  if (control.value.trim() == "Mustermann" || control.value.trim() == "Musterfrau") {
    return {error: "error"};
  } else {
    return null
  }
}

export interface AnimalLover {
  id: number,
  name: string,
  vorname: string,
  alter: number,
  haustier: Pet
}

export interface Pet {
  name: string,
  art: string,
  alter: number,
}
