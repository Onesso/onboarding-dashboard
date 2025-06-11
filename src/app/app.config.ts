import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; //
import { provideRouter } from '@angular/router'; //responsible for setting up and configuring the Angular Router for the application.
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
