import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: 500}}
      src="https://image.freepik.com/free-photo/mum-making-baby-massage-mother-massaging-infant-bare-foot-preventive-massage-newborn-mommy-stroking-baby-s-feet-with-both-hands-light-background_176532-13965.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>30% off for all of our products</h1>
      <p>we are offering for the New Year 2022.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height: 500}}
      src="https://image.freepik.com/free-photo/making-massage-child-s-foot_186202-155.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className='text-danger'>
    <h1>30% off for all of our products</h1>
      <p>we are offering for the New Year 2022.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: 500}}
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/mother-massaging-newborn-baby_186202-227.jpg?size=338&ext=jpg"
      alt="Third slide"
    />

    <Carousel.Caption className='text-danger'>
    <h1>30% off for all of our products</h1>
      <p>we are offering for the New Year 2022.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Banner;
