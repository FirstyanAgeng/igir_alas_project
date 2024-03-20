import React from "react";
import Layout from "../Layouts/layout";
import line from "/images/line-title.png";

const Catalogue = () => {
  return (
    <Layout>
      <section>
        <div className="content-catalogue">
          <div className="blur-background w-100">
            <div className="container text-center mt-5">
              <h1>DETERMINE YOUR BEST PACKAGE</h1>
              <img src={line} alt="" />
              <p>
                We always ensure that all of our products use quality halal raw
                materials and are processed according to food safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="m-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-auto mb-5" data-aos="fade-right">
              <div className="kartu-katalog">
                <img src="images/1.1.png" className="img-card" alt="..." />
                <div className="container">
                  <div className="card-body text-center">
                    <h5 className="card-title">Gula Cetak Aren HASEA</h5>
                    <p className="card-text my-3">17.500</p>
                    <a href="produk.html" className="tombol-view">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-auto mb-5" data-aos="fade-right">
              <div className="kartu-katalog">
                <img src="images/2.1.png" className="img-card" alt="..." />
                <div className="container">
                  <div className="card-body text-center">
                    <h5 className="card-title">Gula Cetak Kelapa HASEA</h5>
                    <p className="card-text my-3">Rp 16.500</p>
                    <a href="produk2.html" className="tombol-view">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-auto mb-5" data-aos="fade-right">
              <div className="kartu-katalog">
                <img src="images/3.1.png" className="img-card" alt="..." />
                <div className="container">
                  <div className="card-body text-center">
                    <h5 className="card-title">Gula Cair/Liquid Aren HASEA</h5>
                    <p className="card-text my-3">Rp 28.500</p>
                    <a href="produk3.html" className="tombol-view">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-auto mb-5" data-aos="fade-left">
              <div className="kartu-katalog">
                <img src="images/4.1.png" className="img-card" alt="..." />
                <div className="container">
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      Gula Cair/Liquid Kelapa HASEA
                    </h5>
                    <p className="card-text">Rp 27.500</p>
                    <a href="produk4.html" className="tombol-view">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-auto mb-5" data-aos="fade-left">
              <div className="kartu-katalog">
                <img src="images/5.1.png" className="img-card" alt="..." />
                <div className="container">
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      Gula Aren Kristal / Bubuk/ Semut HASEA
                    </h5>
                    <p className="card-text">Rp. 26.500</p>
                    <a href="produk5.html" className="tombol-view">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-auto mb-5" data-aos="fade-left">
              <div className="kartu-katalog">
                <img src="images/6.1.png" className="img-card" alt="..." />
                <div className="container">
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      Gula Cair/Liquid Kelapa HASEA
                    </h5>
                    <p className="card-text">Rp. 25.500</p>
                    <a href="produk6.html" className="tombol-view">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/images/deskripsi.pdf" download>
            <button className="btn-catalogue">Selengkapnya</button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Catalogue;
