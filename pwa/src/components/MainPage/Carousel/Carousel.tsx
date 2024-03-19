import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Grid, useMediaQuery} from '@mui/material';
import deer from '../../../assets/deers4.jpg';
import deer2 from '../../../assets/deer1.jpg';
import mountains1 from '../../../assets/image1.jpg';
import mountains from '../../../assets/image3.jpg';
import mountains2 from '../../../assets/image2.jpg';
import {useTranslation} from "react-i18next";
import {customTheme} from "theme/theme";

const MainPageCarousel = () => {

  function groupIntoChunks(array: any[], chunkSize: number) {
    const output: any[][] = [];
    let currentChunk: any[] = [];

    array.forEach((item, index) => {
      currentChunk.push(item);

      if ((index + 1) % chunkSize === 0 || index === array.length - 1) {
        output.push(currentChunk);
        currentChunk = [];
      }
    });

    return output;
  }

  const reviews = [
    {
      img: deer,
      description: 'asd',
    },
    {
      img: mountains,
      description: 'jgh',
    },
    {
      img: mountains2,
      description: 'jgh',
    },
    {
      img: deer2,
      description: 'asd',
    },
    {
      img: mountains,
      description: 'jgh',
    },
    {
      img: mountains1,
      description: 'jgh',
    },
  ];
  const theme = customTheme;
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
  const isTablet = useMediaQuery(`(max-width:${theme.breakpoints.values.md}px)`);

  const chunkSize = isTablet ? (isMobile ? 1 : 2) : 3;

  return (
    <div>
      {/*<Box sx={{ml: 5}}><h4>{t('Products')}</h4></Box>*/}
      <Carousel animation="fade" autoPlay duration={2000}
                navButtonsAlwaysInvisible
                indicators={false}
                height='450px'>
        {groupIntoChunks(reviews, chunkSize).map((group, groupIndex) => (
          <Grid container key={groupIndex} sx={{
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            pb: '20px',
            height: '400px'
          }}>
            {group.map((review, reviewIndex) => (
              <Grid item key={reviewIndex} xl lg md sm xs sx={{

                height: '100%',
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'grab'
              }}>
                <Paper key={reviewIndex}
                >
                  <Button className='CheckButton'>
                    <img
                      width="100%"
                      height="100%"
                      src={review.img}
                      alt={review.description}
                    />
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </div>
  );
};
export {MainPageCarousel};
