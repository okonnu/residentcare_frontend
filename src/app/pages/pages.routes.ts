import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const PagesRoutes: Routes = [
  {
    path: 'starter',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'dashbord',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },

];
