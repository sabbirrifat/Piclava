import React, { useEffect, useState } from "react";

function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <h3 style={{ fontSize: "24px", fontWeight: "700" }}>Product Info</h3>
      <p style={{ fontSize: "18px", marginTop: "40px" }}>
        Price: {Product.price}$
      </p>
      <p style={{ fontSize: "18px" }}>Total Sold: {Product.sold}</p>
      <p style={{ fontSize: "18px" }}>View: {Product.views}</p>
      <p style={{ fontSize: "18px" }}>Description: {Product.description}</p>

      {/*  <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>
 */}
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "start" }}>
        <button
          className="btnColor"
          style={{ background: "#ff4a36", border: "none" }}
          onClick={addToCarthandler}
        >
          <i class="fas fa-cart-plus" style={{ marginRight: "5px" }}></i> Add to
          Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
