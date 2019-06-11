import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Main extends Component {
    render() {
        return (
            <div className="jumbotron mt3">
                    <h2>Bloc-Explore</h2>
                    <h5>Data UI for Tincture Blockchain</h5>
                    <h6>You can view the following things</h6>
                    <Link to="/blockchain" className="ml5 btn btn-outline-secondary text-secondary">Chain</Link> 
              <Link to="/state" className="ml1 btn btn-outline-secondary text-secondary">State</Link>
              <Link to="/transaction" className="ml1 btn btn-outline-secondary text-secondary">transactions</Link>
              <Link to="/search" className="ml1 btn btn-outline-secondary text-secondary">Search</Link>
           
            </div>
        )
    }
}

export default Main
