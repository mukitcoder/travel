import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

// Login Section

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
      // setUser(result.user);
    });
    //   .finally(()=>setIsLoading(false))
  };
  return (
    <div className="d-flex justify-content-center align-items-center login-container">
      <div className="bg-light px-5 py-5 rounded-pill text-center">
        <h3 className="mb-3">Please Sign In</h3>
        <Button onClick={handleGoogleLogin}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
