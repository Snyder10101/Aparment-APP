import React from "react"
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  
  return (
    <div>
      <Navbar>
          <Nav className= "header" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            {logged_in && ( 
            <NavItem>
              <NavLink href="/apartmentindex" >View Listings</NavLink>
            </NavItem>
            )}
            {logged_in && ( 
            <NavItem>
              <NavLink href="/apartmentshow/:id" >My Listings</NavLink>
            </NavItem>
            )}
            {logged_in && ( 
            <NavItem>
              <NavLink href={sign_out_route} >Sign Out</NavLink>
            </NavItem>
            )}
            {logged_in && ( 
            <NavItem>
              <NavLink href="/apartmentnew" >Create Listing</NavLink>
            </NavItem>
            )}

            {!logged_in && ( 
            <NavItem>
              <NavLink href="/apartmentindex" >View Listings</NavLink>
            </NavItem>
            )}
            {!logged_in && ( 
            <NavItem>
              <NavLink href={sign_in_route}>
                Sign In
              </NavLink>
            </NavItem>
            )}
            {!logged_in && ( 
            <NavItem>
              <NavLink a href={new_user_route}>
                Sign Up
              </NavLink>
            </NavItem>
            )}
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;