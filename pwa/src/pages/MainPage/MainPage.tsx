import React from 'react';
import {MainPageContact} from 'components/MainPage/MainPageContact/MainPageContact';
import {MainPageCarousel} from 'components/MainPage/Carousel/Carousel';
import background from 'assets/forest-clouds.jpg';
import {ReactComponent as Logo} from 'assets/logo-savart-white.svg';
import ProductsStore from 'components/MainPage/ProductsStore/ProductsStore';
import {MainPageAboutUs} from "components/MainPage/MainPageAboutUs/MainPageAboutUs";
import OurServices from "components/MainPage/OurServices/OurServices";
import useGetMainPageQuery from "hooks/useGetMainPageQuery";
import {paramsMainPage} from "constans/common";
import {Theme, useMediaQuery} from "@mui/material";

const FogStyle = () => {
  return (
    <div className='fog-container'>
      <div id='foglayer_01' className='fog'>
        <div className='image01'/>
        <div className='image02'/>
      </div>
      <div id='foglayer_02' className='fog'>
        <div className='image01'/>
        <div className='image02'/>
      </div>
      <div id='foglayer_03' className='fog'>
        <div className='image01'/>
        <div className='image02'/>
      </div>
    </div>
  );
};

const MainPage = () => {
  const {data: mainPageData} = useGetMainPageQuery({}, paramsMainPage);
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <>
      <div>
        <img
          alt='background-forest'
          src={background}
          style={{
            position: 'fixed',
            bottom: isTablet ? 'unset' : 0,
            top: !isTablet ? 'unset' : 0,
            width: '100%',
            zIndex: '-2',
          }}
        />
        <header
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            height: isTablet ? '200px' : '450px',
            paddingTop: '150px',
            zIndex: '-2',
            position:
              'relative'
          }}
          className='py-0 text-center shadow-2-strong rounded'>
          <div className='d-flex justify-content-center  header-text'>
            <FogStyle/>
            <Logo id='large-logo' style={{height: isTablet ? '200px' : '400px', position: 'fixed', zIndex: -1}}/>
          </div>
        </header>
        <section className='main-page-content-section py-5  h-100'>
          <OurServices/>
          <MainPageCarousel data={mainPageData?.data?.attributes?.carousel}/>
          <MainPageAboutUs/>
          <ProductsStore data={mainPageData?.data?.attributes?.store}/>
        </section>
      </div>
      <MainPageContact/>
    </>
  );
};
export default MainPage;
