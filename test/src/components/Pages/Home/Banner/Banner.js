import React from 'react';

const Banner = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide pt-5 pt-lg-0"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://image.freepik.com/free-photo/making-massage-child-s-foot_186202-155.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://image.freepik.com/free-photo/mother-massaging-newborn-baby_186202-227.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/mother-massaging-back-baby_186202-230.jpg?size=338&ext=jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
