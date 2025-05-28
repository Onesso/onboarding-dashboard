import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; //
import { provideRouter } from '@angular/router'; //responsible for setting up and configuring the Angular Router for the application.

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
