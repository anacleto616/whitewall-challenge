import { Routes } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [{ path: 'login', component: LoginComponent }, { path: '', component: ContactListComponent}];
