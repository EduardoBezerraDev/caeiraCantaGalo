import styles from '/public/assets/css/carousel.module.css'
import CarouselCards from '../CarouselCards'
import { soluctionsCarousel } from '../../consts/carousel'
import texts from '../../consts/texts'
const Solutions = () => {
    return (
        <section>
            <h1 className={styles.title}>{texts.solutions_home.title}</h1>
            <CarouselCards items={soluctionsCarousel} itemsWidth = '30%' />
        </section>
    )
}

export default Solutions