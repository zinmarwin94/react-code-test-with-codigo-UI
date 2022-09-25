import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles"; 

import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails  } from "@material-ui/core";
import { toggleMenu } from "../../actions";
import Navbar from "../../hoc/Layout/navbar";
import "../../index.css";
const styles = theme => ({
   
});

class Landing extends React.Component {
  
  async componentDidMount () {
    
  }
 
  render() { 
    return (
      <Grid> 
        <Navbar onSetToggleMenu={this.props.onSetToggleMenu} space_list={this.props.space_list}  />
        <Grid style={{ position: "relative" }}>
          
          <Grid style={{ position: "absolute", zIndex: 2, bottom: 250, left: 100, width: "90%" }}>
              <p style={{ fontSize: 80, color: "#f5f5f7", fontWeight: 700 }}>All Apple Originals.<br />Only on&nbsp;Apple&nbsp;TV+.</p>
              <Typography style={{ backgroundColor: "#f5f5f7",  borderRadius: 30, padding: "10px 30px", display: "inline", fontSize: 18 }}>Stream now</Typography>
              <Grid container justify="space-between" style={{ marginTop: 50 }} >
                <Grid>
                  <Grid container alignItems="center">
                    <Typography style={{ color: "#f5f5f5", fontSize: 20 }}>Watch on the </Typography>
                    <img style={{ width: 35, height: 35, margin: "0 5px" }} src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_app_icon__cth1s5qlqpyu_large_2x.png" />
                    <Typography style={{ color: "#f5f5f5", fontSize: 20 }}>app</Typography>
                  </Grid>
                </Grid>
               
                
                <img style={{ width: 40, height: 40 }} src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/controls/pause_icon__dctqqxjvvpme_large.svg" />
              </Grid>
             
              
          </Grid>
          <video
            data-prioritized-video=""
            playsinline="true" 
            loop="" 
            autoplay="" 
            src="https://www.apple.com/105/media/us/apple-tv-plus/2022/4114721e-12d2-4260-87c4-678589d5f804/anim/supercut/large.mp4"
            style={{
              width: "100.1%",
              opacity: 0.999,
             
            }}
          ></video>
          
        </Grid>

        <Grid  style={{ width: 980, margin: "0 auto" }} >
          <Grid  style={{ paddingTop: 100, paddingBottom: 52, textAlign: "center" }}>
            <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_app_icon__cth1s5qlqpyu_large_2x.png" style={{ width: 76, height: 76 }} />
            <Typography style={{ color: "#1d1d1f", fontSize: 72, fontWeight: 700 }} >Watch Apple TV+ anywhere</Typography>
            <Typography style={{ color: "#1d1d1f", fontSize: 72, fontWeight: 700 }} >on the Apple TV app.</Typography>
            <Typography style={{ fontSize: 17, fontWeight: 400 }}>Find the Apple TV app on your favorite Apple devices.</Typography>
            <Typography style={{ fontSize: 17, fontWeight: 400 }}>Or watch Apple TV+ online at <a href="https://tv.apple.com" style={{ color: "#06c", textDecoration: "none" }} >tv.apple.com</a>.</Typography>
          </Grid>

          <Grid container justify="space-between" style={{ marginBottom: 67 }}>
              <Grid style={{ textAlign: "center" }}>
                <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_apple_tv__r2nel0gcigam_large_2x.jpg" style={{ width: 64, height: 81 }} />
                <Typography style={{ fontSize: 19, color: "#1d1d1f", marginTop: 17 }}>Apple TV</Typography>
              </Grid>

              <Grid style={{ textAlign: "center" }}>
                <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_iphone__c914mkstye0y_large.jpg" style={{ width: 90, height: 81 }} />
                <Typography style={{ fontSize: 19, color: "#1d1d1f", marginTop: 17 }}>iPhone</Typography>
              </Grid>

              <Grid style={{ textAlign: "center" }}>
                <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_ipad__cyk6qow5fiqa_large.jpg" style={{ width: 85, height: 81 }} />
                <Typography style={{ fontSize: 19, color: "#1d1d1f", marginTop: 17 }}>iPad</Typography>
              </Grid>

              <Grid style={{ textAlign: "center" }}>
                <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_mac__b7y797p7oouq_large.jpg" style={{ width: 114, height: 81 }} />
                <Typography style={{ fontSize: 19, color: "#1d1d1f", marginTop: 17 }}>Mac</Typography>
              </Grid>

              <Grid style={{ textAlign: "center" }}>
                <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_airplay__ddkvcm0sxtm6_large.jpg" style={{ width: 54, height: 81 }} />
                <Typography style={{ fontSize: 19, color: "#1d1d1f", marginTop: 17 }}>AirPlay</Typography>
              </Grid>
          </Grid>

          <Grid style={{ textAlign: "center" }}>
            <Typography style={{ fontSize: 40, fontWeight: 600, }}>See it on your smart TV</Typography>
            <Typography style={{ fontSize: 40, fontWeight: 600, }}>or streaming device.</Typography>
            <a href="https://support.apple.com/en-sg/guide/tvplus/welcome/web" style={{ color: "#06c", textDecoration: "none", fontWeight: 400, fontSize: 17 }} >Set up your device</a><br />
            <a href="https://www.apple.com/apple-tv-app/devices/" style={{ color: "#06c", textDecoration: "none", fontWeight: 400, fontSize: 17 }} >Explore compatible devices</a>
          </Grid>

          <Grid style={{ marginTop: 100 }}>
            <Grid container justify="space-between">
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_samsung__er6s8sp9t126_large.jpg" style={{ width: 117, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_lg__7fxn3l0zf5ua_large_2x.jpg" style={{ width: 161, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_vizio__crgnno5ezt2e_large.jpg" style={{ width: 110, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_sony__dv28xq4n91ea_large.jpg" style={{ width: 126, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg" style={{ width: 113, height: 81 }} />
            </Grid>

            <Grid container justify="space-between" style={{ marginTop: 30 }}>
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_roku__d3kr4gpcimoi_large.jpg" style={{ width: 102, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_firetv__f6qpefrj0ree_large.jpg" style={{ width: 96, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_google_tv__e5t4asdc2gsy_large.jpg" style={{ width: 160, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_playstation__djtq2b40wf2a_large.jpg" style={{ width: 161, height: 81 }} />
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/icon_xbox__cfelmbxxfoaa_large.jpg" style={{ width: 123, height: 81 }} />
            </Grid>
          </Grid>

          <Grid style={{ marginTop: 100, textAlign: "center" }}>
            <Typography style={{ fontSize: 72, fontWeight: 700, color: "#1d1d1f"}}>Questions? Answers</Typography>

            <Grid style={{ marginTop: 30 }}>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>What is Apple TV+?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>How can I watch it?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at <a href="https://tv.apple.com">tv.apple.com</a>.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>What does it cost?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months.1 (2) A monthly subscription is just $4.99 per month after a free seven-day trial.2 (3) Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $14.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.3
                  </Typography>
                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>Can I share with my family?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Of course. Apple TV+ lets you share your subscription with up to five family members.</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>Are there commercials? And can I watch on demand?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere.</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>Do I need an Apple TV 4K?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>Do I need an Apple TV 4K?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.</Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 20 }}>Can I download to watch offline?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.</Typography>
                </AccordionDetails>
              </Accordion>

            </Grid>
            
          </Grid> 
        </Grid>
        <Grid container style={{ backgroundColor: "#f5f5f7", padding: 50, margin: "20px 30px" }}>
            <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/bundle__e93qdcv7mtm6_large.jpg" />
            <Grid style={{ textAlign: "center" }}>
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_one__b0modw3b87xy_large_2x.png" />
              <Typography style={{ fontSize: 40 }}>Bundle Apple TV+ with</Typography>
              <Typography style={{ fontSize: 40 }}>up to five other great services.</Typography>
              <Typography style={{ fontSize: 40, marginBottom: 20 }}>And enjoy more for less.</Typography>
              <Typography style={{ backgroundColor: "#111111", color: "#ffffff", padding: "7px 20px", borderRadius: 20, display: "inline", marginTop: 20 }}>Try Apple One free*</Typography>
            </Grid> 
        </Grid>

        <Grid container style={{ backgroundColor: "#f5f5f7", padding: 50, margin: "20px 30px" }}>
           
            <Grid style={{ padding: 50  }}>
              
              <Typography style={{ fontSize: 40 }}>The Apple Music Student</Typography>
              <Typography style={{ fontSize: 40 }}>Plan comes with Apple TV+</Typography>
              <Typography style={{ fontSize: 40, marginBottom: 20 }}>for free.3</Typography>
              <Typography style={{ backgroundColor: "#111111", color: "#ffffff", padding: "7px 20px", borderRadius: 20, display: "inline", marginTop: 20 }}>Try Apple One free</Typography>
            </Grid> 
            <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/student_plan__bm7yp0v4tf6u_large.jpg" />
        </Grid>

        <Grid container justify="space-between" style={{ margin: "20px 30px" }}>
            
          <Grid style={{ textAlign: "center", backgroundColor: "#f5f5f7", padding: "100px 50px",  }}>
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_4k_logo__bx1mtrage32a_large.png" />
              <Typography style={{fontSize: 40 }}>A higher definition of TV.</Typography>
              <Grid container justify="center" alignItems="center" style={{ marginBottom: 50 }} >
                <Typography style={{ marginRight: 20, padding: "5px 20px", backgroundColor: "#0071e3", color: "#ffffff", borderRadius: 20 }}>Buy</Typography>
                <Typography><a href="" style={{ color: "#06c", textDecoration: "none", fontSize: 17 }}>Learn more</a></Typography>
              </Grid>
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/apple_tv_4k_remote__igmcbznr1w2u_large.jpg" />
            </Grid> 
        
            <Grid style={{ backgroundColor: "#f5f5f7", padding: "100px 50px", textAlign:"center" }}>
              <Typography style={{ fontSize: 32, color: "#1d1d1f" }}>AirPlay</Typography>
              <Typography style={{ fontSize: 40 }}>Bring Apple TV+ to</Typography>
              <Typography style={{ fontSize: 40 }}>a screen near you.</Typography>
              <Typography style={{ marginBottom: 50 }}><a href="" style={{ color: "#06c", textDecoration: "none", fontSize: 17 }}>Learn more</a></Typography>
               
              <img src="https://www.apple.com/v/apple-tv-plus/ac/images/overview/air_play__dyuvvwnd5riq_large.jpg" />
            </Grid>
        </Grid>

        <Grid container justify="center" style={{ backgroundColor: "#f5f5f7", padding: 20}}>
          <Grid style={{ width: 980 }}>
            <ul style={{ fontSize: 12, color: "#8a8a8f", listStyle: "none" }}>
              <li>* The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</li>
            </ul>
            <ol style={{ color: "#8a8a8f", fontSize: 12 }}>
              <li>$4.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</li>
              <li>One subscription per Family Sharing group. Plan automatically renews until cancelled.</li>
              <li>Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only and does not extend to a Family Sharing group.</li>
            </ol>

            <hr style={{ margin: "20px 0" }} />

            <Grid container>
              <Typography style={{ fontSize: 14, color: "#8a8a8f", padding: "0 10px" }}></Typography>
              <img src="https://www.apple.com/ac/globalfooter/7/en_US/assets/ac-footer/breadcrumbs/separator/icon_large.svg" />
              <Typography style={{ fontSize: 14, color: "#8a8a8f", padding: "0 10px" }}>Only on Apple</Typography>
              <img src="https://www.apple.com/ac/globalfooter/7/en_US/assets/ac-footer/breadcrumbs/separator/icon_large.svg" />
              <Typography style={{ fontSize: 14, color: "#8a8a8f", padding: "0 10px" }}>Apple TV+</Typography>
            </Grid>
            
            <Grid container justify="space-between" style={{ marginTop: 20 }}>
              <Grid style={{  }}>
                  <Typography style={{ marginBottom: 7, fontSize: 12, color: "#1d1d1f" }}>Shop and Learn</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Store</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Mac</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >iPad</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >iPhone</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Watch</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >AirPods</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >TV & Home</Typography> 
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >AirTag</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Accessories</Typography>
                  <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Gift Cards</Typography>  
                   
              </Grid>
              <Grid style={{  }}>
                <Typography style={{ marginBottom: 7, fontSize: 12, color: "#1d1d1f",  }}>Services</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple Music </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple TV+ </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple Fitness+ </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple News+ </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple Arcade </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> iCloud </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple One </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple Card </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple Books </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple Podcasts </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> App Store </Typography>

                <Typography style={{ marginTop: 20, marginBottom: 7, color: "#1d1d1f", fontSize: 12 }}> Account </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Manage Your Apple ID </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> Apple Store Account </Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}> iCloud.com </Typography>
              </Grid>
              <Grid style={{  }}>
                <Typography style={{ marginBottom: 7, fontSize: 12, color: "#1d1d1f" }} >Apple Store</Typography>
                
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Find a Store</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Genius Bar</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Today at Apple</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Apple Camp</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Apple Store App</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Refurbished and Clearance</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Financing</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Apple Trade In</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Order Status</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Shopping Help</Typography>

              </Grid>
              <Grid style={{  }}>
                <Typography style={{ marginBottom: 7, fontSize: 12, color: "#1d1d1f",  }}>For Business</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Apple and Business</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Shop for Business</Typography>
                <Typography style={{ marginTop: 20, marginBottom: 7, color: "#1d1d1f", fontSize: 12  }}>For Education</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Apple and Education</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Shop for K-12</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Shop for College</Typography>
                
                <Typography style={{ marginTop: 20, marginBottom: 7, color: "#1d1d1f", fontSize: 12 }}>For Healthcare</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Apple in Healthcare</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Health on Apple Watch</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Health Records on iPhone</Typography>
                
                <Typography style={{ marginTop: 20, marginBottom: 7, color: "#1d1d1f", fontSize: 12 }}>For Government</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Shop for Government</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }}>Shop for Veterans and Military</Typography>
              </Grid>
              <Grid style={{  }}>
                <Typography style={{ fontSize: 12, color: "#1d1d1f",  }}>Apple values</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Accessibility</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Education</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Environment</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Inclusion and Diversity</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Privacy</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Racial Equity and Justice</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Supplier Responsibility</Typography>
                
                <Typography style={{ marginTop: 20, marginBottom: 7, color: "#1d1d1f", fontSize: 12 }} >About Apple</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Newsroom</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Apple Leadership</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Career Opportunities</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Investors</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Ethics & Compliance</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Events</Typography>
                <Typography style={{ marginBottom: 7, color: "#8a8a8f", fontSize: 12 }} >Contact Apple</Typography>

              </Grid>

            </Grid>

          </Grid>
          
        </Grid>

      </Grid> 
    );
  }
} 

const mapStateToProps = state => {
  return {
    state,
    space_list: state.space_list
  };
};

const mapDispatchToProps = dispatch => ({
  onSetToggleMenu: (toggle) => dispatch(toggleMenu({toggle})), 
}); 


export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Landing))); 
