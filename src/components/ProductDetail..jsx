import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import products from "../products.json";
import Layout from "../Layouts/layout";

const ProductDetail = () => {
  const { productId } = useParams();

  const product = products.find(
    (product) => product.page === `/product/${productId}`
  );

  useEffect(() => {
    // Memastikan bahwa halaman akan di-scroll ke atas setiap kali komponen dimount atau `productId` berubah
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <Container>
        <Row className="produk">
          <Col>
            <img src={product.image_url} alt={product.title} />
          </Col>
          <Col>
            <h1>{product.title}</h1>
            <p>{product.desc}</p>
            <Button
              variant="success me-2"
              onClick={() =>
                window.open(
                  "https://wa.me/6285879876043?text=Pesan+Sekarang",
                  "_blank"
                )
              }
            >
              Pesan Sekarang
            </Button>
            <Link to="/" className="btn btn-danger">
              Kembali
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetail;
