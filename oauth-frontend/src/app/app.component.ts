import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oauth-frontend';

  callOauthGoogleAPI() {
    console.log('clicked!');
    window.location.href = 'http://localhost:8080/OAuth/signInOAuthGoogle';
  }
}
