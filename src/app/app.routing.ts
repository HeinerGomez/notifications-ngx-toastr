import { Routes } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';
import { ToastCustomComponent } from './components/toast-custom/toast-custom.component';


export const ROUTES: Routes = [
    { path: 'toast', component: ToastComponent},
    { path: 'toast-custom', component: ToastCustomComponent},
    { path: '', pathMatch: 'full', redirectTo: 'toast' },
    { path: '**', pathMatch: 'full', redirectTo: 'toast' },
];
