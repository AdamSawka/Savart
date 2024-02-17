import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from 'mockData';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import image from 'assets/deers3.jpg';
import AddToBasketButton from 'components/Common/AddToBasketButton/AddToBasketButton';

function SingleProduct() {
  const { id } = useParams<{ id: any }>();

  const data = products.find((value) => value.id === parseInt(id));

  return (
    <Box sx={{ mt: '170px', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 670 }}>
        <CardMedia component='img' alt={data?.name} image={image} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {data?.name}
          </Typography>
          <Typography sx={{ mb: 5 }}>
            <Typography variant='body2' color='text.secondary'>
              {data?.description}
            </Typography>
          </Typography>
          <AddToBasketButton id={data?.id} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default SingleProduct;
