import React from "react";
import InputField from "../../components/Shared/InputField/InputField";

const LoginSection = () => {
  return (
    <>
      <div className="woocommerce-billing-fields">
        <h3 className="text-center">Login</h3>
        <form
          action="#"
          method="post"
          className=" d-flex justify-content-center "
        >
          <div className="row w-50 m-3">
            <InputField
              noOfCol="col-lg-12"
              fieldLabel="Email"
              fieldPlaceholder="Enter your email address"
              fieldName="email"
              fieldType="email"
            />
            <InputField
              noOfCol="col-lg-12"
              fieldLabel="Password"
              fieldPlaceholder="Enter your password"
              fieldName="password"
              fieldType="password"
            />
            <button type="submit" class="goru-btn auth-button  ">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginSection;
