import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data";
import PreviousBtn from "./PreviousBtn";
import NextBtn from "./NextBtn";
import Card from "./Card";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

function cards(data) {
  return (
    <Card
      key={data.id}
      avatar={data.avatar}
      name={data.name}
      message={data.message}
      designation={data.designation}
      location={data.location}
    />
  );
}
function App() {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn icon={ArrowForwardIos} />,
    prevArrow: <PreviousBtn icon={ArrowBackIos} />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };
  return (
    <div className="testimonial">
      <div style={{ width: "80%" }}>
        <h1 className="heading">Testimonial Slider</h1>
        <Slider {...settings}>{data.map(cards)}</Slider>
      </div>
    </div>
  );
}
export default App;
