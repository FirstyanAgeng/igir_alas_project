import React from "react";
import line from "/images/line-title.png";
import Layout from "../Layouts/layout";

const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="hero-about">
          <div className="blur-background w-100">
            <div className="container text-center isi-hero">
              <h1>IGIR ALAS</h1>
              <img src={line} alt="" />
              <h2>KNOWING US MAKES YOU MORE TRUST</h2>
            </div>
          </div>
        </div>

        <div className="m-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-sm-12 col-lg-6">
                <h1>Apa itu IGIR ALAS?</h1>
                <p>
                  It started with my visits to villages in Central Java and West
                  Java to look for natural tones (wind sounds, dust sounds,
                  etc.) that I would use to combine traditional music with these
                  natural tones. I met a lot of villagers who had jobs as a
                  tapper for coconut trees and tappers for palm trees. Many
                  complaints were raised when we sat together discussing the
                  price of their products, their harvest, pests and diseases and
                  others. What is always said is that the price of their
                  products is always low, farmers do not have high bargaining
                  power, everything is regulated by existing middlemen.
                </p>
              </div>
              <div class="col-lg-6 about-content">
                <img
                  src="images/item-2.png"
                  alt=""
                  class="img-about"
                  data-aos="fade-left"
                />
              </div>
            </div>

            <div class="row text-center m-5">
              <div class="col" data-aos="fade-up">
                <h1>OUR VISION</h1>
                <p>
                  It started with my visits to villages in Central Java and West
                  Java to look for natural tones (wind sounds, dust sounds,
                  etc.) that I would use to combine traditional music with these
                  natural tones. I met a lot of villagers who had jobs as a
                  tapper for coconut trees and tappers for palm trees.
                </p>
              </div>
              <div class="col" data-aos="fade-up">
                <h1>OUR MISSION</h1>
                <p>
                  It started with my visits to villages in Central Java and West
                  Java to look for natural tones (wind sounds, dust sounds,
                  etc.) that I would use to combine traditional music with these
                  natural tones. I met a lot of villagers who had jobs as a
                  tapper for coconut trees and tappers for palm trees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
