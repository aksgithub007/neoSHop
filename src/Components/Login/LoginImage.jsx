import React from "react";
import login from "../../../src/image/login.png";
import Image from "react-bootstrap/Image";
import LoginForm from "./LoginForm";
import SignUpForm from "../SignUp/SignUpForm";

function LoginImage({ isSignup, onSave, onLoginSave }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
            <Image src={login} className="img-fluid mx-auto d-block" />
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
            {isSignup ? (
              <SignUpForm onSave={onSave} />
            ) : (
              <LoginForm onSave={onSave} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginImage;
