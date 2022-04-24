import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { loginUser } from "../actions/authActions";
var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function LoginPage(props) {
    console.log('abc')
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [isNameCorrect, setNameCorrect] = useState(false);
  const [isEmailCorrect, setEmailCorrect] = useState(false);
  const [isPassCorrect, setPassCorrect] = useState(false);
  const [isError, setError] = useState(false);
  const [errors, setErr] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(props.auth.isAuthenticated){
      props.history.push("/")
    }
  },[])

  useEffect(()=>{
    if(props.auth.isAuthenticated){
      props.history.push("/")
    }
  },[props.auth])

  const checkValidity = (event) => {
    if(event.target.id === "name"){
        if(event.target.value.length === 0){
          event.target.style.border = "none";
          setNameCorrect(false);
        }
        else{
          event.target.style.border="solid";
          event.target.style.borderColor = "lightgreen";
          setNameCorrect(true);
        }
    }else if (event.target.id === "email") {
      if (event.target.value.length === 0) {
        event.target.style.border = "none";
        setEmailCorrect(false);
      } else if (event.target.value.match(mailformat)) {
        event.target.style.border = "solid";
        event.target.style.borderColor = "lightgreen";
        setEmailCorrect(true);
      } else {
        event.target.style.border = "solid";
        event.target.style.borderColor = "red";
        setEmailCorrect(false);
      }
    } else if (event.target.id === "pass") {
      if (event.target.value.length === 0) {
        event.target.style.border = "none";
        setPassCorrect(false);
      } else {
        event.target.style.border = "solid";
        event.target.style.borderColor = "lightgreen";
        setPassCorrect(true);
      }
    }
  };
  const change = (event) => {
    checkValidity(event);
    setLoginData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const setErrorTrue = (err)=>{
    setErr(err.errors);
    setError(true);
  }

  const handleSubmit = () => {
    setLoading(true);
    dispatch(loginUser({emailid: loginData.email, password: loginData.pass}, setErrorTrue));
    setLoading(false);
  };

  const showPassword = () => {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
  }

  return (
      <>
      <img class="backImage" width='100%' height='100%' src={require('../images/bg.jpg')}/>
        <div className="container-fluid outer-container align-items-center flex-column d-flex justify-content-center">
            {isLoading && <div className="loading"></div>}
            <h1 className="display-1 name position-static">Music App</h1>
            <div
            id="form"
            className="position-static d-flex flex-column align-items-center"
            >
            <h2 id="heading" className="my-2 justify-content-center">
                Register
            </h2>

            <input
                id="name"
                type="text"
                onChange={change}
                placeholder="Enter Name*"
                required
                className="my-2 form-control form-control-lg field"
            />
    
            <input
                id="email"
                type="email"
                onChange={change}
                placeholder="Enter Email Id*"
                required
                className="my-2 form-control form-control-lg field"
            />
    
            <input
                id="pass"
                type="password"
                onChange={change}
                placeholder="Enter Password*"
                required
                className="my-2 form-control form-control-lg field"
            />
            <div style={{color: 'white'}}><input type="checkbox" onClick={showPassword}/> Show Password</div>
            
            {isError && errors.map((err)=>{
                let [key, val] = Object.entries(err)[0];
                return <p key={key} style={{ color: "brown" }}>{key} {val}</p>
            })}
            <p>
                <Link to="/login" style={{color: 'aliceblue'}}>Have an account? </Link>
            </p>
    
            <input
                id="button"
                type="button"
                value="SUBMIT"
                disabled={!isEmailCorrect || !isPassCorrect || !isNameCorrect}
                onClick={handleSubmit}
                className="my-2 form-control form-control-lg"
            />
            </div>
        </div>
      </>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { loginUser })(LoginPage);
