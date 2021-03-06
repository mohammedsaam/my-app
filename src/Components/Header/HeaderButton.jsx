import { Typography } from "@material-ui/core";
import { Box,Button,makeStyles ,Badge} from "@material-ui/core"
import {ShoppingCart} from '@material-ui/icons';

const useStyle = makeStyles({
    login:{
       background:"#ffffff",
       color:"blue",
       textTransform:"none",
       fontWeight:600,
       borderRadius:2,
       padding:"5px 40px",
       boxShadow:"none"
    },
    wrapper:{
        margin:"0 5% 0 auto",
        display:"flex",
        "& > *":{
            marginRight: 50,
            alignItems:"center"
        }
    },
    container:{
        display:"flex",
    }
})

export const HeaderButton = () => {
    const classes = useStyle();
    return(
         <Box className={classes.wrapper}>
             <Button variant="contained" className={classes.login}>
                 Login
             </Button>
             <Typography style={{marginTop: 5}}>
                 More
             </Typography>
             <Box className={classes.container}>
             <Badge badgeContent={2} color="secondary">
             <ShoppingCart />
            </Badge>
                 <Typography style={{marginLeft: 10}}>Cart</Typography>
             </Box>
         </Box>
    )

}