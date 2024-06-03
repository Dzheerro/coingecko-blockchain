import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: "dashboard", component: AppComponent },



    // Default Routes

    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '**', redirectTo: '/dashboard'},
    
];
