import React, { useEffect } from "react";

import LoginImage from "../Components/Login/LoginImage";
import { useSelector, useDispatch } from "react-redux";
import { userRegisterList } from "../Redux/Slice/RegisterUserSlice";
import { useNavigate } from "react-router-dom";
import { alert } from "../Components/SharedComponent/alert";

function SignUp() {
  const navigate = useNavigate();
  const stateData = useSelector((state) => {
    return state.user;
  });
  const dispatch = useDispatch();

  //Save The form details
  const save = async (data) => {
    const response = await dispatch(userRegisterList(data));
    console.log(response, "dispatch response ");
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/login");
      alert("success", "User is successfully created");
    }
    if (response.meta.requestStatus === "rejected") {
      alert("error", "Internal server error");
    }
  };
  return (
    <>
      <LoginImage isSignup={true} onSave={save} />
    </>
  );
}

export default SignUp;
