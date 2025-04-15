import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Main',
  },
  {
    displayName: 'Dashboard',
    iconName: 'home',
    bgcolor: 'primary',
    route: 'dash',
  },
  {
    navCap: 'Residents',
  },
  {
    displayName: 'Face Sheet',
    iconName: 'user',
    bgcolor: 'primary',
    route: 'face-sheet',
  },
  {
    displayName: 'Vitals',
    iconName: 'activity',
    bgcolor: 'primary',
    route: 'vitals',
  },
  {
    displayName: 'Orders',
    iconName: 'file-text',
    bgcolor: 'primary',
    route: 'orders',
  },
  {
    displayName: 'ADLs',
    iconName: 'file-text',
    bgcolor: 'primary',
    route: 'adls',
  },
  {
    navCap: 'Care & Medications',
  },
  {
    displayName: 'Charting',
    iconName: 'clipboard',
    bgcolor: 'primary',
    route: 'charting',
  },
  {
    displayName: 'Medications',
    iconName: 'pill',
    bgcolor: 'primary',
    route: 'medications',
  },
  {
    displayName: 'Pharmacy',
    iconName: 'shopping-cart',
    bgcolor: 'primary',
    route: 'pharmacy',
  },
  {
    navCap: 'Operations',
  },
  {
    displayName: 'Shift Management',
    iconName: 'users',
    bgcolor: 'primary',
    route: 'shift-management',
  },
  {
    displayName: 'Inventory',
    iconName: 'box',
    bgcolor: 'primary',
    route: 'inventory',
  },
  {
    displayName: 'Billing',
    iconName: 'file-text',
    bgcolor: 'primary',
    route: 'billing',
  },
  {
    navCap: 'Administration',
  },
  {
    displayName: 'Analytics & Reports',
    iconName: 'file-text',
    bgcolor: 'primary',
    route: 'analytics',
  },
  {
    displayName: 'User Management',
    iconName: 'settings',
    bgcolor: 'primary',
    route: 'admin',
  }
];
