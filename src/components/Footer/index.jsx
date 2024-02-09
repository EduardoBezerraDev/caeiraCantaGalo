import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Instagram from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


function Footer() {
    const footerStyle = {
        padding: '20px',
        marginTop: 'auto',
        backgroundColor: '#353b48',
    };

    return (
        <footer style={footerStyle}>
            <Container maxWidth="sm">
                <Typography variant="h5" align="center" color="white">
                    Conheça-nos
                </Typography>
                <Typography variant="body2" align="center" color="white">
                    Rodovia Brunilo Jacó, s/n, em Acarape - CE, CEP 62785-000.
                </Typography>
                <Typography variant="h5" align="center" color="white">
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>

                    <a href="https://api.whatsapp.com/send?phone=5585981409245">
                        <IconButton aria-label="Whatsapp">
                            <WhatsappIcon style={{ color: 'whitesmoke' }} />
                        </IconButton>
                    </a>
                    <a href="https://www.instagram.com/caeiracantagalo1977/">
                        <IconButton aria-label="Instagram">
                            <Instagram style={{ color: 'whitesmoke' }} />
                        </IconButton>
                    </a>
                    <a href="tel:+5585981409245">
                        <IconButton aria-label="Telefone">
                            <ContactPhoneIcon style={{ color: 'whitesmoke' }} />
                        </IconButton>
                    </a>

                </div>
            </Container>
        </footer>
    );
}

export default Footer;
