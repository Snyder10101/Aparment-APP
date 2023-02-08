import React from "react";
import { Button } from "reactstrap";

const Home = ({ new_user_route, sign_in_route }) => {
  return (
    // if (authenticated) {
    //   <SignedInView /> // this would be user feed page with bunch of dynamic content
    // } else {
    //   <SignedOutView /> // this would be a splash page
    // }
    <div
      style={{
        height: "25rem",
        width: "50rem",
        border: "1px solid black",
        background: "#d8d8d8",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1>Welcome to Raymonds Friends Apts</h1>
      <p>Place holder</p>
      <Button href={new_user_route} className="nav-link">
        Sign Up
      </Button>
      <Button href={sign_in_route} className="nav-link">
        Sign In
      </Button>
    </div>
  );
};

export default Home;
