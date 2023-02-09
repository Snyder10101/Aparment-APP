import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const Home = ({ sign_in_route, new_user_route, logged_in}) => {
  const navigate = useNavigate ()

  const viewListings = () => {
    navigate("/apartmentindex");
  };

  const viewMyListings = () => {
    navigate("/");
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
        <NavLink to={new_user_route} >
         <Button>Sign Up</Button>
        </NavLink>
        <NavLink to={sign_in_route}>
          <Button>Sign In</Button>
        </NavLink>
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
        <h3>{`Welcome, ${welcomeProp.current_user_id}!`}</h3>
        <p>Place holder</p>
        <button onClick={viewListings}>View Listings</button>
        <button onClick={viewMyListings}>View My Listings</button>
      </div>
    );
  }
};

export default Home;
