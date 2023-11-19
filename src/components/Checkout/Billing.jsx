import React from "react";
import CountryDropDownMenu from "./CountryDropDownMenu";
import BillingField from "./BillingField";

const Billing = () => {
  return (
    <div className="woocommerce-billing-fields">
      <h3>Billing Info</h3>
      <div className="row">
        <div className="col-lg-12">
          <div className="billing-countries">
            <label>Country</label>
            <CountryDropDownMenu />
          </div>
        </div>
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="First Name"
          fieldPlaceholder=""
          fieldName="first_name"
          fieldType="text"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Last Name"
          fieldPlaceholder=""
          fieldName="last_name"
          fieldType="text"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Address"
          fieldPlaceholder=""
          fieldName="address_1"
          fieldType="text"
        />
        <BillingField
          noOfCol="col-lg-6"
          fieldLabel="Postcode / Zip"
          fieldPlaceholder=""
          fieldName="postcode"
          fieldType="text"
        />

        <p className="col-lg-12">
          <label>Order Note</label>
          <textarea name="order" placeholder=""></textarea>
        </p>
      </div>
    </div>
  );
};

export default Billing;
