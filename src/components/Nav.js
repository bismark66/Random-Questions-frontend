/** @format */

import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import Avatar from "@mui/material/Avatar";
import "./Nav.css";
///static/images/avatar/1.jpg
//src\assets\images\logo.jpg

function NavBar({ alterShow, getLevel }) {
  return (
    <div className="NavBar">
      <div className="NavBar__avatar">
        <Avatar alt="Remy Sharp" src="./logo.jpg" />
      </div>

      <div className="NavBar__Nav">
        <Nav variant="pills" activeKey="1">
          <Nav.Item>
            <Nav.Link eventKey="2" onClick={alterShow} title="Item">
              Question
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            title="select level"
            id="nav-dropdown"
            onSelect={(e) => getLevel(e)}
          >
            <NavDropdown.Item eventKey="easy">easy</NavDropdown.Item>
            <NavDropdown.Item eventKey="medium">medium</NavDropdown.Item>
            <NavDropdown.Item eventKey="hard">hard</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </div>
    </div>
  );
}

export default NavBar;
