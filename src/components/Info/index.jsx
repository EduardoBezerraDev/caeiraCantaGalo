import styles from '/public/assets/css/info.module.css'
import texts from '../../consts/texts'
import info from '../../consts/info'
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@material-ui/styles';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
    tooltip: {
        backgroundColor: '#fff',
        color: '#333',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        fontSize: 14,
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const Info = () => {
    const [open, setOpen] = useState(false);
    const [textInfo, setTextInfo] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();

    const handleTextInfo = (text) => {
        setTextInfo(text);
        handleOpen()
    }
    return (
        <section>
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h4 className={styles.title}>{texts.info.title}</h4>
                <Grid container spacing={2} justifyContent="center">
                    {info.info.map((img, index) => (
                        <Grid item xs={6} sm={4} md={4} key={index} onClick={() => { handleTextInfo(img) }}>
                            <Tooltip
                                title="Clique para ler sobre"
                                arrow
                                classes={{ tooltip: classes.tooltip }} // Aplicando as classes de estilo ao Tooltip
                            >
                                <div style={{ textAlign: 'center' }} className={styles.overlay}>
                                    <img
                                        src={img.link}
                                        alt={img.alt}
                                        style={{ maxWidth: '90%', height: 'auto' }}
                                    />
                                </div>
                            </Tooltip>
                        </Grid>
                    ))}
                </Grid>
            </div>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h3">
                            <br />
                            <CloseIcon style={{ float: 'right', cursor:'pointer'  }} onClick={handleClose} />
                            <br />
                            {textInfo.title}
                        </Typography>
                        <Typography sx={{ mt: 2 }} style={{ overflow: 'auto' }}>
                            <div style={{ fontSize: 12.5 }} dangerouslySetInnerHTML={{ __html: `${textInfo.text}` }} />
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </section >
    )
}

export default Info