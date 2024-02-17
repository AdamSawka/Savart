import AboutUs from 'pages/AboutUs/AboutUs';
import Contact from 'pages/Contact/Contact';
import Gallery from 'pages/Gallery/Gallery';
import MainPage from 'pages/MainPage/MainPage';
import SingleProduct from 'pages/SingleProduct/SingleProduct';

export const routes = {
  HOME: {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  ABOUT_US: {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs,
  },
  CONTACT: {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  GALLERY: {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  PRODUCT: {
    path: '/product/:id',
    name: 'Product',
    component: SingleProduct,
  },
};
