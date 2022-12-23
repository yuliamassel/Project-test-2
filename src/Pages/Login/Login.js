import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import * as BsIcons from "react-icons/bs";
import "../../Style/global.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://soal.staging.id/oauth/token", form)
      .then((res) => {
        const result = res;
        console.log("ini data", result);
        localStorage.setItem("data", JSON.stringify(result));
        // socket.emit('Transfer', {sender: userInfo.id, reaceiver:id, amount: form.amount})
        navigate("/home");
      })
      .catch((err) => {
        console.log("ini errornya",err);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <div className="content-login">
      <img
        className="img-fluid"
        src="/Assets/logo technopartner.png"
        alt=""
        // width={350}
      />
      <div className="form-group">
        <form>
          <label className="txt-label">Email </label>
          <Input
            className="form-input"
            type="email"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          <label className="txt-label">Password </label>
          <Input
            className="form-input"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          {showPassword ? (
          <BsIcons.BsEye
            onClick={handleShowPassword}
            className="form-icons bi-eye-slash position-absolute"
            size={22}
          />
        ) : (
          <BsIcons.BsEyeSlash
            onClick={handleShowPassword}
            className="form-icons bi-eye-slash position-absolute"
            size={22}
          />
        )}
          <Button
            disabled={!form}
            onClick={handleLogin}
            className="btn-login"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
