import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import mock user data for testing
import './mock-user.js';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
