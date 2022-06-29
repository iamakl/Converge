import * as React from 'react';
import { Card, Typography, Grid, Button, Box, Popper, Fade, Paper, TextField, Link } from '@mui/material';
import NavBar from './navbar';

const Home = () => {

  return (
    <div className='homebg'>
    <NavBar />
    <div id="Home" className='homebg1' style={{height:'100vh'}}>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <center>
    <Typography variant='h2' className='logotext'>
    CONVERGE
    </Typography>
    </center>
    <center>
    <Typography variant='h5'className='subheading'>
    Easing Your Decisions
    </Typography>
    </center>
    <br />
    <br />
    <br />
    <Grid className='' container spacing={2}>
  <Grid item xs={0} sm={2} md={3} lg={4} ></Grid>
  <Grid item xs={12} sm={8} md={6} lg={4} >
    <Button href="LoginAspirants" className='faspirantsbtn' variant="outlined" size="large">
          For Aspirants
        </Button>
        <Button href='LoginMentors' className='fmentorbtn' variant="contained" size="large">
          For Mentor
        </Button>
  </Grid>
</Grid>
<br />
<br />

    </div>

    <div id='What' className='homebg1' style={{height:'80vh'}} className='homebg1'><br /><br />
    <br />
    <center>
    <Typography variant='h3' className='homeheading'>
    What We Do
    </Typography>
    </center>
    <br />
    <Grid className='' container spacing={4}>
    <Grid item xs={12}>
    <Card className='wwdcard'>
    <Typography variant="h5" style={{textAlign:'justify'}} className='converge'>
    If you have come to us then definitely you are facing some trouble in selecting the right college for yourself.
    Often people tend to ignore the issue this but don't worry my friend, you have come to the right place. Here your problems would not be ignored and 
    finding soluions to your problem is the only thing we want to do.<br /> 
    <br /> 
    <br /> 
    WELCOME TO CONVERGE!! <br /> 
    <br /> 
    <br /> 
    What we do is pretty simple. you register yourself with this platform and then book sessions with students of the colleges you want to get into. Ask them every possible
    question you can have and that's it.
    No one has ever thought of providing solution to the problem we are discussing and hence you don't have to go anywhere else. 
    Converge is a one-stop solution to the needs and problems of students who have appeared for some competitive exam and have the results. 
    </Typography>
    </Card>
  </Grid>

</Grid>
<br />
<br />

    </div>

    <div id="Who" className='homebg1' style={{height:'70vh'}}><br /><br />
    <Grid className='homebg2' container spacing={4}>
  <Grid style={{padding:'20px 20px'}} className="homebgpicbg" item xs={0} sm={0} md={6} lg={6} >
  <div className='homebgpic'></div>
  </Grid>
  <Grid style={{padding:'120px 20px'}} item xs={12} sm={12} md={6} lg={6} >
  <div>
  <Typography style={{marginBottom:'15px'}} variant='h3' className='homeheading'>
    Who We Are
    </Typography>
    <Typography style={{marginBottom:'12px', textAlign:'justify'}} variant="h5" className='converge'>
      We are a group of students who have faced the same situation you are in right now. We are a group of students who have remained frustrated for days when it was getting too confusing to find a proper college.
    </Typography>
    <Typography style={{marginBottom:'8px'}} variant='h5' className='converge'>
    Our Team
    </Typography>
    <Typography style={{marginBottom:'8px'}} variant="h5" className='converge'>
    Ankush Lohani
    </Typography>
    <Typography style={{marginBottom:'8px'}} variant="h5" className='converge'>
    Ishan Mandal
    </Typography>
    {/* <Typography style={{marginBottom:'8px'}} className='converge'>
    Saul Goodman: Lead Accountant
    </Typography>
    <Typography style={{marginBottom:'8px'}} className='converge'>
    Michael Ehrmantraut: Investment Manager
    </Typography>
    <Typography className='converge'>
    Hank Schrader: Senior Accountant
    </Typography> */}
    <br />
  </div>
  </Grid>
</Grid>
<br />
<br />
<br />

    </div>

    {/*<div className='homebg1' style={{height:'100vh', margin:'0px'}}><br /><br />
        <center>
        <Typography variant='h4' className='homeheading'>
        Our clients
        </Typography>
        </center>
        <br />
        <Grid className='homecards' container spacing={4}>
      <Grid item xs={12} sm={12} md={3} lg={3} >
      <Card className='card'>
      <Typography className="converge">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</Typography>
      </Card>
      </Grid>
    
      <Grid item xs={12} sm={12} md={3} lg={3} >
      <Card className='card'>
      <Typography className="converge">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</Typography>
      </Card>
      </Grid>
    
      <Grid item xs={12} sm={12} md={3} lg={3} >
      <Card className='card'>
      <Typography className="converge">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</Typography>
      </Card>
      </Grid>
    
      <Grid item xs={12} sm={12} md={3} lg={3} >
      <Card className='card'>
      <Typography className="converge">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</Typography>
      </Card>
      </Grid>
    </Grid>
    <br />
    <br />
    
        </div>*/}

    <div id='Contact' className='homebg1' style={{height:'80vh', margin:'0px', marginBottom:'-23px', overflow:'auto' }}><br /><br />
    <Grid className='homebg2' container spacing={4}>
    <Grid  item xs={12} md={6}>
    <div className=''>
    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.645191100742!2d84.89963771495385!3d22.253536985347896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1636323411075!5m2!1sen!2sin" style={{width:'100%', height:'50vh', border:'0px', marginTop:'2px', allowfullscreen:'', loading:'lazy'}}></iframe>
    </div>
    </Grid>
  <Grid style={{padding:'35px 35px'}} item xs={12} sm={12} md={6} lg={6} >
  <Typography variant='h4' className='homeheading'>
    Contact Us
    </Typography><br />
  <div>
  <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <input type="text" placeholder="Name" className="homeTextFieldboot" />
      <input type="email" placeholder="Email" className="homeTextFieldboot" />
      <input type="tel" placeholder="Number" className="homeTextFieldboot" />
      <input type="text" placeholder="Message" className="homeTextFieldboot" />
      <center>
      <Button className='loginbtn' size="large" variant="contained">
          Send
        </Button>
      </center>
    </Box>
  </div>
  </Grid>
</Grid>
<br />

    </div>
    <footer id="main-footer" class="bg-dark text-center py-1">
      <div class="container">
        <p>Copyright &copy; 2021, Converge, All Rights Reserved</p>
      </div>
    </footer>


    </div>
  );
}

export default Home;
