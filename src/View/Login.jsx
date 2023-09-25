import React, { useEffect, useState } from "react";
import LoginImage from "../Components/Login/LoginImage";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserList } from "../Redux/Slice/RegisterUserSlice";
import { useNavigate } from "react-router-dom";
import { LoginUserSliceAction } from "../Redux/Slice/LoginUserSlice";
import { alert } from "../Components/SharedComponent/alert";
function Login() {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);
  const stateInfo = useSelector((state) => state.user?.registerUser);
  console.log(stateInfo, "get All user list");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserList());
  }, []);
  useEffect(() => {
    setAllUser(stateInfo);
  }, [stateInfo]);
  const save = async (data) => {
    console.log(data, "from Login page");
    const finalUser = allUser.find((curr) => curr.email === data.email);
    console.log(finalUser, "FinalUser");
    if (typeof finalUser === "object") {
      if (
        data.email === finalUser.email &&
        data.password === finalUser.password
      ) {
        sessionStorage.setItem("email", finalUser?.email);
        sessionStorage.setItem("FirstName", finalUser?.firstName);
        sessionStorage.setItem("LastName", finalUser?.lastName);
        sessionStorage.setItem("id", finalUser?.id);

        dispatch(LoginUserSliceAction.login(finalUser));
        navigate("/");
        alert("success", "User is successfully Login");
      } else {
        navigate("/login");
        alert(
          "warning",
          "User Credential Is Mismatch. Enter Correct Information"
        );
      }
    } else {
      navigate("/login");

      alert("error", "Please Enter Information Here");
    }
  };
  return (
    <>
      <LoginImage isSignup={false} onSave={save} />
    </>
  );
}

export default Login;
