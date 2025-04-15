import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaceSheetComponent } from './pages/face-sheet/face-sheet.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/starter',
        pathMatch: 'full',
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'face-sheet',
        component: FaceSheetComponent,
        data: {
          title: 'Resident Face Sheet',
        },
      },
      {
        path: 'dash',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'vitals',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Vitals',
        },
      },
      {
        path: 'orders',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Orders',
        },
      },
      {
        path: 'adls',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'ADLs',
        },
      },
      {
        path: 'charting',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Charting',
        },
      },
      {
        path: 'medications',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Medications',
        },
      },
      {
        path: 'pharmacy',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Pharmacy',
        },
      },
      {
        path: 'shift-management',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Shift Management',
        },
      },
      {
        path: 'inventory',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Inventory',
        },
      },
      {
        path: 'billing',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Billing',
        },
      },
      {
        path: 'analytics',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'Analytics & Reports',
        },
      },
      {
        path: 'admin',
        component: FaceSheetComponent, // Using FaceSheetComponent as a placeholder
        data: {
          title: 'User Management',
        },
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
