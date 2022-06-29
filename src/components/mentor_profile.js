import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, ListItemButton, Link, Card, Grid, CardContent } from '@mui/material';
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
import dp2 from './images/dp2.png';

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

const MProfile = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className='homebg' sx={{ display: 'flex' }}>
    <MNavBar />
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3, marginLeft: -8.4 }}>
        <DrawerHeader />

        <Grid container spacing={4}>

        <Grid item xs={12}>

        <Typography variant='h6' className='converge'>Profile</Typography>
        <hr />

        </Grid>

        <Grid item xs={12} md={6}>

        <Card className='formcard'>

        <center><img className='mentordp' src={dp2} alt='no image' loading="lazy" /></center><br />

      <Typography variant='h6' className='converge'>General Details</Typography><br />
      <Card className="Profiletxtcard">
      <Typography className='converge'>Samarth Goyal</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>9876543210</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>samarth@converge.edu</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>IIT Kharagpur</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>PAN Loop, West Medinipur</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>7654321098</Typography>
      </Card>

        </Card>

        </Grid>

        <Grid item xs={12} md={6}>

        <Card className='formcard'>
      <Typography variant='h6' className='converge'>Bank Details</Typography><br />
      <Card className="Profiletxtcard">
      <Typography className='converge'>Example Bank Name</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>EBIN000000</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>127856349812</Typography>
      </Card>

        </Card>

        </Grid>


        </Grid>
        <br />
        
      </Box>
    </Box>
  );
}

export default MProfile;