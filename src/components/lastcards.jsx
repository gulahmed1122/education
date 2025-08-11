import React from "react";
import img1 from '../assets/images/50.jpg';
import img2 from '../assets/images/51.jpg';
import img3 from '../assets/images/53.jpg';

export default function LatestBlogSection() {
  const cards = [
    {
      img: img1,
      date: "27 Jan, 2024",
      tag: "eLearning",
      title: "A Student Learning with Online Programme on Computer",
    },
    {
      img: img2,
      date: "27 Jan, 2024",
      tag: "eLearning",
      title: "B Student Learning with Online Programme on Computer",
    },
    {
      img: img3,
      date: "27 Jan, 2024",
      tag: "eLearning",
      title: "C Student Learning with Online Programme on Computer",
    },
  ];

  return (
    <section className="bg-white py-5">
      <div className="container text-center mb-5" style={{ maxWidth: "700px" }}>
        <h5 className="text-primary fw-semibold mb-2 mt-5">Latest Blog & Articles</h5>
        <h2 className="fw-bold mt-2">Take a Look Our latest Posts</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center g-4">
          {cards.map((card, idx) => (
            <div className="col-md-4 d-flex" key={idx}>
              <div className="card shadow-sm border-0 flex-fill d-flex flex-column" style={{ height: "450px" }}>
                <img
                  src={card.img}
                  alt="Blog"
                  className="mx-auto mt-4"
                  style={{ width: "80%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
                />

                <div className="card-body d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-primary btn-sm px-3 py-1 fw-semibold" style={{ cursor: "default" }}>
                      {card.tag}
                    </button>
                    <small className="text-muted">{card.date}</small>
                  </div>

                  <h5 className="card-title fw-bold">{card.title}</h5>

                  <div className="mt-auto">
                    <p
                      className="text-primary fw-semibold mb-0"
                      style={{ cursor: "pointer" }}
                      onClick={() => alert("Explore more clicked!")}
                    >
                      Explore More &rarr;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
