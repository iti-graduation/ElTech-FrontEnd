import React from "react";
import CountryDropDownMenu from "../../components/Checkout/CountryDropDownMenu";
import InputField from "../../components/Shared/InputField/InputField";

const RegisterSection = () => {
  return (
    <>
      <div className="woocommerce-billing-fields">
        <h3 className="text-center">Account Info</h3>
        <div className="row m-5">
          <InputField
            noOfCol="col-lg-6"
            fieldLabel="First Name"
            fieldPlaceholder="Enter your first name"
            fieldName="first_name"
            fieldType="text"
          />
          <InputField
            noOfCol="col-lg-6"
            fieldLabel="Last Name"
            fieldPlaceholder="Enter your last name"
            fieldName="last_name"
            fieldType="text"
          />

          <InputField
            noOfCol="col-lg-6"
            fieldLabel="Email"
            fieldPlaceholder="Enter your email address"
            fieldName="billing_email"
            fieldType="email"
          />
          <InputField
            noOfCol="col-lg-6"
            fieldLabel="Phone Number"
            fieldPlaceholder="Enter your phone number"
            fieldName="phone"
            fieldType="tel"
          />

          <div className="col-lg-12">
            <div className="billing-countries">
              <label>Country</label>
              <CountryDropDownMenu />
            </div>
          </div>
          <InputField
            noOfCol="col-lg-6"
            fieldLabel="Account Password"
            fieldPlaceholder="Choose a strong password"
            fieldName="password"
            fieldType="password"
          />
          <InputField
            noOfCol="col-lg-6"
            fieldLabel="Confirm Password"
            fieldPlaceholder="Confirm your password"
            fieldName="password"
            fieldType="password"
          />
          <div className="col-lg-12">
            <a className="goru-btn w-100 text-center mb-5" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSection;
