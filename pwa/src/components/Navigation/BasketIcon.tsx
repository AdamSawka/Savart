import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Button} from '@mui/material';
import {useTranslation} from "react-i18next";

function BasketIcon() {
  const {t} = useTranslation();

  return (
    <Button
      sx={{
        justifySelf: 'end',
        marginRight: 5,
        height: "48px",
        marginTop: "16px"
      }}
      startIcon={<ShoppingBasketIcon/>}
    >
      {t('Basket')}
    </Button>
  );
}

export default BasketIcon;
