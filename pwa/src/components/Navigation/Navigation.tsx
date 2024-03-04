import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {ReactComponent as Logo} from 'assets/logo-savart.svg';
import NavItems from 'components/Navigation/NavLinkList';
import {Link, useNavigate} from 'react-router-dom';
import BasketIcon from 'components/Navigation/BasketIcon';
import {useTranslation} from 'react-i18next';
import {routes} from 'routing/routes';
import {customTheme} from "theme/theme";

function Navigation() {
  const {t} = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigationElements = NavItems();
  const navigate = useNavigate();

  return (
    <AppBar sx={{backgroundColor: '#fff'}} position='static'>
      <Container maxWidth='xl'>
        <Box>
          <IconButton sx={{display: {md: 'none'}}}>
            <Link to={routes.HOME.path}>
              <Logo style={{height: '80px'}}/>
            </Link>
          </IconButton>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {navigationElements.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.path);
                  }}
                >
                  <Typography textAlign='center' sx={{color: '#222'}}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {xs: 'none', md: 'grid'},
              gridTemplateColumns: ' 1fr 1fr 1fr 1fr 5fr 1fr 1fr',
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
            <Button
              sx={{my: 2, mx: 2, color: '#552', borderColor: '#552'}}
              variant='outlined'
            >
              <Link to={routes.ADMIN.path} style={{
                textDecoration: "none",
                color: customTheme.palette.primary.main
              }}>
                {t('Admin')}
              </Link>
            </Button> <Button
            sx={{my: 2, mx: 2, color: '#552', borderColor: '#552'}}
            variant='outlined'
          >
            <Link to={routes.LOGIN.path} style={{
              textDecoration: "none",
              color: customTheme.palette.primary.main
            }}>
              {t('Account')}
            </Link>
          </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navigation;
