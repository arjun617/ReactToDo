import React from "react";
import { MDBNavbarItem, MDBNavbarLink } from "mdb-react-ui-kit";

function HeaderLink(props){
  return (
    <MDBNavbarItem>
      <MDBNavbarLink active aria-current="page" href={props.href} onClick = {()=>props.clickHandler(props.id)}>
        {props.text}
      </MDBNavbarLink>
    </MDBNavbarItem>
  );
};

export default HeaderLink;
