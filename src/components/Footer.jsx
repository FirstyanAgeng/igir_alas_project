import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import Whatsapp from "./Whatsapp";
const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Whatsapp />
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
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>Contact Information</h5>
              <p>
                <img src="images/wa-foot.png" alt="" className="pe-2" />
                WHATSAPP 081390290961
              </p>
              <p>
                <img src="images/tlp-foot.png" alt="" className="pe-2" />
                TELEPON 0813902909261
              </p>
              <p>
                <img src="images/mail-foot.png" alt="" className="pe-2" />
                GMAIL igiralas@gmail.com
              </p>
            </div>
            <div className="col me-5">
              <div className="d-flex">
                <h5>
                  <img src="images/map-foot.png" alt="" className="pe-2" />
                  Address
                </h5>
              </div>
              <p>
                Kampung pesawahan, Dusun III, Gununglurah, Kec. Cilongok,
                Kabupaten Banyumas, Jawa Tengah 53162
              </p>
            </div>
            <div className="col">
              <h5>Social Media</h5>
              <p>
                <img src="images/icon-fb-foot.png" alt="" className="pe-2" />
                FACEBOOK
              </p>
              <p>
                <img src="images/instagram-foot.png" alt="" className="pe-2" />
                LINKEDIN
              </p>
            </div>
            <hr
              style={{ color: "black", border: "2px solid black" }}
              className="mt-2"
            />
            <p className="pt-2">© Copyright 2024 | Igir Alas</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
