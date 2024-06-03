import { Routes } from '@angular/router';
import { MainComponent } from './__components/__main/main/main.component';

export const routes: Routes = [
    
    { path: "dashboard", component: MainComponent },

    // Default Routes

    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '**', redirectTo: '/dashboard'},
    
];
