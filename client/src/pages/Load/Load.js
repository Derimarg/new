import React, { useState } from "react";
import "./Load.css";
import { Redirect } from "react-router-dom";

function AnimatedLoad(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </div>
  );
}

function Load(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 1500);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    // <AnimatedLoad theme={props.theme} />

    <AnimatedLoad theme={props.theme} />
  );
}

export default Load;