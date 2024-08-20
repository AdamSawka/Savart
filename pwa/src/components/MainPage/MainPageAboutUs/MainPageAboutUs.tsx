import React from 'react';
import {useTranslation} from "react-i18next";
import {Theme, useMediaQuery} from "@mui/material";

const MainPageAboutUs = () => {
  const {t} = useTranslation();
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <>
      <div className='about-us-container d-flex align-items-center'>
        <div className='about-us-content'>
          <section className={`d-flex text-center row  ${isTablet ? 'mx-2' : 'mx-5' }`}>
            <p className='fw-bolder my-5 '>O firmie</p>
            <p style={{fontSize:isTablet ? "16px" : "20px"}}>
              {t('Main Page Text 1')}
            </p>
            <p style={{fontSize:isTablet ? "16px" : "20px"}}>
              {t('Main Page Text 2')}
            </p>
            <p style={{fontSize:isTablet ? "16px" : "20px"}}>
              {t('Main Page Text 3')}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export {MainPageAboutUs};
