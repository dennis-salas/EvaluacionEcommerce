import React from 'react'
import { Carousel } from 'react-bootstrap';

export const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block imagen-Banner"
                        src="https://i.ibb.co/gVqs9CG/pexels-ihsan-aditya-1445696-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imagen-Banner"
                        src="https://i.ibb.co/t3P6Nqw/pexels-the-lazy-artist-gallery-1123985-1.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block imagen-Banner"
                        src="https://i.ibb.co/37GbRYV/pexels-taryn-elliott-7866282-1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
