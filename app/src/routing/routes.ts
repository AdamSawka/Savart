import AboutUs from "pages/AboutUs/AboutUs";
import Contact from "pages/Contact/Contact";
import Gallery from "pages/Gallery/Gallery";
import MainPage from "pages/MainPage/MainPage";

export const routes = {
    HOME: {
      path: "/",
        name:"MainPage",
      component: MainPage,
    },
    ABOUT_US: {
      path: "/about-us",
        name:"About Us",
      component: AboutUs,
    },
    CONTACT: {
      path: "/contact",
        name:"Contact",
      component: Contact,
    },
    GALLERY: {
      path: "/gallery",
        name:"Gallery",
      component: Gallery,
    },
}