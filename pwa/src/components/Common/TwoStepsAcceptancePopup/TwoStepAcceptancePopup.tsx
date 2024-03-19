import React from 'react';
import {bindPopover, bindTrigger} from "material-ui-popup-state";
import {Button, Popover, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {usePopupState} from "material-ui-popup-state/hooks";

interface TwoStepAcceptancePopupProps {
  acceptanceFn: () => void;
  text: string;
  btnText: string;
  openBtnText: React.ReactNode;
}

const TwoStepAcceptancePopup: React.FC<TwoStepAcceptancePopupProps> = (
  {
    acceptanceFn,
    text,
    btnText,
    openBtnText
  }) => {
  const {t} = useTranslation();
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demo-popup-popover',
    disableAutoFocus: false
  });
  return (
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
        {t(openBtnText)}
      </Button>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{p: 2}}>{t(text)}</Typography>
        <Button variant="contained" onClick={() => {
          acceptanceFn();
          popupState.close();
        }}>
          {t(btnText)}
        </Button>
      </Popover>
    </div>
  );
}

export default TwoStepAcceptancePopup;
