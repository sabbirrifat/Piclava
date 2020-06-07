import React, { useState } from "react";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

import "./UploadPage.css";

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [ContinentValue, setContinentValue] = useState(1);

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onContinentsSelectChange = (event) => {
    setContinentValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !ContinentValue ||
      !Images
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      continents: ContinentValue,
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/dashboard");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div className="uploadPage">
      <div style={{ maxWidth: "700px", margin: "5rem auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 className="headLine topTitle"> Upload Your Photos</h2>
        </div>

        <form onSubmit={onSubmit} className="uploadForm">
          <div className="form-group row">
            {/* DropZone */}
            <FileUpload refreshFunction={updateImages} />

            <label htmlFor="text" className="col-4 col-form-label">
              Name
            </label>
            <div className="col-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-address-card" />
                  </div>
                </div>
                <input
                  id="text"
                  name="text"
                  type="text"
                  className="form-control"
                  required="required"
                  onChange={onTitleChange}
                  value={TitleValue}
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="textarea" className="col-4 col-form-label">
              Description
            </label>
            <div className="col-8">
              <textarea
                id="textarea"
                name="textarea"
                cols={40}
                rows={5}
                className="form-control"
                required="required"
                defaultValue={""}
                onChange={onDescriptionChange}
                value={DescriptionValue}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text1" className="col-4 col-form-label">
              Price($)
            </label>
            <div className="col-8">
              <input
                id="text1"
                name="text1"
                className="form-control"
                required="required"
                onChange={onPriceChange}
                value={PriceValue}
                type="number"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="select" className="col-4 col-form-label">
              Region
            </label>
            <div className="col-8">
              <select
                onChange={onContinentsSelectChange}
                value={ContinentValue}
                id="select"
                name="select"
                className="custom-select"
                required="required"
              >
                {Continents.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.value}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button
                name="submit"
                type="submit"
                onClick={onSubmit}
                className="btnColor"
                style={{ marginTop: "10px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadProductPage;
