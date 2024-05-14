// Breadcrumb.js

import React from "react";
import "./BreadCrumb.css";

const Breadcrumb = ({ items}) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span>{item}</span>
          {index !== items.length - 1 && <span className="separator">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
