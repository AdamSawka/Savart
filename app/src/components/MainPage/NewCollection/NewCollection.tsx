import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
  image: string;
  newPrice: string;
  oldPrice: string;
  link: string;
}

function NewCollection({ image, newPrice, oldPrice, link }: Props) {
  const { t } = useTranslation();

  return (
    <div className='col mb-5'>
      <div className='card h-100'>
        <div className='badge bg-dark text-white position-absolute'>
          {t('New')}
        </div>
        <img alt='deer' className='card-img-top' src={image} />
        <div className='card-body p-4'>
          <div className='text-center'>
            <h5 className='fw-bolder'>{t('New Collection')}</h5>
            <div className='d-flex justify-content-center small text-warning mb-2' />
            <span className='text-muted text-decoration-line-through'>
              {oldPrice}
            </span>
            {newPrice}
          </div>
        </div>
        <div className='card-footer '>
          <div className='text-center'>
            <Link to={link} className='btn btn-outline-dark mt-auto'>
              {t('Check')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
