import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./services.css";

const cardData = [
  {
    id: 1,
    color: "#4b4bf5c4",
    title: "Web development",
    desc: "Elevate your online presence with our custom web solutions, blending creativity and functionality for a standout website that engages and converts ",
    hoverTitle: "Managed Work",
    hoverDesc: "Seamlessly execute\n& deliver results.",
    brandText: "Ecode Dash ",
    hoverBrandText: "Let's smilly together",
  },
  {
    id: 2,
    color: "#03a860b8",
    title: "Hire Dedicated Developers",
    desc: "Our in-house and remote teams are available as per the client's time zone to ensure high-quality deliverables and timely results",
    hoverTitle: "Strong Teams",
    hoverDesc: "Unite to achieve\nfaster outcomes.",
    brandText: "Ecode Dash",
    hoverBrandText: "Let's smilly together",
  },
  {
    id: 3,
    color: "#FF596D",
    title: "Mobile App Development",
    desc: "Transform your ideas into user-friendly, scalable mobile applications with our expert team, ensuring a seamless user experience across platforms",
    hoverTitle: "Strong Teams",
    hoverDesc: "Unite to achieve\nfaster outcomes.",
    brandText: "Ecode Dash",
    hoverBrandText: "Let's smilly together",
  },
  {
    id: 4,
    color: "#1f0f83b8",
    title: "Software Development",
    desc: "From concept to deployment, we create robust, scalable software solutions catering to your business needs, ensuring efficiency and growth",
    hoverTitle: "Strong Teams",
    hoverDesc: "Unite to achieve\nfaster outcomes.",
    brandText: "Ecode Dash",
    hoverBrandText: "Let's smilly together",
  },
  {
    id: 5,
    color: "#939f06c4",
    title: "Machine Learning",
    desc: "Harness the power of AI and machine learning to gain insights, automate processes, and drive innovation in your business operations",
    hoverTitle: "Strong Teams",
    hoverDesc: "Unite to achieve\nfaster outcomes.",
    brandText: "Ecode Dash",
    hoverBrandText: "Let's smilly together",
  },
  {
    id: 6,
    color: "#921facb8",
    title: "Cloud Computing",
    desc: "Embrace the flexibility and scalability of cloud solutions for efficient data management, application hosting, and streamlined operations",
    hoverTitle: "Strong Teams",
    hoverDesc: "Unite to achieve\nfaster outcomes.",
    brandText: "Ecode Dash",
    hoverBrandText: "Let's smilly together",
  },
  {
    id: 7,
    color: "#ec7f12c4",
    title: "SAP Programming",
    desc: "In today’s fast-paced business world, robust systems for managing operations, finances, and resources are essential. As SAP programmers and consultants",
    hoverTitle: "Strong Teams",
    hoverDesc: "Unite to achieve\nfaster outcomes.",
    brandText: "Ecode Dash",
    hoverBrandText: "Let's smilly together",
  },
  {
    id: 8,
    color: "#f409bfba",
    title: "Product Development",
    desc: "With our globally recognized product development expertise turn your concepts into industry-leading software products. Benefit from custom, cutting-edge solutions",
    hoverTitle: "Strong Teams",
    hoverDesc: "Unite to achieve\nfaster outcomes.",
    brandText: "Ecode Dash",
    hoverBrandText: "Let's smilly together",
  },
];

const Services = () => {
  const swiperRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="px-2">
      <div className="achievement-section ">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="text-center z-2">
              <h2 className="services-title fw-bold mb-3">
                Ecode Dash Provides the{" "}
                <span className="services-text">IT Services</span>
              </h2>
              <p className="text-dark para">
                Ecode Dash is Enterprise Grade Ready. We prioritize secure
                technologies, thorough operations, and external audits to ensure
                our systems and processes are at their best.
              </p>
            </div>
          </div>

          {/* Responsive Image Grid */}
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className={`styled-card text-white ${
                hoveredId === card.id ? "hovered" : ""
              }`}
              style={{ backgroundColor: card.color }}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-content">
                <div>
                  <div className="card-title-wrapper">
                    <h2 className="card-title normal">
                      {card.title.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </h2>
                    <h2 className="card-title hover">
                      {card.hoverTitle.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </h2>
                  </div>

                  <div className="brand-top-wrapper">
                    <p className="brand-text normal">{card.brandText}</p>
                    <p className="brand-text hover">{card.hoverBrandText}</p>
                  </div>

                  <div className="card-subtitle-wrapper">
                    <p className="card-subtitle normal">
                      {card.desc.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </p>
                    <p className="card-subtitle hover">
                      {card.hoverDesc.split("\n").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="card-footer">
                  <span className="brand-text normal">✨ {card.brandText}</span>
                  <div className=" px-4 py-2 common-btn get-btn  hover">
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
