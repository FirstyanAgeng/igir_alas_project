import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router-dom";

const Product = ({ title, desc, image_url, page }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col d-flex justify-content-center flex-column align-items-center"
      data-aos="flip-left"
    >
      <img src={image_url} alt="" width={300} height={300} />
      <h3 className="mt-2">{title}</h3>
      <LinesEllipsis
        text={desc}
        maxLine="5"
        ellipsis="..."
        trimRight
        basedOn="letters"
        className="description px-5"
        component="p"
      />
      <button className="tombol-view mt-4" onClick={() => navigate(page)}>
        VIEW MORE
      </button>
    </div>
  );
};

export default Product;
