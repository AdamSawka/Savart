import AboutUs from 'pages/AboutUs/AboutUs';
import Contact from 'pages/Contact/Contact';
import Gallery from 'pages/Gallery/Gallery';
import MainPage from 'pages/MainPage/MainPage';
import SingleProduct from 'pages/SingleProduct/SingleProduct';
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";

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
  LOGIN: {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  SIGNUP: {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  PRODUCT: {
    path: '/product/:id',
    name: 'Product',
    component: SingleProduct,
  },
};
