import React from 'react';
import { MainPageContact } from 'components/MainPage/MainPageContact/MainPageContact';
import { MainPageAboutUs } from 'components/MainPage/MainPageAboutUs/MainPageAboutUs';
import { MainPageCarousel } from 'components/MainPage/Carousel/Carousel';
import backgroundLaser from 'assets/laser-2795229_1920.jpg';
import { Box } from '@mui/material';
import image1 from 'assets/draw1.jpg';
import image2 from 'assets/image1.jpg';
import Popular from 'components/MainPage/Popular/Popular';
import NewCollection from 'components/MainPage/NewCollection/NewCollection';
import SingleProduct from 'components/MainPage/SingleProduct/SingleProduct';

const MainPage = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${backgroundLaser})`,
            position: 'fixed',
            maxWidth: { xs: '100%', md: '1640px' },
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: '-1',
            backgroundPosition: 'center',
          }}
        />
        <header className='py-0 text-center shadow-2-strong rounded  header-mainPage' />
        <section className='py-5 bg-light'>
          <MainPageCarousel />
          <div className='container px-4 px-lg-5 mt-5'>
            <div className=' row gx-4 gx-lg-5 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
              <Popular
                image={image1}
                price={' PLN 40.00 - PLN 80.00'}
                link={'/popular'}
              />
              <NewCollection
                newPrice={'180PLN'}
                oldPrice={'220PLN'}
                link={'/newCollection'}
                image={image2}
              />
              <NewCollection
                newPrice={'180PLN'}
                oldPrice={'220PLN'}
                link={'/newCollection'}
                image={image2}
              />
              <SingleProduct
                name={'Obraz'}
                price={'220PLN'}
                link={'/newCollection'}
                image={image2}
              />
              <SingleProduct
                name={'Obraz'}
                price={'220PLN'}
                link={'/newCollection'}
                image={image2}
              />
              <SingleProduct
                name={'Obraz'}
                price={'220PLN'}
                link={'/newCollection'}
                image={image2}
              />
            </div>
          </div>
        </section>
      </Box>
      <MainPageAboutUs />
      <MainPageContact />
    </>
  );
};
export default MainPage;
