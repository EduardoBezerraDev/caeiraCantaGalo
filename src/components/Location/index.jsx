import styles from '/public/assets/css/about.module.css'
import texts from '../../consts/texts'
const Location = () => {
    return (
        <section>
            <img src="/assets/banners/products_banner.png" alt="banner de produtos" width={'100%'} />
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h4 className={styles.title}>{texts.about_home.title}</h4>
                <p className={styles.main_text}>
                    {texts.about_home.text}
                </p>
            </div>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31830.135765043015!2d-38.710972982038925!3d-4.2654909781978745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bf35275fb0efff%3A0xd1dc476e97283071!2sCaeira%20Canta%20Galo%20Extra%C3%A7%C3%A3o%20e%20Com%C3%A9rcio%20de%20Calc%C3%A1rio%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1702827035074!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </section>
    )
}

export default Location