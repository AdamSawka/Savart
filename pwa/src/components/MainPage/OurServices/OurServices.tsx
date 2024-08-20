import React from 'react';
import {Box, Grid, Paper, Theme, useMediaQuery} from "@mui/material";
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
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Box style={{marginBottom:"150px"}}>
      <div style={{width: "100%", textAlign: "center"}}>
        <span style={{fontSize: isTablet ? "32px" : "50px", fontWeight: 300}}>
          {t('Our')}{' '}
        </span>
        <span style={{fontSize: isTablet ? "32px" : "50px", fontWeight: 600}}>
          {t('Services')}
        </span>
        <Grid className='px-2' justifyContent="center" container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={4}>
              <img style={{
                height: isTablet ? '200px' : '400px',
                objectFit: 'cover'
              }} className=" w-100" src={woodServices} alt="Wood services"/>
              {t("Wood Processing")}
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={4}>
              <img style={{
                height: isTablet ? '200px' : '400px',
                objectFit: 'cover'
              }} className=" w-100" src={printing3D} alt="Printing"/>
              {t("Modeling 3d")}
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={4}>
              <img style={{
                height: isTablet ? '200px' : '400px',
                objectFit: 'cover'
              }} className=" w-100" src={individualProject} alt="project"/>
              {t("Individual projects")}
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Item elevation={4}>
              <img style={{
                height: isTablet ? '200px' : '400px',
                objectFit: 'cover'
              }} className=" w-100" src={finishedProducts} alt="gift"/>
              {t("Sale Of Finished Products")}
            </Item>
          </Grid>
        </Grid>
      </div>

    </Box>
  );
}

export default OurServices;
