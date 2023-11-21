import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../../apis/adminApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (email, password) => {
    const data = { email, password };
    const respon = loginUser(data);
  };
  return (
    <React.Fragment>
      <div id="login">
        <div className="login-wrapper my-14">
          {/* Login Form */}
          <div className="login-inner bg-[#E8E8E8] py-14 px-4 sm:px-6 md:px-8 lg:px-10">
            <h3 className="text-center text-xl capitalize font-semibold mb-8">
              Login to your account
            </h3>
            <div className="login-innerFrom">
              <input
                type="text"
                className="px-5 py-4 my-2 outline-none"
                placeholder="Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="px-5 py-4 my-2 outline-none"
                placeholder="Password:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={() => handleLogin(email, password)}
                className="w-full bg-[#79929C] my-2 text-center text-white text-lg py-4"
              >
                Login
              </button>

              <p className="cursor-pointer underline capitalize text-lg font-medium text-end mt-4">
                reset your password
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
