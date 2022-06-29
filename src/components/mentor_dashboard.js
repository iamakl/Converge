import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, ListItemButton, Link, Card, Grid, Button, Accordion, AccordionSummary, AccordionDetails, Tabs, Tab } from '@mui/material';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='homebg' sx={{ display: 'flex' }}>
    <MNavBar />
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, px: 4, py: 3, marginLeft: -8.4 }}>
        <DrawerHeader />

        <Grid container spacing={4}>

        <Grid item xs={8}>
        <Card style={{padding:'18px 18px', background:'#212020'}}>
        <Grid container spacing={3}>

        <Grid item xs={4}>
        <Card>
        <div className='session-header'><Typography className='converge'>Student Rating</Typography></div>
        <div style={{background:'#292929', height:'215px'}} className='dashboard-content'>
        <center>
        <br />
        <Typography variant='h4' className='converge'>4.8/5</Typography>
        <br />
        <p className='converge'>(Excellent)</p>
        </center>
        </div>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
        <div className='session-header'><Typography className='converge'>Overall Feedback</Typography></div>
        <div style={{background:'#292929', height:'215px'}} className='dashboard-content'>
        <center>
        <br />
        <Typography variant='h4' className='converge'>4.8/5</Typography>
        <br />
        <p className='converge'>(Excellent)</p>
        </center>
        </div>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
        <div className='session-header'><Typography className='converge'>Referral Count</Typography></div>
        <div style={{background:'#292929', height:'215px'}} className='dashboard-content'>
        <center>
        <br />
        <Typography variant='h4' className='converge'>28</Typography>
        <br />
        <p className='converge'>Successful Referral</p>
        </center>
        </div>
        </Card>
        </Grid>

        </Grid>

        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
        <div className='session-header'><Typography className='converge'>Upcoming Sessions</Typography></div>
        <div className='dashboard-content'>
        <br />
        <Typography variant='h6' className='converge'>Date - 11th Nov, 4PM - 5PM</Typography>
        <Typography variant='h6' className='converge'>Allocated</Typography>
        <br />
        <br />
        <center>
        <Button className='yellowbtn' variant='contained'>Start Session</Button>
        </center>
        </div>
        </Card>
        </Grid>

        <Grid item xs={5}>
        <Card>
        <div className='session-header'><Typography className='converge'>Notifications</Typography></div>
        <div style={{paddingTop:'0'}} className='dashboard-content'>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', position:'sticky', top:'0', zIndex:'2', background:'#212020' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ width:'50%', color:'white' }} label="From Converge" {...a11yProps(0)} />
          <Tab sx={{ width:'50%', color:'white' }} label="From Aspirants" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel style={{borderRadius:'5px', background:'#292929', opacity:'.9', margin:'2px 0', boxShadow:'0px 1px 2px -1px maroon'}} value={value} index={0}>
        <Card style={{background:'#212020', opacity:'.9', padding:'10px 13px', marginBottom:'10px'}}>
        <Typography className='converge'>Some message from our team...</Typography>
        </Card>
        <Card style={{background:'#212020', opacity:'.9', padding:'10px 13px', marginBottom:'10px'}}>
        <Typography className='converge'>Some message from our team...</Typography>
        </Card>
        <Card style={{background:'#212020', opacity:'.9', padding:'10px 13px', marginBottom:'10px'}}>
        <Typography className='converge'>Some message from our team...</Typography>
        </Card>
        <Card style={{background:'#212020', opacity:'.9', padding:'10px 13px', marginBottom:'10px'}}>
        <Typography className='converge'>Some message from our team...</Typography>
        </Card>
      </TabPanel>
      <TabPanel style={{borderRadius:'5px', background:'#292929', opacity:'.9', margin:'2px 0', boxShadow:'0px 1px 2px -1px maroon'}} value={value} index={1}>
        
        <center><NotificationsActiveIcon className='converge' />
        <Typography className='converge'>No important notification from aspirants</Typography></center>

      </TabPanel>
    </Box>
        </div>
        </Card>
        </Grid>

        <Grid item xs={3}>
        <Card>
        <div className='session-header'><Typography className='converge'>Mini Calender</Typography></div>
        <div className='dashboard-content'>
        <Card style={{background:'#292929', opacity:'.9', padding:'5px 8px', marginBottom:'10px'}}>
        <Typography className='converge'>11 Nov, 5 Session</Typography>
        <Typography className='converge'>4PM to 10PM</Typography>
        </Card>
        <Card style={{background:'#292929', opacity:'.9', padding:'5px 8px', marginBottom:'10px'}}>
        <Typography className='converge'>12 Nov, 5 Session</Typography>
        <Typography className='converge'>4PM to 10PM</Typography>
        </Card>
        <Card style={{background:'#292929', opacity:'.9', padding:'5px 8px', marginBottom:'10px'}}>
        <Typography className='converge'>13 Nov, 5 Session</Typography>
        <Typography className='converge'>4PM to 10PM</Typography>
        </Card>
        <Card style={{background:'#292929', opacity:'.9', padding:'5px 8px', marginBottom:'10px'}}>
        <Typography className='converge'>14 Nov, 5 Session</Typography>
        <Typography className='converge'>4PM to 10PM</Typography>
        </Card>
        </div>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
        <div className='session-header'><Typography className='converge'>Earnings</Typography></div>
        <div className='dashboard-content'>
        <Card style={{background:'#292929', opacity:'.9', padding:'12.5px 15px', display:'flex', marginBottom:'10px'}}>
        <Typography className='converge' style={{flex: 1}}>Allocated Sessions</Typography><Typography className='converge'>20</Typography>
        </Card>
        <Card style={{background:'#292929', opacity:'.9', padding:'12.5px 15px', display:'flex', marginBottom:'10px'}}>
        <Typography className='converge' style={{flex: 1}}>Completed Sessions</Typography><Typography className='converge'>17</Typography>
        </Card>
        <Card style={{background:'#292929', opacity:'.9', padding:'12.5px 15px', display:'flex', marginBottom:'10px'}}>
        <Typography className='converge' style={{flex: 1}}>Cancelled Sessions</Typography><Typography className='converge'>3</Typography>
        </Card>

         <Accordion style={{background:'#292929', borderRadius:'5px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="converge" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{flex:'1'}} className='converge'>Total</Typography>
          <Typography className='converge'>775</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='converge'>
          Ammount Break-up - (17*50) + (3*(-25))
          </Typography>
        </AccordionDetails>
      </Accordion>

        </div>
        </Card>
        </Grid>

        </Grid>
        <br />
        
      </Box>
    </Box>
  );
}

export default Dashboard;