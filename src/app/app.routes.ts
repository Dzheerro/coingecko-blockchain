import { Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "main", component: AppComponent },
    {path: "second-block", component: SecondComponent}

];
