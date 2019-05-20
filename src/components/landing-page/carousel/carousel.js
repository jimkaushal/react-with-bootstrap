import React from "react";
import Slider from 'react-animated-slider';
import './carousel.scss';
import 'react-animated-slider/build/horizontal.css';
import CarouselSlide from './carousel-slide';

class Carousel extends React.Component {
    render() {
        const content = [{
            title: "Hello",
            description: "Description"
        },
        {
            title: "Hello2",
            description: "Description2"
        },
        {
            title: "Hello3",
            description: "Description3"
        }];

        return (
            <div className="carousel">
            <Slider>
                {content.map((article, index) => <div key={index} className="carousel slide">
                    <CarouselSlide />
                </div>)}
            </Slider>
            </div>
        );
    }
}
export default Carousel;