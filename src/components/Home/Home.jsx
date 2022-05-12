import React from 'react'
import { Box,makeStyles } from '@material-ui/core'
import NarBar from "./NarBar"
import Banner from './Banner'
import Side from "./Side"
import MidSection from './MidSection'

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: "#f2f2f2",
        
    },
    rightWrapper: {
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width:'17%'
    }
})

const Home = () => {
    const classes = useStyle()
    const addURL= 'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50';

    return (
        <>
            
            <NarBar />
        <Box className={classes.component}>
           
            <Banner />
                <Box style={{display:"flex"}}>
                    <Box style={{width:"80%"}}>
                        <Side 
                            
                            timer={true}
                     />
                </Box>
                
                <Box className={classes.rightWrapper}>
                        <img src={addURL} alt="" style={{width:230}}/>
                </Box>
                </Box>

                <MidSection />
                
                <Side 
                    timer={true}
                    title="Deals of the Day"

                />
                <Side 
                    timer={true}
                    title="Trending Offers"
               />
                <Side />
                <Side />

            </Box>
         
            </>
  )
}

export default Home