import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {ReactComponent as Logo} from 'assets/logo-savart.svg';
import NavItems from 'components/Navigation/NavLinkList';
import {Link, useNavigate} from 'react-router-dom';
import {routes} from 'routing/routes';
import BasketIcon from "components/Navigation/BasketIcon";
import SearchInput from "components/Navigation/SearchInput";
import {useState} from "react";
import {Drawer, ListItem} from "@mui/material";

function Navigation() {

  const [navOpen, setNavOpen] = useState(false);
  const handleOpenNavMenu = () => {
    console.log('fsdf');
    setNavOpen(true);
  };
  const handleCloseNavMenu = () => {
    setNavOpen(false);
  };
  const navigationElements = NavItems();
  const navigate = useNavigate();

  return (
    <AppBar sx={{backgroundColor: '#fff'}} position='static'>
      <Container maxWidth='xl'>
        <Box className='flex-row-reverse' sx={{display:"flex"}} >
          <IconButton sx={{display: {md: 'none'}}}>
            <Link to={routes.HOME.path}>
              <Logo style={{height: '80px'}}/>
            </Link>
          </IconButton>
          <Box id='hamburger-menu' sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <Button
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              className='color-black z-1'
            >
              <MenuIcon/>
            </Button>
            <Drawer
              id='menu-appbar'
              open={navOpen}
              onClose={handleCloseNavMenu}
            >
              {navigationElements.map((page, index) => (
                <ListItem
                  sx={{width:"200px"}}
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.path);
                  }}
                >
                  <Typography textAlign='center' sx={{color: '#222'}}>
                    {page.title}
                  </Typography>
                </ListItem>
              ))}
            </Drawer>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {xs: 'none', md: 'grid'},
              gridTemplateColumns: ' 1fr 1fr 1fr 1fr 5fr 1fr',
              gridGap: '10px',
              mb: 1,
              pl: 4,
              position: 'fixed',
              backgroundColor: 'white',
              width: '100%',
              zIndex: 4,
              left: 0,
            }}
          >
            <Link to={routes.HOME.path}>
              <Logo style={{height: '80px'}}/>
            </Link>
            {navigationElements.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}
                sx={{
                  my: 2,
                  color: '#222',
                  display: 'block',
                  mx: 5,
                  fontSize: '16px',
                }}
              >
                {page.title}
              </Button>
            ))}
            <BasketIcon/>
            <SearchInput/>
            <Box/>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )

}

export default Navigation;
