import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <div>
      <Navbar className="nav-bar">
        <Nav className="header" navbar>
          <NavItem>
            <NavLink className="nav-text" href="/">
              Home
            </NavLink>
          </NavItem>
          <div></div>
          {logged_in && (
            <NavItem>
              <NavLink className="nav-text" href="/apartmentindex">
                View Listings
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink className="nav-text" href="/apartmentnew">
                Create Listing
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink className="nav-text" href="/mylistings">
                My Listings{" "}
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink className="nav-text" href={sign_out_route}>
                Sign Out
              </NavLink>
            </NavItem>
          )}

          {!logged_in && (
            <NavItem>
              <NavLink className="nav-text" href="/apartmentindex">
                View Listings
              </NavLink>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <NavLink className="nav-text" href={sign_in_route}>
                Sign In
              </NavLink>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <NavLink className="nav-text" a href={new_user_route}>
                Sign Up
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
