import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Grid, useMediaQuery} from '@mui/material';
import {customTheme} from "theme/theme";

interface MainPageCarouselProps {
  data: any
}

const MainPageCarousel = ({data}: MainPageCarouselProps) => {

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

  const theme = customTheme;
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
  const isTablet = useMediaQuery(`(max-width:${theme.breakpoints.values.md}px)`);

  const chunkSize = isTablet ? (isMobile ? 1 : 2) : 3;

  return (
    <div>
      <Carousel animation="fade" autoPlay duration={2000}
                navButtonsAlwaysInvisible
                indicators={false}
                height='450px'>
        {data && groupIntoChunks(data?.products?.data, chunkSize).map((group, groupIndex) => (
          <Grid container key={groupIndex} sx={{
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            pb: '20px',
            height: '400px'
          }}>
            {group.map((review, reviewIndex) => {
              return (
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
                        src={`${process.env.REACT_APP_API_STRAPI_URL}${review.attributes?.image?.data?.attributes?.formats?.original_webp.url}`}
                        alt={review.attributes?.description}
                      />
                    </Button>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        ))}
      </Carousel>
    </div>
  );
};
export {MainPageCarousel};
