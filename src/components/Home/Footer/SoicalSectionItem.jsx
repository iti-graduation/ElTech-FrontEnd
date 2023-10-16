import React from "react";

const SoicalSectionItem = ({ soicalHref, soicalIcon }) => {
  return (
    <a href={soicalHref}>
      <i className={soicalIcon}></i>
    </a>
  );
};

export default SoicalSectionItem;
