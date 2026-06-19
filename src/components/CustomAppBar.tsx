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
import AdbIcon from '@mui/icons-material/Adb';

const navItems = ['Home', 'Products', 'Blog', 'About'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: '#160606',
        animation: 'pulseLoop 10s ease-in-out infinite',

        '@keyframes pulseLoop': {
          '0%,100%': {
            background: '#160606',
          },
          '50%': {
            background: '#2F0708',
          },
        },
      }}
    >
      <Toolbar
        sx={{
          minHeight: {
            xs: 40, // mobile (56 -> 40)
            md: 45, // desktop (64 -> 45)
          },
          px: 2,
        }}
      >
        {/* Mobile Menu */}
        <IconButton
          color="inherit"
          onClick={(e) => setAnchorElNav(e.currentTarget)}
          sx={{
            display: { xs: 'flex', md: 'none' },
            mr: 1,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={() => setAnchorElNav(null)}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item}
              onClick={() => setAnchorElNav(null)}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>

        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <AdbIcon sx={{ mr: 1, fontSize: 22 }} />

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              color: '#fff',
            }}
          >
            LOGO
          </Typography>
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            gap: 1,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              color="inherit"
              sx={{
                minWidth: 'auto',
                px: 1.5,
                py: 0.5,
                color: 'rgba(255,255,255,.75)',

                '&:hover': {
                  color: '#fff',
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}