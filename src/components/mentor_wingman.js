import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, ListItemButton, Link, Card, Grid} from '@mui/material';
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
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import HelpIcon from '@mui/icons-material/Help';

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

const MWingman = () => {
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

        <Card className='formcard'>

        <center>
        <Typography className='logotext' variant='h4'>Wingman</Typography>
        </center><br />
        <Grid container spacing={4}>
        
        <Grid item xs={12} md={4} style={{display:'flex'}}>
        <PeopleAltSharpIcon style={{marginRight:'1rem'}} className='converge' fontSize='large' />
        <Typography className='converge'>Connect with dedicated WingMan</Typography>
        </Grid>

        <Grid item xs={12} md={4} style={{display:'flex'}}>
        <AccessTimeFilledIcon style={{marginRight:'1rem'}} className='converge' fontSize='large' />
        <Typography className='converge'>Get Immediate Assistance</Typography>
        </Grid>

        <Grid item xs={12} md={4} style={{display:'flex'}}>
        <HelpIcon style={{marginRight:'1rem'}} className='converge' fontSize='large' />
        <Typography className='converge'>Clear every doubt you can possibly have</Typography>
        </Grid>

        </Grid><br /><br />

        </Card>

        </Grid>

        <Grid item xs={12}>

        <Card className='formcard'>
      <Card className="Profiletxtcard">
      <Typography className='converge'>Faq</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>Faq</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>Faq</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>Faq</Typography>
      </Card>
      <Card className="Profiletxtcard">
      <Typography className='converge'>Faq</Typography>
      </Card>

        </Card>

        </Grid>


        </Grid>
        <br />
        
      </Box>
    </Box>
  );
}

export default MWingman;