import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import {useTranslation} from "react-i18next";
import {styled} from '@mui/material/styles';
import woodServices from "assets/wood-services.jpg";
import printing3D from "assets/3d-printing.jpg";
import individualProject from "assets/individual-projects.jpg";
import finishedProducts from "assets/finished-products.jpg";

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 400,
  lineHeight: '60px',
}));


function OurServices() {
  const {t} = useTranslation();

  return (
    <Box>
      <p style={{width: "100%", textAlign: "center"}}>
        <span style={{fontSize: "50px", fontWeight: 300}}>
          {t('Our')}{' '}
        </span>
        <span style={{fontSize: "50px", fontWeight: 600}}>
          {t('Services')}
        </span>
        <Grid justifyContent="center" container spacing={2}>
          <Grid item xs={2}>
            <Item elevation={4}>
              <img className="our-services-img" src={woodServices} alt="Wood services"/>
              {t("Wood Processing")}
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item elevation={4}>
              <img className="our-services-img" src={printing3D} alt="Printing"/>
              {t("Modeling 3d")}
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item elevation={4}>
              <img className="our-services-img" src={individualProject} alt="project"/>
              {t("Individual projects")}
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item elevation={4}>
              <img className="our-services-img" src={finishedProducts} alt="gift"/>
              {t("Sale Of Finished Products")}
            </Item>
          </Grid>

        </Grid>
      </p>

    </Box>
  );
}

export default OurServices;
