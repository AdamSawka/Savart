import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Button } from '@mui/material';

function BasketIcon() {
  return (
    <Button
      sx={{ justifySelf: 'end', marginRight: 5 }}
      startIcon={<ShoppingBasketIcon />}
    >
      Koszyk
    </Button>
  );
}

export default BasketIcon;
