import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function NavDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            {['Home', 'Info', 'About'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Log Out'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    return (
        <div>
        {['menu'].map((anchor) => (
            <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
                anchor={'left'}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
}

export default NavDrawer;
