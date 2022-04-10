import { Box, makeStyles, Typography } from '@material-ui/core';
import { navData } from '../../constants/Data';

const useStyle = makeStyles(theme => ({
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
          {
                navData.map(data => (
               <Box className={classes.container}>
                <img src={data.url} alt="" className={classes.image}  />
                        <Typography className={classes.text}>{data.text}</Typography>
                        </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;