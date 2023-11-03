import React from "react";

const BillingField = ({
  fieldLabel,
  fieldPlaceholder,
  fieldName,
  fieldType,
}) => {
  return (
    <p className="col-lg-6">
      <label>{fieldLabel}</label>
      <input placeholder={fieldPlaceholder} name={fieldName} type={fieldType} />
    </p>
  );
};

export default BillingField;
