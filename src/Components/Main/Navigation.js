import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Nav,Navbar} from "react-bootstrap"
export class Navigation extends Component {
    render() {
        return (
            <div>
            <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto ml5">
              <Link to="/blockchain" className="ml5">Chain</Link> 
              <Link to="/state" className="ml1">State</Link>
              <Link to="/transaction" className="ml1">transactions</Link>
              <Link to="/search" className="ml1">Search</Link>
            </Nav>
          </Navbar>
            </div>
        )
    }
}

export default Navigation
