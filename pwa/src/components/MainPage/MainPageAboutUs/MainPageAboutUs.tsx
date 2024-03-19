import React from 'react';
import {useTranslation} from "react-i18next";

const MainPageAboutUs = () => {
  const {t} = useTranslation();

  return (
    <>
      <div className='about-us-container d-flex align-items-center  '>
        <div className='about-us-content'>
          <section className='d-flex text-center row mx-5 '>
            <h1 className='fw-bolder my-5 '>O firmie</h1>
            <h4 className='mb-5 '>
              {t('Main Page Text 1')}
            </h4>
            <p className=' '>
              {t('Main Page Text 2')}
            </p>
            <p>
              {t('Main Page Text 3')}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
export {MainPageAboutUs};
