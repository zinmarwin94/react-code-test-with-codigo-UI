import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles"; 

import Grid from "@material-ui/core/Grid"; 
import Typography from "@material-ui/core/Typography"; 
import { setSpaceList } from "./actions"
const styles = theme => ({
   
});

class Home extends React.Component {
  
  
 
  render() { 
    return (
      <Grid> 
        <Typography>new route</Typography>
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
  onSetSpaceList: (space_list) => dispatch(setSpaceList({space_list})), 
}); 


export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home))); 
