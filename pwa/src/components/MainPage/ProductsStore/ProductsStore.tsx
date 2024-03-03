import React from 'react';
import StoreItem from 'components/MainPage/ProductsStore/StoreItem/StoreItem';
import image from 'assets/deers4.jpg';
import {Box, Card} from '@mui/material';
import {map} from 'lodash';
import {products} from 'mockData';
import Filters from "components/MainPage/ProductsStore/Filters/Filters";

const ProductsStore = () => {

  return (
    <Card sx={{backgroundColor: 'lightGray', margin: 5}}>
      <h3 style={{width: '100%', textAlign: 'center'}}>Polecane produkty</h3>
      <Filters/>
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
        {map(products, (singleProduct) => (
          <Box gridColumn='span 3'>
            <StoreItem
              image={image}
              name={singleProduct.name}
              minPrice={singleProduct.minPrice}
              maxPrice={singleProduct.maxPrice}
              link={`/product/${singleProduct.id}`}
            />
          </Box>
        ))}
      </Box>
    </Card>
  );
};
export default ProductsStore;
