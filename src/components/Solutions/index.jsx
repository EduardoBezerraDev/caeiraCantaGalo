import styles from '/public/assets/css/carousel.module.css'
import CarouselCards from '../CarouselCards'
import { soluctionsCarousel } from '../../consts/carousel'
import texts from '../../consts/texts'
const Solutions = () => {
    return (
        <section style={{marginTop: 30}}>
            <img src="/assets/banners/1977_banner.png" alt="banner de produtos" width={'100%'} />
            <h1 className={styles.title}>{texts.solutions_home.title}</h1>
            <CarouselCards items={soluctionsCarousel} itemsWidth = '30%' />
        </section>
    )
}

export default Solutions