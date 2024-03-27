import React from "react";
import Layout from "../Layouts/layout";
import line from "/images/line-title.png";
import products from "../cardProducts.json";
import CardProduct from "../components/CardProduct";
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
            {products.map((product) => (
              <CardProduct
                title={product.title}
                desc={product.desc}
                image_url={product.image_url}
                page={product.page}
              />
            ))}
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
