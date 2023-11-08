import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string;
  lastName: string;
  message: string;
  isDisabled: boolean;
  secretMessageBackgroundColor: string;
  secretMessageFontSize: number;

  constructor() {
    this.name = "John";
    this.lastName = "Doe";
    this.message = "Enter the value";
    this.isDisabled = false;
    this.secretMessageBackgroundColor = "aquamarine";
    this.secretMessageFontSize = 20;
  }

  sayHello(): void {
    alert(`Hello ${this.name} ${this.lastName}`)
    this.name = "potato";
  }

  isShort(): boolean {
    return this.name.length < 4;
  }
}
