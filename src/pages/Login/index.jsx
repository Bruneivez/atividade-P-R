import React, { useState } from 'react';
import Slider from 'react-slick';
import { TextField, Button, Typography, Grid, Paper, Box, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Login:', login);
        console.log('Password:', password);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const ads = [
        { img: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDJ8fGFkdmVydGlzaW5nfGVufDB8fHx8MTY4NTYxMTA3N3ww&ixlib=rb-1.2.1&q=80&w=1080', alt: 'Ad 1' },
        { img: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDN8fGFkdmVydGlzaW5nfGVufDB8fHx8MTY4NTYxMTA3N3ww&ixlib=rb-1.2.1&q=80&w=1080', alt: 'Ad 2' },
        { img: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDR8fGFkdmVydGlzaW5nfGVufDB8fHx8MTY4NTYxMTA3N3ww&ixlib=rb-1.2.1&q=80&w=1080', alt: 'Ad 3' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Login
                        </Typography>
                        <IconButton color="inherit" onClick={handleThemeChange}>
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid container justifyContent="center" style={{ flexGrow: 1, alignItems: 'center' }}>
                    <Grid item xs={11} sm={8} md={4}>
                        <Paper elevation={3} style={{ padding: '2em' }}>
                            <Box mb={3}>
                                <Slider {...settings}>
                                    {ads.map((ad, index) => (
                                        <div key={index}>
                                            <img 
                                                src={ad.img} 
                                                alt={ad.alt} 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '200px', 
                                                    objectFit: 'cover', 
                                                    borderRadius: '8px' 
                                                }} 
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </Box>
                            <Typography variant="h5" align="center" gutterBottom>
                                Login
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    id="login_nome"
                                    label="Login"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    required
                                />
                                <TextField
                                    id="password"
                                    label="Senha"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ marginTop: '1em' }}
                                >
                                    Entrar
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
                <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.background.paper }}>
                    <Container maxWidth="sm">
                        <Typography variant="body1" color="textPrimary">
                            Projeto desenvolvido por Bruno H. Cachali.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            © 2024 Todos os direitos reservados.
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Login;
