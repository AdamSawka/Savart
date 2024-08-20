import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddToBasketButton from 'components/Common/AddToBasketButton/AddToBasketButton';
import useGetSingleItemQuery from "hooks/useGetSingeItemQuery";
import {paramsSingleItem} from "constans/common";

function SingleProduct() {
  const { id } = useParams<{ id: any }>();
  const { data:singleItemData } = useGetSingleItemQuery( {},paramsSingleItem,id);

  return (
    <Box sx={{ mt: '170px', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 670 }}>
        <CardMedia component='img' alt={singleItemData?.data?.attributes?.name} image={`${process.env.REACT_APP_API_STRAPI_URL}${singleItemData?.data?.attributes?.image?.data?.attributes?.formats?.original_webp.url}`}
         />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {singleItemData?.data?.attributes?.name}
          </Typography>
          <Typography sx={{ mb: 5 }}>
            <Typography variant='body2' color='text.secondary'>
              {singleItemData?.data?.attributes?.description}
            </Typography>
          </Typography>
          <AddToBasketButton id={id} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default SingleProduct;
