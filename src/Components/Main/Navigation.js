import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Nav,Navbar} from "react-bootstrap"
export class Navigation extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark">
            <Navbar.Brand href="/" className="text-secondary">Bloc-Explore</Navbar.Brand>
            <Nav className="mr-auto text-right">
              <Link to="/blockchain" className="ml5 btn btn-outline-secondary text-secondary">Chain</Link> 
              <Link to="/state" className="ml1 btn btn-outline-secondary text-secondary">State</Link>
              <Link to="/transaction" className="ml1 btn btn-outline-secondary text-secondary">transactions</Link>
              <Link to="/search" className="ml1 btn btn-outline-secondary text-secondary">Search</Link>
            </Nav>
          </Navbar>
            </div>
        )
    }
}

export default Navigation
