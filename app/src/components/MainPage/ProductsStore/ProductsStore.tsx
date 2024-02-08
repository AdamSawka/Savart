import React from 'react';
import StoreItem from 'components/MainPage/ProductsStore/StoreItem/StoreItem';
import deers4 from 'assets/deers3.jpg';
import image from 'assets/deers4.jpg';
import { Box, Card } from '@mui/material';

const ProductsStore = () => {
  return (
    <Card sx={{ backgroundColor: 'lightGray', margin: 5 }}>
      <h3 style={{ width: '100%', textAlign: 'center' }}>Polecane produkty</h3>

      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
        <Box gridColumn='span 3'>
          <StoreItem image={image} minPrice={50} maxPrice={100} link={'/gfd'} />
        </Box>
        <Box gridColumn='span 3'>
          <StoreItem
            image={deers4}
            minPrice={50}
            maxPrice={100}
            link={'/gfd'}
          />
        </Box>
        <Box gridColumn='span 3'>
          <StoreItem image={image} minPrice={50} maxPrice={100} link={'/gfd'} />
        </Box>
        <Box gridColumn='span 3'>
          <StoreItem
            image={deers4}
            minPrice={50}
            maxPrice={100}
            link={'/gfd'}
          />
        </Box>
      </Box>
    </Card>
  );
};
export default ProductsStore;
