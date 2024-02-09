import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { soluctionsCarousel } from '../../consts/carousel'
import Button from '@mui/material/Button';
import styles from '/public/assets/css/products.module.css';
import contacts from '../../consts/contact';
const Products = () => {

    const sendMessageToWhatsapp = (product) => {
        let link = `https://api.whatsapp.com/send?phone=${encodeURIComponent(contacts.whatsappBuyInfo.number)}&text=${encodeURIComponent(contacts.whatsappBuyMounted(product))}`
        window.open(link, '_blank');
    }

    return (

        <section style={{ marginTop: '15vh', textAlign: 'center', padding: 20 }}>
            <Typography gutterBottom variant="h1" fontSize={25} className={styles.title}>
                Conheça nossos produtos
            </Typography>
            <div className={styles.section_container} >
                {soluctionsCarousel.map((info, key) => (
                    <Card key={key} className={styles.card} sx={{ maxWidth: 358 }}>
                        <CardMedia
                            style={{ backgroundImage: `url(${info.link})`, backgroundSize: 'cover' }}
                            sx={{ height: 300 }}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="div" textAlign={'left'}>
                                {info.description}
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }} >
                            <Button variant='contained' onClick={() => { sendMessageToWhatsapp(info.title) }} size="small">
                                <img width={20} src="https://i.pinimg.com/originals/25/42/9b/25429b779b07add131dada25ff0830e5.png" alt="icone whatsApp" />

                                <span style={{ marginLeft: 10, marginTop: 4 }}>Mais Informações desse produto</span>
                            </Button>
                        </CardActions>
                    </Card>

                ))}
            </div>

        </section>
    )
}

export default Products