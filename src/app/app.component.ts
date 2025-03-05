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


  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
    
  }

  onClick($event: Event){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
