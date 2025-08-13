import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ReviewSection() {
  const reviews = [
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      title: "Amazing Course",
      desc: "Learned a lot from this course. Highly recommend it!",
      stars: 5,
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      title: "Very Helpful",
      desc: "The instructors were very clear and helpful throughout.",
      stars: 4,
    },
    {
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      title: "Great Content",
      desc: "Content was rich and easy to follow. Loved it!",
      stars: 5,
    },
    {
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      title: "Well Explained",
      desc: "Everything was explained in simple language.",
      stars: 4,
    },
    {
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      title: "Awesome Experience",
      desc: "This course changed my perspective, thank you!",
      stars: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} style={{color: i < count ? "#ffc107" : "#e4e5e9", fontSize:"1.2rem"}}>&#9733;</span>
    ));
  };

  return (
    <section
      className="reviewSection py-5 d-flex align-items-center"
      style={{
        minHeight: "800px",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="reviewHeading text-white mb-4">
          <h5 className="mb-3">Our Reviews</h5>
          <h2>What Our Students Are Saying</h2>
        </div>
        <Slider {...settings}>
          {reviews.map(({ img, title, desc, stars }, index) => (
            <div key={index} className="slideWrapper px-3 d-flex justify-content-center">
              <div className="reviewCard d-flex flex-column align-items-center">
                <div className="reviewImageWrapper mb-3">
                  <img src={img} alt={title} className="reviewImage" />
                </div>
                <div className="reviewText text-center">
                  <h5 className="reviewTitle">{title}</h5>
                  <p className="reviewDesc">{desc}</p>
                </div>
                <div className="reviewStars">{renderStars(stars)}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    
  );
}
