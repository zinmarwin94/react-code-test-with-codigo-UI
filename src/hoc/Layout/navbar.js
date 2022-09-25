import React from 'react'; 
import { isMobile, isBrowser } from 'react-device-detect';
import { Grid, Typography } from "@material-ui/core"; 
import MenuIcon from "../../img/menu.png";
import CrossIcon from "../../img/cross.png";
const Navbar = (props) => {
    return (
        <div>
            {isBrowser ? 
             <Grid style={{ backgroundColor: "#000000", height: 48 }}>
                <Grid style={{ margin: "0 auto", maxWidth: 980, padding: "0 22px" }}>
                    <Grid container justify="space-between">
                        <a href="https://www.apple.com/" ><img src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' style={{ height: 46 }} /></a>
                        <a href="https://www.apple.com/us/shop/goto/store/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >Store</Typography></a>
                        <a href="https://www.apple.com/mac/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >Mac</Typography> </a>
                        <a href="https://www.apple.com/ipad/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >iPad</Typography> </a>
                        <a href="https://www.apple.com/iphone/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >Phone</Typography> </a>
                        <a href="https://www.apple.com/watch/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >Watch</Typography> </a>
                        <a href="https://www.apple.com/airpods/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >AirPods</Typography> </a>
                        <a href="https://www.apple.com/tv-home/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >TV & Home</Typography> </a>
                        <a href="https://www.apple.com/services/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >Only on Apple</Typography> </a>
                        <a href="https://www.apple.com/us/shop/goto/buy_accessories/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >Accessories</Typography> </a>
                        <a href="https://www.support.apple.com/" style={{ textDecoration: "none" }} > <Typography className="navbar-item" >Support</Typography> </a>
                        <a href="https://www.apple.com/us/search"><img src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg' 
                            style={{ 
                                backgroundPosition: "8px 0", 
                                backgroundSize: "15px 88px",
                                backgroundRepeat: "no-repeat",
                                width: 15,
                            }} 
                        /></a>
                        <a href="https://www.apple.com/us/shop/goto/bag"><img src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg'  style={{ height: 46 }}/></a>
                    </Grid> 
                </Grid>
            </Grid>
            :
            <Grid style={{ backgroundColor: "#000000", height: 48 }}>
                <Grid style={{ margin: "0 auto", maxWidth: 980, padding: "0 22px" }}>
                    <Grid container justify="space-between" alignItems='center'>
                        {props.space_list.openMenu ? 
                        <img src={CrossIcon} style={{ height: 30, width: 30, paddingBottom: 5 }} onClick={()=> { props.onSetToggleMenu(false)}} />
                        :
                        <img src={MenuIcon} style={{ height: 25, width: 45, paddingBottom: 5 }} onClick={()=> { props.onSetToggleMenu(true)}} />
                        }
                        
                        
                        
                        <a href="https://www.apple.com/" ><img src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' style={{ height: 46 }} /></a>  
                        <a href="https://www.apple.com/us/shop/goto/bag"><img src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg'  style={{ height: 46 }}/></a>
                    </Grid> 
                </Grid>
            </Grid>
            }
           

            <Grid style={{ backgroundColor: "#111111f0", position: "sticky", top: 0, position: "webkit-sticky"  }}>
                <Grid style={{ margin: "0 auto", maxWidth: 980, padding: "0 22px" }}>
                    <Grid container justify="space-between" alignItems='center' style={{ height: 46 }}>
                    <a href="https://www.apple.com/apple-tv-plus/" style={{ textDecoration: "none" }} > <Typography style={{ fontSize: 20, color: "#ffffff" }} >Apple TV+</Typography></a>
                    <a href="https://tv.apple.com/channel/tvs.sbd.4000?itscg=10000&itsct=atv-tv_op-nav_wch-ctr-210111" style={{ textDecoration: "none" }} > <Typography style={{ fontSize: 12, backgroundColor: "#fafafc", color: "#1d1d1f", borderRadius: 20, padding: "3px 15px" }} >Stream now</Typography></a>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        
       
        
    )
}

export default Navbar;