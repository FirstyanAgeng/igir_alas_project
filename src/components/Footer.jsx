import React from "react";

const Footer = () => {
  return (
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
              GMAIL @gmail.com
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
  );
};

export default Footer;
