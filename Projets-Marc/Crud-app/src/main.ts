
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { StagiaireComponent } from './app/component/stagiaire.component';

bootstrapApplication(StagiaireComponent, {
  providers: [
    provideRouter([]) // Configuration du routeur si nécessaire
  ]
})
.catch(err => console.error(err));