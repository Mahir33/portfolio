import React from "react";
import "./headerContent.scss";

const HeaderContent = (props) => {
  const { headerText } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
    </div>
  );
};

export default HeaderContent;
