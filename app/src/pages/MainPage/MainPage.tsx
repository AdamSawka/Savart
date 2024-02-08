import React from 'react';
import { MainPageContact } from 'components/MainPage/MainPageContact/MainPageContact';
import { MainPageCarousel } from 'components/MainPage/Carousel/Carousel';
import background from 'assets/forest-clouds.jpg';
import { ReactComponent as Logo } from 'assets/logo-savart-white.svg';
import ProductsStore from 'components/MainPage/ProductsStore/ProductsStore';

const FogStyle = () => {
  return (
    <div className='fog-container'>
      <div id='foglayer_01' className='fog'>
        <div className='image01' />
        <div className='image02' />
      </div>
      <div id='foglayer_02' className='fog'>
        <div className='image01' />
        <div className='image02' />
      </div>
      <div id='foglayer_03' className='fog'>
        <div className='image01' />
        <div className='image02' />
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <>
      <div>
        <img
          alt='background-forest'
          src={background}
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: '-2',
          }}
        />
        <header className='  py-0 text-center shadow-2-strong rounded  header-mainPage '>
          <div className=' d-flex justify-content-center  header-text'>
            <FogStyle />
            <Logo style={{ height: '400px', position: 'fixed', zIndex: -1 }} />
          </div>
        </header>
        <section className=' main-page-content-section py-5  h-100'>
          <MainPageCarousel />
          <ProductsStore />
        </section>
      </div>
      <MainPageContact />
    </>
  );
};
export default MainPage;
