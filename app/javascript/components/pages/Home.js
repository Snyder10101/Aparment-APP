import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Home = ({ welcomeProp, new_user_route, sign_in_route }) => {
  const navigate = useNavigate();
  const viewListings = () => {
    navigate("/apartmentindex");
  };
  const viewMyListings = () => {
    navigate("/");
  };
  if (!welcomeProp.logged_in) {
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
        <Button href={new_user_route} className="nav-link">
          Sign Up
        </Button>
        <Button href={sign_in_route} className="nav-link">
          Sign In
        </Button>
      </div>
    );
  }
  if (welcomeProp.logged_in) {
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
        <h3>{`Welcome, ${welcomeProp.current_user_id}!`}</h3>
        <p>Place holder</p>
        <button onClick={viewListings}>View Listings</button>
        <button onClick={viewMyListings}>View My Listings</button>
      </div>
    );
  }
};

export default Home;
