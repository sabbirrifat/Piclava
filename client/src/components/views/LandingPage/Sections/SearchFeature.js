import React, { useState } from "react";
import "./SearchBox.css";

function SearchFeature(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value);

    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div class="search_box">
     <i class="fas fa-search"></i>
      <input
        value={SearchTerms}
        onChange={onChangeSearch}
        type="text"
        placeholder="what are you looking for?"
      />
     
    </div>
  );
}

export default SearchFeature;
