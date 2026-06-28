import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Products', path: '/crmsrch' },
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
];

const appBarStyles = {
  height: '40px',
  background: 'linear-gradient(90deg, #ffffff 0%, #f5fff5 35%, #66bb6a 70%, #2e7d32 100%)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255,255,255,0.15)',
};

export default function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="fixed" elevation={0} sx={appBarStyles}>
      <Toolbar
        sx={{
          minHeight: {
            xs: 30,
            md: 50,
            alignContent: 'center',
          },
          // px: { xs: 1.5, md: 3 },
        }}
      >
        {/* Mobile Menu */}
        <IconButton
          color="inherit"
          onClick={handleOpenNavMenu}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: '#1b5e20',
            mr: 1,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
          {navItems.map((item) => (
            <MenuItem
              key={item.path}
              onClick={() => {
                navigate(item.path);
                handleCloseNavMenu();
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>

        {/* Logo Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            gap: 1.5,
          }}
        >
          {/* Replace with your actual logo */}
          <Box
            component="img"
            src="/saido.svg"
            alt="SaiDo Core Systems"
            onClick={handleHomeClick}
            sx={{
              height: { xs: 38, md: 48 },
              width: 'auto',
              objectFit: 'contain',
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: { xs: '1.15rem', md: '1.6rem' },
                fontWeight: 800,
                lineHeight: 1,
                color: '#1b1b1b',
                letterSpacing: '.5px',
              }}
            >
              SaiDo
              <Box component="span" sx={{ color: '#2e7d32' }}>
                {' '}
                Core Systems
              </Box>
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', md: 'block' },
                  fontSize: '.72rem',
                  color: '#1b5e20',
                  letterSpacing: '2px',
                }}
              >
                {' '}
                Driven by Local Needs
              </Box>
            </Typography>

            {/* <Typography
              sx={{
                display: { xs: 'none', md: 'block' },
                fontSize: '.72rem',
                color: '#1b5e20',
                letterSpacing: '2px',
              }}
            >
              Driven by Local Needs
            </Typography> */}
          </Box>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                color: '#ffffff',
                fontWeight: 600,
                textTransform: 'none',
                px: 2,
                borderRadius: 2,

                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.12)',
                },
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
