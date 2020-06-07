import React, { useState } from "react";
import "./CheckBox.css";

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
    //update this checked information into Parent Component
  };

  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            onChange={() => handleToggle(value._id)}
            type="checkbox"
            checked={Checked.indexOf(value._id) === -1 ? false : true}
          />
          <label className="form-check-label" for="exampleCheck1">
            {value.name}
          </label>
        </div>
      </React.Fragment>
    ));

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
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i
              class="fas fa-arrow-right"
              style={{ transform: rotate, transition: "transform 0.5s ease" }}
            ></i>{" "}
            Sort By Region
          </h5>
          <div className="checkBoxes collapse" id="collapseExample">
            <div className="d-flex flex-row flex-wrap">
              {renderCheckboxLists()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
