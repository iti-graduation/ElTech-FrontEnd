import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FeedIcon from '@mui/icons-material/Feed';
import HomeIcon from '@mui/icons-material/Home';
import TokenIcon from '@mui/icons-material/Token';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NavBar from './Navbar';
import PostsDashboard from '../../components/Dashboard/Posts/PostsDashboard';
import Home from '../../components/Dashboard/Home/DashboardHome';
import CategoriesDashboard from '../../components/Dashboard/Categories/CategoriesDashboard';



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
    width: `calc(${theme.spacing(8)} + 1px)`,
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
  const [selectedItem, setSelectedItem] = React.useState('Home'); // State to track the selected item

  const renderContent = () => {
    switch (selectedItem) {
        case 'Home':
        return (
            <Home/>
        );
        case 'Category':
        return (
            <CategoriesDashboard/>
        );
        case 'Products':
        return (
            <Typography>
            Content for Products
            </Typography>
        );
        case 'Feed':
        return (
            <PostsDashboard />
        );
        case 'Tokens':
        return (
            <Typography>
            Content for Tokens
            </Typography>
        );
        case 'Users':
        return (
            <Typography>
            Content for Users
            </Typography>
        );
      default:
        return (
          <Typography>
            Default Content
          </Typography>
        );
    }
  };

  return (
    <>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{backgroundColor:"blue"}} >
        <DrawerHeader >
          <IconButton onClick={()=>setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Paper sx={{ backgroundColor: '', height: '100vh', overflow: 'auto'}}>
        <List>
          {['Home', 'Category', 'Products', 'Feed','Orders'].map((text) => (
            <ListItem
              sx={{color:"black"}}
              key={text}
              disablePadding
              onClick={() => setSelectedItem(text)} // Set selected item onClick
            >
              <ListItemButton>
                <ListItemIcon sx={{color:"black"}}>
                  {text === 'Home' && <HomeIcon />}
                  {text === 'Category' && <CategoryIcon />}
                  {text === 'Products' && <ProductionQuantityLimitsIcon />}
                  {text === 'Feed' && <FeedIcon />}
                  {text === 'Orders' && <ReceiptLongIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Tokens', 'Users'].map((text) => (
            <ListItem
              sx={{color:"black"}}
              key={text}
              disablePadding
              onClick={() => setSelectedItem(text)} // Set selected item onClick
            >
              <ListItemButton>
                <ListItemIcon sx={{color:"black"}}>
                  {text === 'Tokens' && <TokenIcon />}
                  {text === 'Users' && <GroupIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Paper>
      </Drawer>
      <div style={{display:"flex",flexDirection:"column",height:"100%",width:"100%"}}>
      <NavBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , top:"0px"}}>
        {renderContent()}
      </Box></div>
    </Box>
    </>
  );
}