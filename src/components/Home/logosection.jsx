import React from "react";
import '../../index.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function LogoSliderMulti() {
  const logos = [
    { alt: "Coursera", src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Coursera_logo.svg" },
    { alt: "Udemy", src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Udemy_logo.svg" },
    { alt: "HubSpot", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/HubSpot_Logo.svg" },
    { alt: "edX", src: "https://upload.wikimedia.org/wikipedia/commons/3/37/EdX_Logo.svg" },
    { alt: "LinkedIn Learning", src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/LinkedIn_Logo.svg" },
    { alt: "Skillshare", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Skillshare_logo.svg" },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,           // slide animation speed (ms)
    slidesToShow: 5,      // ek waqt me 5 logos nazar aayein
    slidesToScroll: 1,    // ek-ek logo slide ho
    autoplay: true,
    autoplaySpeed: 2500,  // har 2.5 second me agla slide
    rtl: true,            // right to left sliding
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section style={{ backgroundColor: "#06192dff", padding: "15px 40px" }}>
      <div className="container">
        <Slider {...settings}>
          {logos.map(({ alt, src }, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
              <img 
                src={src} 
                alt={alt} 
                style={{ maxHeight: "60px", objectFit: "contain" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
