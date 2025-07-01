import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/animation.css";
import UpdatedContactForm from "../components/Contact";
import Services from "../components/Services";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ContactButton from "../components/ContactButton";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* HERO SECTION */}
      <Navbar />
      <ScrollToTopButton />

      <div className="hero">
        <div className="landing-content px-3 text-dark container">
          <div class="floating-iconss d-none d-sm-block">
            <div class="iconn icon-1">
              <img
                src="https://live.21lab.co/itlab/wp-content/uploads/2022/12/Group-8.jpg"
                alt="Google Drive Icon"
                width="50"
                height="50"
              />
            </div>
            <div class="iconn icon-2">
              <img
                src="https://live.21lab.co/itlab/wp-content/uploads/2022/12/Bitmap-2.jpg"
                alt="React Icon"
                width="50"
                height="50"
              />
            </div>
            <div class="iconn icon-3">
              <img
                src="https://live.21lab.co/itlab/wp-content/uploads/2022/12/Group-12.jpg"
                alt="Sketch Icon"
                width="50"
                height="50"
              />
            </div>
            <div class="iconn icon-4">
              <img
                src="https://live.21lab.co/itlab/wp-content/uploads/2022/12/Group-10.jpg"
                alt="WordPress Icon"
                width="50"
                height="50"
              />
            </div>
            <div class="iconn icon-5">
              <img
                src="https://live.21lab.co/itlab/wp-content/uploads/2022/12/Oval-Copy-13-1.jpg"
                alt="Android Icon"
                width="50"
                height="50"
              />
            </div>
            <div class="iconn icon-6">
              <img
                src="https://live.21lab.co/itlab/wp-content/uploads/2022/12/Bitmap-4.jpg"
                alt="Figma Icon"
                width="50"
                height="50"
              />
            </div>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-8 col-md-12 text-center">
                <header class="section-header section-header__2 mb-40">
                  <h4 class="sub-heading sub-heading__2 mb-30">
                    HIRE DEDICATED RESOURCES WITH EASE
                  </h4>
                  <h2 class="section-title section-title__2 mb-20">
                    Your Ultimate IT Outsourcing Partner for Growth Acceleration
                  </h2>
                  <p>
                    Leverage our exceptional capabilities and resources to
                    develop tailored software, web &amp; mobile applications,
                    effective cloud solutions, and more to enable greater
                    flexibility, agility, and new growth opportunities for your
                    business.
                  </p>
                </header>
                <div class="row ">
                  <div class="col-xl-12 mt-30">
                    <ContactButton textData="Get started" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section id="about" className="section">
        <Testomonial />
      </section> */}
      <section id="services" className="section">
        <Services />
      </section>
      <section id="contact" className="contact-form section ">
        <UpdatedContactForm />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
