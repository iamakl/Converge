import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, ListItemButton, Link, Collapse } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ClearIcon from '@mui/icons-material/Clear';
import FlagIcon from '@mui/icons-material/Flag';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CallIcon from '@mui/icons-material/Call';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonIcon from '@mui/icons-material/Person';

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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='NavBar' position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{flex:'1'}} variant="h6" noWrap component="div">Welcome, Mentor</Typography>
          {/*<Typography variant="h6" noWrap component="div">WingMan<sup style={{fontSize:'13px'}}>TM</sup></Typography>*/}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{background:'#212020', opacity:'.9'}}><Typography className='logotext' variant="h6" noWrap component="div">
            <Link className='tdnone' href='/'>CONVERGE</Link>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className='tdnone' /> : <ChevronLeftIcon style={{marginLeft:'16px'}} className='tdnone' />}
          </IconButton>
        </DrawerHeader>
        <Divider style={{borderColor:'black'}} />
        <List style={{background:'#212020', opacity:'.9', height:'100vh'}}>
        <Link className='tdnone' href='Dashboard'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SpeedIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='#'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkAddOutlinedIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='MentorSessions'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FeaturedPlayListOutlinedIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Sessions" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='#'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CardGiftcardIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Rewards" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='MentorRefer'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupAddIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Referr and Earn" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='MentorWingMan'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LiveHelpIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText>Wingman</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='#'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ImportContactsIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Induction Material" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='#'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ClearIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Cancellations" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='MentorProfile'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='#'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider style={{borderColor:'black'}} />
        <Link className='tdnone' href='#'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FlagIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Report an Issue" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className='tdnone' href='#'>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CallIcon className='tdnone' />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box>
    </Box>
  );
}
