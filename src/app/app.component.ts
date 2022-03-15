import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  includeNumber: boolean = false;
  inclideSymbols: boolean = false;
  inclideLatter: boolean = false;
  Lenght: number = 0;

  onButtonClick() {
    const number = '123456789';
    const symbols = 'abcdefghijklmpqrstuvwxyz';
    const latters = '!@#$%&*';

    let ValidChar = '';
    if (this.includeNumber) {
      ValidChar += number;
    }
    if (this.inclideSymbols) {
      ValidChar += symbols;
    }
    if (this.inclideLatter) {
      ValidChar += latters;
    }

    let generatePassword = '';
    for (let i = 0; i < this.Lenght; i++) {
      let i = Math.floor(Math.random() * ValidChar.length);
      generatePassword += ValidChar[i];
    }
    this.password = generatePassword;
  }

  onChangeLatter() {
    this.inclideLatter = !this.inclideLatter;
  }
  onchangeNumber() {
    this.includeNumber = !this.includeNumber;
  }
  onchangeSymbols() {
    this.inclideSymbols = !this.inclideSymbols;
  }

  onChangeLenght(value: string) {
    const parseValid = parseInt(value);
    if (!isNaN(parseValid)) {
      this.Lenght = parseValid;
    }
  }
}
