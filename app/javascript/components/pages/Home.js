import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const Home = ({ sign_in_route, new_user_route, logged_in, current_user}) => {
  const navigate = useNavigate ()

  const viewListings = () => {
    navigate("/apartmentindex");
  };

  const viewMyListings = () => {
    navigate("/mylistings");
  };

  if (!logged_in) {
    return (
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
         
        <a  href={new_user_route}> <Button>Sign Up</Button> </a>
    
        <a  href={sign_in_route}> <Button>Sign In</Button> </a>

      </div>
    );
  }
  
  if (logged_in) {
    return (
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
        <h3>{`Welcome, ${current_user.email}!`}</h3>
        <p>Place holder</p>
        <button onClick={viewListings}>View Listings</button>
        <button onClick={viewMyListings}>View My Listings</button>
      </div>
    );
  }
};

export default Home;
