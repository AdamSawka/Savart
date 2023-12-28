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
import logo from 'assets/logo.png';
import NavItems from 'components/Navigation/NavLinkList';
import { useNavigate } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useTranslation } from 'react-i18next';

interface Props {
  navVisible: boolean;
  setNavVisible: (value: boolean) => void;
  toggleNavVisibility: () => void;
  NavLinksList: any;
}

function Navigation({
  navVisible,
  setNavVisible,
  toggleNavVisibility,
  NavLinksList,
}: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const { t } = useTranslation();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigationElements = NavItems();
  const navigate = useNavigate();

  return (
    <AppBar sx={{ backgroundColor: '#fff' }} position='static'>
      <Container maxWidth='xl'>
        <Box>
          <IconButton sx={{ display: { md: 'none' } }}>
            <Box
              component='img'
              style={{ height: '32px', display: 'none' }}
              alt='logo Savart'
              src={logo}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
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
                  <Typography textAlign='center' sx={{ color: '#222' }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginLeft: '100px',
              justifyContent: 'space-between',
            }}
          >
            <Button className='logo-button'>
              <Box
                component='img'
                style={{ height: '60px' }}
                alt='logo Savart'
                src={logo}
              />
            </Button>
            <Box sx={{ display: 'flex' }}>
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
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button sx={{ border: '1px solid rgba(50,50,50,0.3)', px: 5 }}>
                {t('Basket')}
                <ShoppingBasketIcon
                  sx={{ color: 'black', marginLeft: '15px' }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navigation;
