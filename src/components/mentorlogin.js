import * as React from 'react';
import { Card, Typography, Grid, Button, Box, Popper, Fade, Paper, FormControl, TextField, Link } from '@mui/material';
import NavBar from './navbar';

const MLogin = () => {

  return (
    <div className='homebg'>

    <Grid className='' container spacing={0}>
      <Grid item xs={0} sm={0} md={0} lg={0} ></Grid>
      <Grid item xs={12} sm={12} md={5} lg={4} >
      <div className='logincard'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography className='converge' variant='h6' >Welcome Mentors</Typography>
      <br />
      <br />
      <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      {/*<label><Typography className='converge' style={{opacity:'.8'}} >User Name</Typography></label>*/}
      <input type="text" placeholder="User Name" className="loginTextFieldboot" />
      {/*<label><Typography className='converge' style={{opacity:'.8'}} >Password</Typography></label>*/}
      <input type="text" placeholder="Password" className="loginTextFieldboot" />
      <center>
      <Button href="Dashboard" className='loginbtn1' variant="contained">
          Login to Converge
        </Button>
        <br />
        <br />
        <Typography style={{opacity:'.8', marginTop:'18px'}} className='converge'>If not a member? <Link className='tdnone1' href='#'>Sign up</Link></Typography>
      </center>
    </Box>
      </div>
      </Grid>
      <Grid item xs={0} sm={0} md={7} lg={8} >
      <div className='loginpic'></div>
      </Grid>
    </Grid>

    </div>
  );
}

export default MLogin;