import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img src="brand-logo" src = "/assets/logo.svg" alt="logo" aria-hidden="true"/>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
}
