import { Routes, RouterModule, Router } from '@angular/router';
// import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditUserComponent } from './components/edituser/edituser.component';


const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'signup/:id', component: SignupComponent },
    { path: 'edituser/:id', component: EditUserComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'login' },


];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
