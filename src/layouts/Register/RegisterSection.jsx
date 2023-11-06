import React from "react";
import CountryDropDownMenu from "../../components/Checkout/CountryDropDownMenu";
import InputField from "../../components/Shared/InputField/InputField";

const RegisterSection = () => {
  return (
    <>
      <div className="woocommerce-billing-fields">
        <h3 className="text-center">Account Info</h3>

        <form
          action="#"
          method="post"
          className="d-flex justify-content-center "
        >
          <div className="row m-3 w-50 ">
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

            <button type="submit" class="goru-btn auth-button ">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterSection;
