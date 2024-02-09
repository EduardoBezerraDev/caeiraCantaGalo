import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function ResponsiveMenu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate()
  const path = window.location.pathname

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const goToPage = (page) => {
    handleDrawerToggle()
    navigate(page)
  }

  const drawer = (
    <div style={{ width: '70vw', textAlign: 'center', maxHeight: '10px!important' }}>
      <List>
        <>
          <Typography style={{ fontSize: '30px!important', color: path === '/' ? '#007CE0' : 'inherit' }} fontWeight={500} onClick={() => goToPage('/')}>
            INÍCIO
          </Typography>
          <Typography style={{ fontSize: '30px!important', color: path === '/sobre' ? '#007CE0' : 'inherit' }} fontWeight={500} onClick={() => goToPage('/sobre')}>
            SOBRE NÓS
          </Typography>
          <Typography style={{ fontSize: '30px!important', color: path === '/produtos' ? '#007CE0' : 'inherit' }} fontWeight={500} onClick={() => goToPage('/produtos')}>
            PRODUTOS
          </Typography>
          <Typography style={{ fontSize: '30px!important', color: path === '/contato' ? '#007CE0' : 'inherit' }} fontWeight={500} onClick={() => goToPage('/contato')}>
            CONTATO
          </Typography>
        </>
      </List>
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='default' style={{ padding: 5 }}>
        <Toolbar>
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <React.Fragment>
              <img onClick={() => goToPage('/')} width={90} src="/assets/logo-1_transparent.png" style={{ paddingRight: 30, cursor: 'pointer' }} alt="logo da empresa" />
              <Button onClick={() => goToPage('/')} fontWeight={900} style={{ fontWeight: 700, fontFamily: 'CircularStdBook,sans-serif', fontSize: '13pt', color: path === '/' ? '#007CE0' : 'inherit' }}>
                INÍCIO
              </Button>
              <Button onClick={() => goToPage('/sobre')} fontWeight={900} style={{ fontWeight: 700, fontFamily: 'CircularStdBook,sans-serif', fontSize: '13pt', color: path === '/sobre' ? '#007CE0' : 'inherit' }}>
                SOBRE NÓS
              </Button>
              <Button onClick={() => goToPage('/produtos')} fontWeight={900} style={{ fontWeight: 700, fontFamily: 'CircularStdBook,sans-serif', fontSize: '13pt', color: path === '/produtos' ? '#007CE0' : 'inherit' }}>
                PRODUTOS
              </Button>
              <Button onClick={() => goToPage('/contato')} fontWeight={900} style={{ fontWeight: 700, fontFamily: 'CircularStdBook,sans-serif', fontSize: '13pt', color: path === '/contato' ? '#007CE0' : 'inherit' }}>
                CONTATO
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
}
