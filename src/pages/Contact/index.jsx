import styles from '/public/assets/css/contact.module.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react';
import contacts from '../../consts/contact';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const formatPhoneNumber = (phone) => {
        phone = phone.replace(/\D/g, '');
        phone = phone.replace(/(\d{2})(\d{2})(\d{4,5})(\d{4})/, '+$1 ($2) $3-$4');
        return phone;
    }

    const sendMessageToWhatsapp = ({ message, name }) => {
        let link = `https://api.whatsapp.com/send?phone=${encodeURIComponent(contacts.sac)}&text=${encodeURIComponent(contacts.whatsappContactMounted({ name, message }))}`
        window.open(link, '_blank');
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessageToWhatsapp({ name: formData.name, message: formData.message })
        console.log('Dados do formulário:', formData);
    };


    return (
        <section style={{ marginTop: '15vh', textAlign: 'center', padding: 20, }}>
            <section>
                <Typography variant="h4" className={styles.title}>Fale Conosco</Typography>
                <Typography gutterBottom variant="p" component="div" textAlign={'left'} style={{ marginTop: '2vh' }}>
                    Em busca de detalhes sobre nossos serviços, resolução de questionamentos ou simplesmente quer expressar suas ideias, críticas construtivas ou elogios? Utilize o formulário fornecido para compartilhar suas informações. Nossa equipe dedicada examinará sua correspondência com atenção e responderá de maneira ágil.
                </Typography>
            </section>

            <section style={{ marginTop: '5vh' }}>
                <div className={styles.map_container}>
                    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31830.135765043015!2d-38.710972982038925!3d-4.2654909781978745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bf35275fb0efff%3A0xd1dc476e97283071!2sCaeira%20Canta%20Galo%20Extra%C3%A7%C3%A3o%20e%20Com%C3%A9rcio%20de%20Calc%C3%A1rio%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1702827035074!5m2!1spt-BR!2sbr" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <img src="/assets/contact/factory.jpg" alt="imagem da fábrica" className={styles.img} />
                </div>
            </section>

            <section className={styles.container_contact} style={{ marginTop: '5vh', display: 'flex' }}>
                <div className={styles.container_contact_form}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            label="Nome"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <TextField
                            required
                            label="Mensagem"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <Button type="submit" variant="outlined" color="primary" fullWidth >
                            Enviar Mensagem
                        </Button>
                    </form>
                </div>

                <div className={styles.links_container} >
                    <div>
                        <div>
                            <Typography variant="span" className={styles.title}>Contato de vendas: </Typography>
                            <Button type='button' variant='contained' style={{ borderRadius: '15px' }}>
                                <a style={{ color: 'white', textDecoration: 'none' }} href={`tel:+${contacts.whatsappBuyInfo.number}`}>{formatPhoneNumber(contacts.whatsappBuyInfo.number)}</a>
                            </Button>
                        </div>
                        <div style={{ marginTop: '2vh' }}>
                            <Typography variant="span" className={styles.title}>E-Mail: </Typography>
                            <Button type='button' variant='contained' style={{ borderRadius: '15px' }}>
                                <a style={{ color: 'white', textDecoration: 'none', textTransform: 'initial' }} href={`mailto:${contacts.email}`}>{contacts.email}</a>
                            </Button>
                        </div>
                        <div style={{ marginTop: '2vh' }}>
                            <Typography variant="span" className={styles.title}>WhatsApp: </Typography>
                            <Button type='button' variant='contained' color='success' style={{ borderRadius: '15px' }}>
                                <img width={15} src="https://i.pinimg.com/originals/25/42/9b/25429b779b07add131dada25ff0830e5.png" alt="icone whatsApp" />
                                <a style={{ color: 'white', textDecoration: 'none', marginLeft: 10 }} href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(contacts.whatsappBuyInfo.number)}`}>{formatPhoneNumber(contacts.whatsappBuyInfo.number)}</a>
                            </Button>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Contact