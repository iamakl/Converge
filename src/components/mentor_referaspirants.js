import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, ListItemButton, Link, Card, Grid, CardContent, Button } from '@mui/material';
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
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MoneyIcon from '@mui/icons-material/Money';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

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

const MReferA = () => {
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

        <Grid item xs={12} md={6}>

        <Card className='refercard'>

        <Button className='referbtn1' style={{marginRight:'2rem'}} href='MentorRefer' variant='contained'>Refer Mentors</Button>
        <Button className='referbtn1' variant='contained' disabled>Refer Aspirants</Button>
        <br />
        <br />
        <Typography className='converge' variant='h5'> Refer and Earn upto Rs.XYZ for every competitive exam aspirant you can bring on to our platform </Typography>
        <br />
        <Typography className="converge" variant='h5'>Share link to:</Typography>
        <WhatsAppIcon className='sm-icons' fontSize='large' />
        <FacebookSharpIcon className='sm-icons' fontSize='large' />
        <InstagramIcon className='sm-icons' fontSize='large' />

        <br />
        <br />
        <Typography className="converge" variant='h5'>OR</Typography><br />
        <Typography className="converge" variant='h6'>Copy your unique invite code</Typography>
        <div style={{display:'flex'}}>
        <input type="text" placeholder="" className="referTextFieldboot" />
        <Button className="referbtn" variant='contained'>Copy</Button>
        </div>

        <br />
        <Typography className="converge" variant='h5'>OR</Typography><br />
        <Typography className="converge" variant='h6'>Invite using Email-ID</Typography>
        <div style={{display:'flex'}}>
        <input type="text" placeholder="" className="referTextFieldboot" />
        <Button className="referbtn" variant='contained'>Invite</Button>
        </div><br />

        </Card>

        </Grid>

        <Grid item xs={12} md={6}>

        <Card className='refercard'>

        <Typography className='converge' variant='h5'>How It Works</Typography>
        <br />
        <br />
        <div style={{display:'flex'}}>
        <GroupsSharpIcon className='refericon' />
        <div>
        <Typography className='converge'><b>Invite as many aspirants as you can.</b></Typography>
        <Typography className='converge'>Share unique invite link with students you know directly or share with your mentees to invite their friends. Get rewarded for every student who joins!</Typography>
        </div>
        </div>

        <br />
        <br />
        <div style={{display:'flex'}}>
        <MoneyIcon className='refericon' />
        <div>
        <Typography className='converge'><b>Earn upto Rs.### for each successful referral</b></Typography>
        <Typography className='converge'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummys</Typography>
        </div>
        </div>

        </Card>

        </Grid>


        </Grid>
        <br />
        
      </Box>
    </Box>
  );
}

export default MReferA;