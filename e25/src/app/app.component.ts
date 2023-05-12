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
    lastName: new FormControl("", [Validators.required, Validators.minLength(3), controlName]),
    firstName: new FormControl("", [Validators.required, Validators.minLength(3), controlName]),
    age: new FormControl(0, [Validators.required, Validators.min(18)]),

    pet: new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3), controlName]),
      type: new FormControl("", [Validators.required]),
      age: new FormControl(0, [Validators.required, Validators.min(1)])
    })
  });

  id: number = 0;
  onSubmit() {
    this.animalLovers.push({
      id: this.id,
      lastName: this.animalLover.get("lastName")?.value!,
      firstName: this.animalLover.get("firstName")?.value!,
      age: this.animalLover.get("age")?.value!,

      pet: {
        age: this.animalLover.get("pet")?.get("age")?.value!,
        type: this.animalLover.get("pet")?.get("type")?.value!,
        name: this.animalLover.get("pet")?.get("name")?.value!
      },
    });

    this.id++;
  }

  load() {
    this.animalLover.get("pet")?.get("name")?.setValue("Sunny");
    this.animalLover.get("pet")?.get("age")?.setValue(19);
    this.animalLover.get("pet")?.get("type")?.setValue("dog");
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
  firstName: string,
  lastName: string,
  age: number,
  pet: Pet
}

export interface Pet {
  name: string,
  type: string,
  age: number,
}
