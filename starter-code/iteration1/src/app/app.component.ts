import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Gallery:';
  photoArray = [{src: 'https://images-na.ssl-images-amazon.com/images/I/51qwSaHjj%2BL._SX352_BO1,204,203,200_.jpg', text: 'Ego is the Enemy'},
               {src: 'https://images-na.ssl-images-amazon.com/images/I/41Z06PJRlZL.jpg', text: '12 Rules for Life'}, 
               {src: 'https://images-na.ssl-images-amazon.com/images/I/51xcOSxtYEL._SX352_BO1,204,203,200_.jpg', text: 'The Obstacle is the Way'}];
}
