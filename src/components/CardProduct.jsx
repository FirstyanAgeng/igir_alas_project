import { useEffect } from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ title, desc, image_url, page }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Memastikan bahwa halaman akan di-scroll ke atas setiap kali navigasi terjadi
    window.scrollTo(0, 0);
  }, [page]); // Memastikan bahwa efek hanya dipanggil ketika `page` berubah
  return (
    <div className="col-xl-4 col-auto mb-5" data-aos="fade-right">
      <div className="kartu-katalog">
        <img src={image_url} className="img-card" alt="..." />
        <div className="container">
          <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <di className="card-text my-3">
              <LinesEllipsis
                text={desc}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
                className="description px-5"
                component="p"
              />
            </di>
            {/* <a href="produk.html" className="tombol-view">
              View More
            </a> */}
            <button className="tombol-view" onClick={() => navigate(page)}>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
