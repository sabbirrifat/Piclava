import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { addToCart } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";

function DetailProductPage(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, []);

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div>
      <div className="postPage" style={{ width: "100%", padding: "7rem 4rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "700",
          }}
        >
          <h1>{Product.title}</h1>
        </div>

        <br />

        <div className="container-fluid">
          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col-lg-6 col-md-12">
              <ProductImage detail={Product} />
            </div>
            <div className="col-lg-5 col-md-12  offset-lg-1">
              <ProductInfo addToCart={addToCartHandler} detail={Product} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProductPage;
