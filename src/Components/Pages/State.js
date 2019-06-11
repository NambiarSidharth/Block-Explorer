import React, { Component } from 'react'
import axios from "axios"
import {heroku_url} from "../../ApiRef"
export class State extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           state:null,
           loading:false,
           data:null,
           choice:null
        };
        this.refreshState=this.refreshState.bind(this)
      };
      componentDidMount(){
        this.setState({loading:true});
        axios.get(heroku_url+"/state/songs")
        .then(obj=>{
            console.log(obj.data.data)
            this.setState({state:obj.data.data,loading:false});
        })
        .catch(err=>{
            console.log(err)
        })
    }
    refreshState(){
        this.setState({loading:true});
        axios.get(heroku_url+"/state/songs")
        .then(obj=>{
            this.setState({songs:obj.data.data,loading:false});
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default State
