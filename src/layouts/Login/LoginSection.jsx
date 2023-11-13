import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import InputField from "../../components/Shared/InputField/InputField";
import { login } from "../../api/services/user/user-services";
import { showToast } from '../../utils/toastUtil';

const LoginSection = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);

      showToast('Login successful!', 'success');
      navigate('/');
    } catch (error) {
      showToast(error.toString(), 'error');
      console.error(error);
    }
  };


  return (
    <>
      <div className="woocommerce-billing-fields">
        <h3 className="text-center">Login</h3>
        <form
          action="#"
          method="post"
          className=" d-flex justify-content-center "
          onSubmit={handleSubmit}
        >
          <div className="row w-50 m-3">
            <InputField
              noOfCol="col-lg-12"
              fieldLabel="Email"
              fieldPlaceholder="Enter your email address"
              fieldName="email"
              fieldType="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <InputField
              noOfCol="col-lg-12"
              fieldLabel="Password"
              fieldPlaceholder="Enter your password"
              fieldName="password"
              fieldType="password"
              value={credentials.password}
              onChange={handleChange}
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
