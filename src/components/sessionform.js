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
import ANavBar from './aplicant_dashNavbar';
import dp1 from './images/dp1.png';
import dp2 from './images/dp2.png';
import dp3 from './images/dp3.png';

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

const Sform = () => {
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

  const [age1, setAge1] = React.useState('');
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className='homebg' sx={{ display: 'flex' }}>
    <ANavBar />
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3, marginLeft: -8.4 }}>
        <DrawerHeader />

        <Grid container spacing={4}>

        <Grid item xs={12}>

        <Typography variant='h6' className='converge'>Sessions Form</Typography>
        <hr />

        </Grid>

        <Grid item xs={12}>

        <Card className="session-card">
    <div className='session-header'><Typography className="converge">Session 1</Typography></div>
    <div className='sessionf-content'>
    <Select style={{background:'black', color:'white', width:'49.5%', height:'45px', opacity:'0.8', boder:'0px', marginRight:'1%', borderRadius:'7px'}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select College</em>
          </MenuItem>
          <MenuItem value={1}>IIT Roorkee</MenuItem>
          <MenuItem value={2}>IIT Kharagpur</MenuItem>
          <MenuItem value={3}>IIT Delhi</MenuItem>
          <MenuItem value={4}>IIT Madras</MenuItem>
          <MenuItem value={5}>IIT Kanpur</MenuItem>
          <MenuItem value={6}>IIT Bombay</MenuItem>
        </Select>
    <Select style={{background:'black', color:'white', width:'49.5%', height:'45px', opacity:'0.8', boder:'0px', borderRadius:'7px'}}
          value=''
          onChange={handleChange1}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select Mentor</em>
          </MenuItem>
          <MenuItem>
          <img src={dp2} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Samarth Goyal</Typography>
    <Typography className='converge'>Academic Interest - Web Design, CyberSecurity, Product Management</Typography>
    <Typography className='converge'>Extra-Curricular - Dramatics, Dance, Football</Typography>
    </Card>
          </MenuItem>
          <MenuItem>
          <img src={dp3} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Aniket Bansal</Typography>
    <Typography className='converge'>Academic Interest - UI/UX, App Development, Data Science</Typography>
    <Typography className='converge'>Extra-Curricular - Elocution, Debate, Volleyball</Typography>
    </Card>
          </MenuItem>
          <MenuItem>
          <img src={dp1} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Ishika Singh</Typography>
    <Typography className='converge'>Academic Interest - ML, DL, AI, Product Management</Typography>
    <Typography className='converge'>Extra-Curricular - Badminton, Table Tennis, Event Management, Video Editing</Typography>
    </Card>
          </MenuItem>
        </Select>
    </div>
    </Card>

        </Grid>

        <Grid item xs={12}>

        <Card className='session-card'>
    <div className='session-header'><Typography className="converge">Session 2</Typography></div>
    <div className='sessionf-content'>
    <Select style={{background:'black', color:'white', width:'49.5%', height:'45px', opacity:'0.8', boder:'0px', marginRight:'1%', borderRadius:'7px'}}
          value=""
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select College</em>
          </MenuItem>
          <MenuItem value={1}>IIT Roorkee</MenuItem>
          <MenuItem value={2}>IIT Kharagpur</MenuItem>
          <MenuItem value={3}>IIT Delhi</MenuItem>
          <MenuItem value={4}>IIT Madras</MenuItem>
          <MenuItem value={5}>IIT Kanpur</MenuItem>
          <MenuItem value={6}>IIT Bombay</MenuItem>
        </Select>
        <Select style={{background:'black', color:'white', width:'49.5%', height:'45px', opacity:'0.8', boder:'0px', borderRadius:'7px'}}
          value=''
          onChange={handleChange1}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select Mentor</em>
          </MenuItem>
          <MenuItem>
          <img src={dp2} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Samarth Goyal</Typography>
    <Typography className='converge'>Academic Interest - Web Design, CyberSecurity, Product Management</Typography>
    <Typography className='converge'>Extra-Curricular - Dramatics, Dance, Football</Typography>
    </Card>
          </MenuItem>
          <MenuItem>
          <img src={dp3} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Aniket Bansal</Typography>
    <Typography className='converge'>Academic Interest - UI/UX, App Development, Data Science</Typography>
    <Typography className='converge'>Extra-Curricular - Elocution, Debate, Volleyball</Typography>
    </Card>
          </MenuItem>
          <MenuItem>
          <img src={dp1} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Ishika Singh</Typography>
    <Typography className='converge'>Academic Interest - ML, DL, AI, Product Management</Typography>
    <Typography className='converge'>Extra-Curricular - Badminton, Table Tennis, Event Management, Video Editing</Typography>
    </Card>
          </MenuItem>
        </Select>
    </div>
    </Card>

        </Grid>

        <Grid item xs={12}>

        <Card className='session-card'>
    <div className='session-header'><Typography className="converge">Session 3</Typography></div>
    <div className='sessionf-content'>
    <Select style={{background:'black', color:'white', width:'49.5%', height:'45px', opacity:'0.8', boder:'0px', marginRight:'1%', borderRadius:'7px'}}
          value=""
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select College</em>
          </MenuItem>
          <MenuItem value={1}>IIT Roorkee</MenuItem>
          <MenuItem value={2}>IIT Kharagpur</MenuItem>
          <MenuItem value={3}>IIT Delhi</MenuItem>
          <MenuItem value={4}>IIT Madras</MenuItem>
          <MenuItem value={5}>IIT Kanpur</MenuItem>
          <MenuItem value={6}>IIT Bombay</MenuItem>
        </Select>
    <Select style={{background:'black', color:'white', width:'49.5%', height:'45px', opacity:'0.8', boder:'0px', borderRadius:'7px'}}
          value=''
          onChange={handleChange1}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select Mentor</em>
          </MenuItem>
          <MenuItem>
          <img src={dp2} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Samarth Goyal</Typography>
    <Typography className='converge'>Academic Interest - Web Design, CyberSecurity, Product Management</Typography>
    <Typography className='converge'>Extra-Curricular - Dramatics, Dance, Football</Typography>
    </Card>
          </MenuItem>
          <MenuItem>
          <img src={dp3} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Aniket Bansal</Typography>
    <Typography className='converge'>Academic Interest - UI/UX, App Development, Data Science</Typography>
    <Typography className='converge'>Extra-Curricular - Elocution, Debate, Volleyball</Typography>
    </Card>
          </MenuItem>
          <MenuItem>
          <img src={dp1} className='img1' alt='no image' loading="lazy" />
    <Card className='upctxtcard'>
    <Typography className='converge'>Ishika Singh</Typography>
    <Typography className='converge'>Academic Interest - ML, DL, AI, Product Management</Typography>
    <Typography className='converge'>Extra-Curricular - Badminton, Table Tennis, Event Management, Video Editing</Typography>
    </Card>
          </MenuItem>
        </Select>
    </div>
    </Card>

        </Grid>

        <Grid xs={12}>
        <div style={{marginTop: '32px'}}>
        <center><Button onClick={handleOpen} variant='contained'>Confirm</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
          <br /><br />
          <Typography variant='h6'>Your Request has been confirmed... Check messages</Typography><br />
          <div>
          <Button onClick={handleClose} color='success' variant='contained' className='redeembtn'>ok</Button>
          </div>
          </center>
        </Box>
      </Modal>
      </center>
        </div>
        </Grid>

        </Grid>
        <br />
        
      </Box>
    </Box>
  );
}

export default Sform;