import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, ListItemButton, Link, Card, Grid, Select, MenuItem, Button, Modal } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar'
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MNavBar from './mentor_navbar';
import dp from './images/akshaykumar11628230862.png';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MSessions = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className='homebg' sx={{ display: 'flex' }}>
    <MNavBar />
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3, marginLeft: -8.4 }}>
        <DrawerHeader />

        <Grid container spacing={4}>

        <Grid item xs={12}>

        <Typography variant='h6' className='converge'>Sessions</Typography>
        <hr />

        </Grid>

        <Grid item xs={12} md={6}>

        <Card className="session-card">
    <div className='session-header'><Typography className="converge">Upcoming</Typography></div>
    <div className='session-content'>

    <Card style={{display:'flex', alignItems:'center', marginBottom:'15px', background:'#292929', opacity:'.9', padding:'12px 15px'}}>
    <div className=''>
    <Typography className='converge'>Student Id: 1807540</Typography>
    <Typography className='converge'>Date: 07-11-2021</Typography>
    <Typography className='converge'>Time: 16:30</Typography>
    </div>
    </Card>

    <Card style={{display:'flex', alignItems:'center', marginBottom:'15px', background:'#292929', opacity:'.9', padding:'12px 15px'}}>
    <div className=''>
    <Typography className='converge'>Student Id: 1807550</Typography>
    <Typography className='converge'>Date: 08-11-2021</Typography>
    <Typography className='converge'>Time: 14:30</Typography>
    </div>
    </Card>

    <Card style={{display:'flex', alignItems:'center', marginBottom:'15px', background:'#292929', opacity:'.9', padding:'12px 15px'}}>
    <div className=''>
    <Typography className='converge'>Student Id: 1807560</Typography>
    <Typography className='converge'>Date: 09-11-2021</Typography>
    <Typography className='converge'>Time: 18:00</Typography>
    </div>
    </Card>

    </div>
    </Card>

        </Grid>

        <Grid item xs={12} md={6}>

        <Card className="session-card">
    <div className='session-header'><Typography className="converge">Completed</Typography></div>
    <div className='session-content'>
    
    <Card style={{display:'flex', alignItems:'center', marginBottom:'15px', background:'#292929', opacity:'.9', padding:'12px 15px'}}>
    <div className=''>
    <Typography className='converge'>Student Id: 1807635</Typography>
    <Typography className='converge'>Date: 12-11-2021</Typography>
    <Typography className='converge'>Time: 15:00</Typography>
    </div>
    </Card>

    <Card style={{display:'flex', alignItems:'center', marginBottom:'15px', background:'#292929', opacity:'.9', padding:'12px 15px'}}>
    <div className=''>
    <Typography className='converge'>Student Id: 1807765</Typography>
    <Typography className='converge'>Date: 13-11-2021</Typography>
    <Typography className='converge'>Time: 12:30</Typography>
    </div>
    </Card>

    <Card style={{display:'flex', alignItems:'center', marginBottom:'15px', background:'#292929', opacity:'.9', padding:'12px 15px'}}>
    <div className=''>
    <Typography className='converge'>Student Id: 1807873</Typography>
    <Typography className='converge'>Date: 14-11-2021</Typography>
    <Typography className='converge'>Time: 14:30</Typography>
    </div>
    </Card>

    </div>
    </Card>

        </Grid>

        </Grid>
        <br />
        
      </Box>
    </Box>
  );
}

export default MSessions;