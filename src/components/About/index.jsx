import texts from "../../consts/texts"
import styles from "/public/assets/css/aboutUs.module.css"
import video from '/assets/aboutUs/aboutUs.mp4'

const About = () => {
    return (
        <section style={{ textAlign: 'center' }}>
            <h5 className={styles.subtitle}>{texts.aboutUs.text}</h5>
            <h4 className={styles.title}>
                {texts.aboutUs.title}
            </h4>
            <p>
                <video  className={styles.video} controls >
                    <source src={video} type="video/mp4" />
                </video>
            </p>
        </section>
    )
}

export default About