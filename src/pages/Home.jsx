import React, { useEffect } from "react";
import Layout from "../Layouts/layout";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
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
              <img src="images/item-1.png" alt="" data-aos="fade-up" />
            </div>
            <div className="col-lg-7 col-sm-12" data-aos="fade-left">
              <h1>IGIR ALAS COMPANY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio, porro fugiat voluptatibus commodi fugit assumenda
                quia odit vel, nostrum repellendus praesentium pariatur quidem.
                Quod omnis voluptates sequi obcaecati culpa harum!
              </p>
            </div>
          </div>

          <div className="row content-2 text-center">
            <h1 className="pb-5">PRODUK KAMI</h1>
            <div className="col" data-aos="flip-left">
              <img src="images/product-1.png" alt="" />
              <h3>GULA KELAPA SEMUT</h3>
              <p style={{ textAlign: "justify" }}>
                Gula Kelapa yang berbentuk Semut (Butiran/Serbuk/Kristal)
                Produksi Perusahaan kami Hasea sudah melalui Uji Laboratorium
                Saraswanti dan lolos untuk Jaminan Mutu Produk, selain itu juga
                produk kami Gula Semut Kelapa ini juga sudah memproleh
                SERTIFIKAT HALAL MUI,
              </p>
              <a href="catalogue.html">
                <button className="tombol-view">VIEW MORE</button>
              </a>
            </div>
            <div className="col" data-aos="flip-right">
              <img src="images/product-2.png" alt="" />
              <h3>GULA CETAK AREN</h3>
              <p style={{ textAlign: "justify" }}>
                Keaslian Gula Cetak Aren produk kami terjamin karena kami
                melakukan pembinaan dan pendampingan terhadap petani-petani Aren
                yang tersebar di wilayah Jawa Barat. Pembinaan yang kami lakukan
                berkaitan dengan penjagaan produk petani agar benar bersih
              </p>
              <a href="catalogue.html">
                <button className="tombol-view">VIEW MORE</button>
              </a>
            </div>
            <div className="col" data-aos="flip-left">
              <img src="images/product-3.png" alt="" />
              <h3>GULA CAIR LIQUID AREN</h3>
              <p style={{ textAlign: "justify" }}>
                Produk Gula Aren Cair ini sudah melalui pemeriksaan Laboratorium
                Saraswanti untuk kandungan dalam produk kami ini selain sudah
                lolos Jaminan Mutu dari Laboratorium Saraswanti, Gula Aren cair
                ini juga memperoleh Sertifikat HALAL MUI, sebagai produk Halal
              </p>
              <a href="catalogue.html">
                <button className="tombol-view">VIEW MORE</button>
              </a>
            </div>
          </div>

          <div className="row content-3">
            <h1 className="text-center mb-5">TESTIMONY CUSTOMER</h1>
            <div className="col-lg-5 col-sm-12">
              <img
                src="images/testimoni-person.png"
                alt=""
                data-aos="fade-left"
                data-aos-duration="5000"
                id="testimoni"
              />
            </div>
            <div className="col-lg-7 col-sm-12 mt-5">
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
                  <img src="images/bintang.png" alt="" id="star" />
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
      <div className="text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.046963329448!2d109.14370277476145!3d-7.348623492660188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f8a88acc90b7f%3A0x1b8bfe68c4eb1411!2sMTs%20PAKIS!5e0!3m2!1sid!2sid!4v1710703170253!5m2!1sid!2sid"
          width="837px"
          height="250px"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          data-aos="fade-up-right"
        ></iframe>
      </div>

      <a
        href="https://wa.me/628111335951"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="fixed-bottom wa-icon">
          <img
            src="images/whatsapp.png"
            alt=""
            width="60px"
            height="60px"
            style={{ margin: "20px" }}
          />
        </div>
      </a>
    </Layout>
  );
};

export default Home;
