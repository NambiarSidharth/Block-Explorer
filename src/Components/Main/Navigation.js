import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Nav,Navbar} from "react-bootstrap"
export class Navigation extends Component {
    render() {
        return (
            <div>
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/blockchain">Chain</Link> 
              <Link to="/state">State</Link>
              <Link to="/transaction">transactions</Link>
              <Link to="/search">Search</Link>
            </Nav>
          </Navbar>
            </div>
        )
    }
}

export default Navigation
