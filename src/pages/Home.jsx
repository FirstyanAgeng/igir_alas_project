import React, { useEffect } from "react";
import products from "../products.json";
import Layout from "../Layouts/layout";
import star from "/images/bintang.png";
import gallery1 from "/images/IMG-20240313-WA0012.jpg";
import aren from "/images/IMG-20240313-WA0013.jpg";
import kopi from "/images/1.jpg";
import buku from "/images/WhatsApp Image 2024-03-13 at 12.37.04_b67fa14c.jpg";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section>
        <div className="content-beranda">
          <div className="blur-background w-100">
            <div className="container mt-5">
              <marquee behavior="initial" direction="">
                <h1>IGIR ALAS</h1>
                <p>
                  Merupakan tempat ternyaman dan higienis untuk menikmati
                  secangkir kopi dibalut peringai hijau bertajuk pohon
                  bergemulai indah bah sutra alam lepas
                </p>
              </marquee>
            </div>
          </div>
        </div>
      </section>

      <section className="m-5">
        <div className="container">
          <div className="row desk-home">
            <div className="col-lg-5 col-sm-12">
              <img
                src={gallery1}
                alt=""
                data-aos="fade-up"
                className=""
                width={460}
                height={510}
              />
            </div>
            <div
              className="col-lg-7  col-sm-12 d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-left"
            >
              <h1 className="text-right">IGIR ALAS COMPANY</h1>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio, porro fugiat voluptatibus commodi fugit assumenda
                quia odit vel, nostrum repellendus praesentium pariatur quidem.
                Quod omnis voluptates sequi obcaecati culpa harum!
              </p>
            </div>
          </div>

          <div className="row content-2">
            <h1 className="pb-5">PRODUK KAMI</h1>
            {products.map((product) => (
              <Product
                title={product.title}
                desc={product.desc}
                image_url={product.image_url}
                page={product.page}
              />
            ))}
          </div>

          <div className="row content-3 container ">
            <h1 className="text-center mb-5">TESTIMONY CUSTOMER</h1>
            <div className="col-lg-6 col-sm-12  d-flex justify-content-center align-items-center">
              <img
                src="images/testimoni-person.png"
                alt=""
                data-aos="fade-left"
                data-aos-duration="5000"
                id="testimoni"
              />
            </div>
            <div className="col-lg-6 col-sm-12 mt-5 d-flex justify-content-center">
              <div
                className="card-testimoni"
                data-aos="fade-right"
                data-aos-duration="5000"
              >
                <div className="container">
                  <h3>Dr. Ruth Deanita</h3>
                  <p>
                    At first I didn't believe in this company at such a low
                    price compared to competitors, but when I tried to order
                    from this company I experienced significant profits, they
                    provide good quality products at the best prices. now I have
                    subscribed with this company. continued success cv.hasea.
                  </p>
                  <img src={star} alt="" id="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="content-4 w-100 text-center blur">
        <h1>IT'S TIME TO TRY OUR SUGAR PRODUCTS</h1>
        <p>
          Consult your sugar needs with our team to get insight and offer the
          best price according to your shopping budget.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
