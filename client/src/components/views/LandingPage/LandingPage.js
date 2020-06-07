import React, { useEffect, useState } from "react";
import Axios from "axios";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import Footer from "../Footer/Footer";
import { continents, price } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";
import "./LandingPage.css";

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState("");

  const [Filters, setFilters] = useState({
    continents: [],
    price: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
      searchTerm: SearchTerms,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const renderCards = Products.map((product, index) => {
    return (
      <div className="cardStyle" style={{ marginBottom: "20px" }}>
        <a
          href={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "rgb(34,34,34" }}
        >
          <div className="card">
            <ImageSlider images={product.images} number={index} />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "700" }}>
                {product.title}
              </h5>
              <p className="card-text">{`$${product.price}`}</p>
            </div>
          </div>
        </a>
      </div>
    );
  });

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };

  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    console.log("array", array);
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  return (
    <div className="landingPageStyle">
      <div className="row justify-content-center">
        <h1 className="headLine MainTitle" style={{ marginTop: "5%" }}>
          {" "}
          Collect The Best Photos Or Sell Your Own
        </h1>
      </div>

      {/* Search  */}

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchFeature refreshFunction={updateSearchTerms} />
          </div>
        </div>
      </div>

      {/* Filter  */}

      <div id="filter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <CheckBox
                list={continents}
                handleFilters={(filters) =>
                  handleFilters(filters, "continents")
                }
              />
            </div>

            <div className="col-lg-6 col-md-12">
              <RadioBox
                list={price}
                handleFilters={(filters) => handleFilters(filters, "price")}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="imageGallery" style={{ marginBottom: "3%" }}>
        {Products.length === 0 ? (
          <div
            style={{
              display: "flex",
              height: "300px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className="imageShowCase">
            <div className="container-fluid">
              <div className="cardGallery">{renderCards}</div>

              {PostSize >= Limit && (
                <div
                  className="row justify-content-center"
                  style={{ marginTop: "30px" }}
                >
                  <button className="btnColor" onClick={onLoadMore}>
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer mode="dashboard" />
    </div>
  );
}

export default LandingPage;
