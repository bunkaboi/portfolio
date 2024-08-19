import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp({"projectId":"portfolio-website-4bdec","appId":"1:331543767253:web:a56c4044bc15c2e2e15a5c","storageBucket":"portfolio-website-4bdec.appspot.com","apiKey":"AIzaSyDXCg7Q9usdY73D3MJ7U-wxUDaMw5efwRc","authDomain":"portfolio-website-4bdec.firebaseapp.com","messagingSenderId":"331543767253"})), 
    provideFirestore(() => getFirestore())]
};
