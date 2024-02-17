import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
  image: string;
  minPrice: number;
  maxPrice: number;
  link: string;
  name: string;
}

const StoreItem = ({ image, minPrice, maxPrice, link, name }: Props) => {
  const { t } = useTranslation();

  return (
    <div className='col mb-5 px-5'>
      <div className='card h-100'>
        <img alt='deer' className='card-img-top' src={image} />
        <div className='card-body p-4'>
          <div className='text-center'>
            <h5 className='fw-bolder'>{name}</h5>
            {minPrice}PLN - {maxPrice}PLN
          </div>
        </div>
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            <Link to={link} className='btn btn-outline-dark mt-auto'>
              {t('More')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreItem;
