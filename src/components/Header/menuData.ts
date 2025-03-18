import { Menu } from '@/types/Menu';

export const menuData: Menu[] = [
  {
    id: 1,
    title: 'Велосипеди',
    newTab: false,
    path: '/',
  },
  {
    id: 2,
    title: 'Електровелосипеди',
    newTab: false,
    path: '/shop',
  },
  {
    id: 3,
    title: 'Запчастини',
    newTab: false,
    path: '/contact',
  },
  {
    id: 6,
    title: 'Аксесуари',
    newTab: false,
    path: '/',
    submenu: [
      {
        id: 61,
        title: 'Shop With Sidebar',
        newTab: false,
        path: '/shop',
      },
      {
        id: 62,
        title: 'Shop Without Sidebar',
        newTab: false,
        path: '/shop',
      },
      {
        id: 64,
        title: 'Checkout',
        newTab: false,
        path: '/checkout',
      },
      {
        id: 65,
        title: 'Cart',
        newTab: false,
        path: '/cart',
      },
      {
        id: 66,
        title: 'Wishlist',
        newTab: false,
        path: '/wishlist',
      },
      {
        id: 67,
        title: 'Sign in',
        newTab: false,
        path: '/signin',
      },
      {
        id: 68,
        title: 'Sign up',
        newTab: false,
        path: '/signup',
      },
      {
        id: 69,
        title: 'My Account',
        newTab: false,
        path: '/my-account',
      },
      {
        id: 70,
        title: 'Contact',
        newTab: false,
        path: '/contact',
      },
      {
        id: 62,
        title: 'Error',
        newTab: false,
        path: '/error',
      },
      {
        id: 63,
        title: 'Mail Success',
        newTab: false,
        path: '/mail-success',
      },
    ],
  },
];
