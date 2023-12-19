import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import deer from '../../../assets/deers4.jpg'
import mountains from '../../../assets/image3.jpg'
import mountains2 from '../../../assets/image2.jpg'


 const MainPageCarousel = () => {

         const items = [
             {
                 img: deer,
                 description: "asd"
             },
             {
                 img: mountains,
                 description: "jgh"
             }, {
                 img: mountains2,
                 description: "jgh"
             }
         ]

     return (
         <Carousel animation='slide' interval='6000' >
             {
                 items.map( (item, i) =>   <Paper sx={{display:"flex", justifyContent:"center"}} >
                     <Button className="CheckButton">
                       <img width={'640px'} height={'480px'} src={item.img} alt={item.description}/>
                     </Button>
                 </Paper> )
             }
         </Carousel>
    );
}
export {MainPageCarousel};