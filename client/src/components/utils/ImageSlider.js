import React from "react";

function ImageSlider(props) {
  return (
    <div
      id={`carouselExampleIndicators${props.number}`}
      className="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        {props.images.map((image, index) => (
          <li
            data-target={`#carouselExampleIndicators${props.number}`}
            data-slide-to={index}
            class={index > 0 ? "" : "active"}
          ></li>
        ))}
      </ol>

      <div className="carousel-inner">
        {props.images.map((image, index) => (
          <div
            className={index > 0 ? "carousel-item" : "carousel-item active"}
            key={index}
          >
            <img
              className="d-block w-100"
              style={{ height: "250px" }}
              src={`http://localhost:5000/${image}`}
              alt="productImage"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
