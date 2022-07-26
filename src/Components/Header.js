import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
} from "mdb-react-ui-kit";
import HeaderLink from "./HeaderLink";

function Header(props) {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand onClick = {()=>props.clickHandler("active")}>To Do App</MDBNavbarBrand>
        <MDBCollapse navbar>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <HeaderLink clickHandler = {props.clickHandler} text="Active Tasks" id="active"></HeaderLink>
            <HeaderLink
              clickHandler = {props.clickHandler} 
              text="Completed Tasks"
              id="completed"
            ></HeaderLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
