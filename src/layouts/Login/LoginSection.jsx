import React from "react";
import InputField from "../../components/Shared/InputField/InputField";

const LoginSection = () => {
  return (
    <>
      <div className="woocommerce-billing-fields">
        <h3 className="text-center">Login</h3>
        <div className="row justify-content-center m-0">
          <div className="col-lg-8 ">
            <InputField
              fieldLabel="Email"
              fieldPlaceholder="Enter your email address"
              fieldName="email"
              fieldType="email"
            />
            <InputField
              fieldLabel="Password"
              fieldPlaceholder="Enter your password"
              fieldName="password"
              fieldType="password"
            />
            <a className="goru-btn w-100 text-center mb-5" href="#">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSection;
