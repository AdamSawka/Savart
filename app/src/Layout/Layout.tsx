import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { Outlet } from 'react-router';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

const LayoutWrapper = styled('div')({});
const MainContentWrapper = styled(Box)<BoxProps>({});
const ContentWrapper = styled('main')(({}) => ({}));

const Layout = () => {
  return (
    <LayoutWrapper className='layout-wrapper'>
      <Navigation />
      <MainContentWrapper className='layout-content-wrapper'>
        <ContentWrapper className='layout-page-content'>
          <Outlet />
        </ContentWrapper>
        <Footer />
      </MainContentWrapper>
    </LayoutWrapper>
  );
};
export default Layout;
