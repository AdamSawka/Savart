import React from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  id?: number;
}

function AddToBasketButton({ id }: Props) {
  const { t } = useTranslation();
  const addTBasket = (productId?: number) => {
    console.log(productId);
  };
  return (
    <Button variant='contained' onClick={() => addTBasket(id)}>
      {t('Add To Basket')}
    </Button>
  );
}

export default AddToBasketButton;
