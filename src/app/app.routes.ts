import { Routes } from '@angular/router';
import { Hero } from './paginas/hero/hero';
import { Carrusel } from './paginas/carrusel/carrusel';
import { Servicios } from './paginas/servicios/servicios';
import { Contacto } from './paginas/contacto/contacto';


export const routes: Routes = [
    {path: '', component:Hero},
    {path: 'innovacion', component:Carrusel},
    {path: 'servicios', component:Servicios},
    {path: 'contacto', component:Contacto},
    {path: '**', redirectTo: ''}
];
