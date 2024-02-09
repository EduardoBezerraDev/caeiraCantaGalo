import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import CarouselCardItem from '../CarouselCardItem';


export default function CarouselCards({ items, itemsWidth }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    let newItems = []
    let newData = [...items];
    if (!isMobile) {
        while (newData.length > 0) newItems.push(newData.splice(0, 3));
    } else {
        newItems = items
    }

    return (
        <Carousel autoPlay infiniteLoop interval={20000}>
            {newItems.map(info => (
                <>
                    <CarouselCardItem info={info} isMobile={isMobile} />
                </>

            ))}

        </Carousel>
    );
}
