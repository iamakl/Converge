import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, ListItemButton, Link, Card, Grid, Button, Modal } from '@mui/material';
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
import ANavBar from './aplicant_dashNavbar';

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

const NewBooking = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className='homebg' sx={{ display: 'flex' }}>
    <ANavBar />
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3, marginLeft: -8.4 }}>
        <DrawerHeader />

        <Typography variant='h6' className='converge'>New Booking</Typography>
        <hr />

        <Grid className='Bookingcard' container spacing={4}>

        <Grid item xs={12}>

        </Grid>

        <Grid item xs={12} md={4}>

        <label class="labl">
    <input type="radio" name="radioname" value="one_value" />
    <Card className='Aformcard'>
      <center><br />
      <Typography variant='h4'>SILVER</Typography><br />
      <Typography variant='h3'>750</Typography><br />
      <Typography variant='h5'>3 Sessions</Typography><br />
      <Typography variant='h5'>Voice and Video Call </Typography><br />
      </center>
    </Card>
</label>
        </Grid>

        <Grid item xs={12} md={4}>

        <label class="labl">  
    <input type="radio" name="radioname" value="another" />
    <Card className='Aformcard'>
      <center><br />
      <Typography variant='h4'>GOLD</Typography><br />
      <Typography variant='h3'>1050</Typography><br />
      <Typography variant='h5'>5 Sessions</Typography><br />
      <Typography variant='h5'>Voice and Video Call</Typography><br />
      <Typography variant='h5'>Save upto 20% per session</Typography><br />
      </center>
      </Card>
</label>

        </Grid>

        <Grid item xs={12} md={4}>

        <label class="labl">
    <input type="radio" name="radioname" value="another1" />
    <Card className='Aformcard'>
      <center><br />
      <Typography variant='h4'>PLATINUM</Typography><br />
      <Typography variant='h3'>1400</Typography><br />
      <Typography variant='h5'>8 Sessions</Typography><br />
      <Typography variant='h5'>Voice and Video Call</Typography><br />
      <Typography variant='h5'>Save upto 30% per session</Typography><br />
      </center>
      </Card>
</label>

        </Grid>

        <Grid item xs={12}>
      <center>
      <Button onClick={handleOpen} className='paybtn' size="large" variant="contained">
          PAY FOR PACKAGE
        </Button>
        <br />
        <br />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
          <Button href='SessionForm' color='primary' className='redeembtn' variant='contained'>Pay</Button><br /><br />
          <Typography variant='h6'>or</Typography><br />
          <div>
          <input placeholder='Coupon Code' className='modalTextFieldboot' type='text' />
          <Button color='success' variant='contained' className='redeembtn'>Redeem</Button>
          </div>
          </center>
        </Box>
      </Modal>
      </center>
      </Grid>

        </Grid>
        <br />
        
      </Box>
    </Box>
  );
}

export default NewBooking;