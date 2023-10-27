import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import profilePicture from '../assets/images/profile.jpg';
import { useNavigate } from 'react-router-dom';
import resume from '../assets/pdf/emd-portfolio.pdf'

//@TODO make variant where resume link is different based on if the user followed the link from my tech solutions resume or my web dev resume

const domWindow = window;

interface Props {
    window?: () => Window;
}
const drawerWidth = 240;
const navItems = ['Home', 'Projects', 'Resume', 'About'];

const Layout = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ my: 2 }}>
            Emily Dorgan
        </Typography>
        <Divider />
        <List>
        {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton 
                    key={item}  
                    sx={{ textAlign: 'center' }}
                    onClick={() => {
                        switch (item) {
                            case 'Home':
                                navigate('/');
                                break;
                            case 'Resume':
                                domWindow.open(resume);
                                break;
                            default: 
                            navigate(`/${item.toLocaleLowerCase()}`);
                        }
                    }}
                >
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar component="nav">
        <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' }}}
            >
            <MenuIcon sx={{fontSize: '2em'}} />
            </IconButton>
            <Avatar 
                alt="Emily Dorgan" 
                src={profilePicture} 
                sx={{width: '100px', height: '100px', m: {lg: '10px 0px 10px 0%', sm: '10px 0px 10px 30%', xs: '10px 0px 10px 15%',}}}
                onClick={()=> navigate('/')}
                style={{ cursor: 'pointer' }}
            />
            <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { md: 'none', sm: 'none', xs: 'none', lg: 'block' }, fontSize: 40}}
            >
            Emily Dorgan
            </Typography>
            <Box sx={{ display: { md: 'none', sm: 'none', xs: 'none', lg: 'block' } }}>
            {navItems.map((item) => (
                <Button 
                    key={item} 
                    sx={{ color: '#fff' }}
                    onClick={() => {
                        switch (item) {
                            case 'Home':
                                navigate('/');
                                break;
                            case 'Resume':
                                domWindow.open(resume);
                                break;
                            default: 
                            navigate(`/${item.toLocaleLowerCase()}`);
                        }
                    }}
                >
                {item}
                </Button>
            ))}
            </Box>
        </Toolbar>
        </AppBar>
        <nav>
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true,
            }}
            sx={{
            display: { md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>
        </nav>
    </Box>
    );
}

export default Layout;
