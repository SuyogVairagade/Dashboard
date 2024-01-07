import React, { useState } from 'react';
import './Dashboard.css';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setOpenDrawer(false); // Close the side navigation on menu click
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer); // Toggle the side navigation open/close
  };

  return (
    <div className="dashboard">
      {/* Header Navigation */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Navigation */}
      <Drawer variant="temporary" anchor="left" open={openDrawer} onClose={handleDrawerToggle}>
        <List>
          <ListItem button key="Menu1" onClick={() => handleMenuClick('Menu1')}>
            <ListItemText primary="Menu1" />
          </ListItem>
          <ListItem button key="Menu2" onClick={() => handleMenuClick('Menu2')}>
            <ListItemText primary="Menu2" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div className="main-content">
        {/* Container Area */}
        <div className="container">
          {activeMenu === 'Menu1' && (
            <div className="menu1-container">
              <h2>Menu1 Container</h2>
            </div>
          )}
          {activeMenu === 'Menu2' && (
            <div className="menu2-container">
              <h2>Menu2 Container</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
