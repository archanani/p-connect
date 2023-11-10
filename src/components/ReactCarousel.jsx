import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ReactCarousel.css'

export default function ReactCarousel(){
    return(
        <div className="carousel">
            <Carousel autoPlay infiniteLoop width='50%'>
            <div>
                    <img src="src\\images\\IMG-7.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="src\\images\\IMG-6.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="src\\images\\IMG-4.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="src\\images\\IMG-8.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}