import React, { useState } from "react";
import "./CheckBox.css";

function RadioBox(props) {
  const [Value, setValue] = useState("0");

  const renderRadioBox = () =>
    props.list &&
    props.list.map((value) => (
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          key={value._id}
          value={`${value._id}`}
          onChange={handleChange}
        />
        <label class="form-check-label" for="exampleRadios1">
          {value.name}
        </label>
      </div>
    ));

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  const [rotate, setRotate] = useState("rotate(0deg)");

  const arrowRotate = () => {
    if (rotate === "rotate(0deg)") {
      setRotate("rotate(90deg)");
    } else {
      setRotate("rotate(0deg)");
    }
  };

  return (
    <div className="checkBoxStyle">
      <div className="card">
        <div className="card-body">
          <h5
            className="card-title"
            onClick={arrowRotate}
            data-toggle="collapse"
            data-target="#collapseRadio"
            aria-expanded="false"
            aria-controls="collapseRadio"
          >
            <i
              class="fas fa-arrow-right"
              style={{ transform: rotate, transition: "transform 0.5s ease" }}
            ></i>{" "}
            Sort By Price
          </h5>
          <div className="checkBoxes collapse" id="collapseRadio">
            <div className="d-flex flex-row flex-wrap">{renderRadioBox()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioBox;
