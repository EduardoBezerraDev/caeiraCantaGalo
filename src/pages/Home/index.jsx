import { mainCarousel } from "../../consts/carousel/index.js"
import Solutions from "../../components/Solutions/index.jsx"
import Location from "../../components/Location/index.jsx"
import CarouselC from "../../components/Carousel/index.jsx"
import About from "../../components/About/index.jsx"
import Info from "../../components/Info/index.jsx"
const Home = () => {
    return (
        <div style={{marginTop: '15vh'}}>
            <section style={{ marginTop: 20, padding: 20 }}>
                <CarouselC items={mainCarousel} itemsWidth={'100%'} />
                <Info/>
                <Solutions />
                <Location />
                <About />
            </section>
        </div>
    )
}

export default Home