import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import first from './../../assets/js/svgs/solid/ambulance.svg';
import second from './../../assets/js/svgs/solid/address-book.svg';
import third from "./../../assets/js/svgs/solid/address-card.svg";

class Slider extends Component {
    render() {
        return(
        <div>
             <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={third}
                    alt="third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
       
  );
  
    }
    
}

    

export default Slider;