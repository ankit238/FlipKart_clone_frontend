import React from 'react'
import Carousel from "react-multi-carousel";
import { products } from '../../constants/Data';
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Countdown from 'react-countdown';


const useStyle = makeStyles({

      component: {
        marginTop: 12,
        background: '#FFFFFF'
    }, 
  image: {
    height:150
  },
  deal: {
    display: "flex",
    padding:"15px 20px",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight:25
  },
  button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
  },
     timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
  },
         wrapper: {
        padding: '35px 15px'
    },
     
})

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Side = ({timer,title}) => {
  const classes = useStyle();
   const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer = ({ hours, minutes, seconds }) => {
    return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>
  }
  
  
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{ title}</Typography>
        {
          timer &&
          <>
                      <img src={timerURL} style={{ width: 24 }} alt='time clock' />
<Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
 <Button variant="contained" color="primary" className={classes.button}>View All</Button>

          </>
        }
      </Box>  
      
      <Divider />
       <Carousel
      responsive={responsive}
     swipeable={false}
                draggable={false}
              
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
      showDots={false}
           containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
    >
          {
              products.map(product => (
              <Box textAlign="center" className={classes.wrapper}>
                                    <img src={product.url} alt="" className={classes.image} />
              
 <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>                            </Box>
             
              ))
}
</Carousel>
   </Box>
  )
}

export default Side