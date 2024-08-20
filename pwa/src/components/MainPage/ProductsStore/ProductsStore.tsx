import React from 'react';
import StoreItem from 'components/MainPage/ProductsStore/StoreItem/StoreItem';
import {Box, Card} from '@mui/material';
import {map} from 'lodash';
import {useTranslation} from "react-i18next";

interface ProductsStoreProps{
  data:any
}

const ProductsStore = ({data}:ProductsStoreProps) => {
  const {t} = useTranslation();

  return (
    <Card sx={{backgroundColor: 'lightGray', margin: 5}}>
      <h3 style={{width: '100%', textAlign: 'center'}}>{t('Products')}</h3>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
        {map(data?.products?.data, (singleProduct) => (
          <Box gridColumn='span 3'>
            <StoreItem
              image={`${process.env.REACT_APP_API_STRAPI_URL}${singleProduct.attributes?.image?.data?.attributes?.formats?.original_webp.url}`}
              name={singleProduct?.attributes?.name}
              minPrice={singleProduct?.attributes?.minPrice}
              maxPrice={singleProduct?.attributes?.maxPrice}
              link={`/product/${singleProduct?.attributes?.id}`}
            />
          </Box>
        ))}
      </Box>
    </Card>
  );
};
export default ProductsStore;
