
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CarouselCardItem = ({ info, isMobile = false }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            {!isMobile ? info.map((item, index) => (
                <div key={index}>
                    <Card sx={{ minWidth: '80%', maxWidth: '90%' }}>
                        <CardMedia
                            sx={{ height: 340, width: '100%' }}
                            image={item.link}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography textAlign={'left'} variant="body2" color="text.primary" fontSize={16}>
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>

                        </CardActions>
                    </Card>
                </div>
            )) : <>
                <Card sx={{ minWidth: '100%' }}>
                    <CardMedia
                        sx={{ height: 350, width: '100%' }}
                        image={info.link}
                        title={info.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.title}
                        </Typography>
                        <Typography textAlign={'left'} variant="body2" color="text.primary">
                            {info.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </>
            }
        </div>
    );
};

export default CarouselCardItem