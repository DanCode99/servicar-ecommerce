/* Import Bootstrap CSS */
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import truck1 from "../../images/truck1.webp";
import truck2 from "../../images/truck2.webp";
import truck3 from "../../images/truck3.webp";

const Carousel = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Find the next button and trigger click event
      document.querySelector("#carouselExampleIndicators .carousel-control-next").click();
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={truck1} className="d-block" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={truck2} className="d-block" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={truck3} className="d-block" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;