import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from '/public/assets/css/carousel.module.css'
export default function CarouselC({ items, itemsWidth }) {

    return (
        <Carousel autoPlay infiniteLoop>
            {items.map(info => (
                <>
                    <div>
                        <img className={styles.img_carousel} style={{width:itemsWidth}} width={itemsWidth} src={info.link} alt={info.legend} />
                        {/*<p className="legend"></p>*/}
                    </div>
                </>
            ))}

        </Carousel>
    );
}
