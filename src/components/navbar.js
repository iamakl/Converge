import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box, Link, Button } from '@mui/material';
import Container from '@mui/material/Container';
import logo from './images/IMG_8101.png';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className='NavBar'>
          <Toolbar>
            <Typography style={{flex: 1}} variant="h6" component="div">
                          <img className='logo' src={logo} />
                        </Typography>
                        <Button className='navbtn' href='#Home'><Link className='tdnone' href="/">Home</Link></Button>
                        <Button className='navbtn' href='#What'>What</Button>
                        <Button className='navbtn' href='#Who'>Who</Button>
                        <Button className='navbtn1' href='#Contact'>Contact</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
