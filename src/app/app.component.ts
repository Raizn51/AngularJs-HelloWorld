import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl= "../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";


  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
    
  }

  onClick($event: Event){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event: Event) {
    console.log("Change Event Occurred!", $event);
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/; // Regex: First letter capital, min 3 characters
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "Name is Incorrect!";
    }
  }

}
