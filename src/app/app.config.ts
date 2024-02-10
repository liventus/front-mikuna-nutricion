import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"mikuna-nutricion","appId":"1:167116748594:web:8093f7200d0bfbb057c92b","storageBucket":"mikuna-nutricion.appspot.com","apiKey":"AIzaSyB5m2IKYkI6zWTIZ3bzXZ-48-qNgMYnisE","authDomain":"mikuna-nutricion.firebaseapp.com","messagingSenderId":"167116748594"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
