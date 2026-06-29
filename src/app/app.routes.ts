import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'PTG Solutions — Product consulting & development for startups',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'work',
    title: 'Work — PTG Solutions',
    loadComponent: () => import('./pages/work/work').then((m) => m.Work),
  },
  {
    path: 'contact',
    title: 'Start a project — PTG Solutions',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'login',
    title: 'Sign in — PTG Solutions',
    data: { fullBleed: true },
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  { path: '**', redirectTo: '' },
];
