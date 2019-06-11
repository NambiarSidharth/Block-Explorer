import React, { Component } from 'react'
import axios from "axios";
import {heroku_url} from "../../ApiRef";
import {Card, Button} from "react-bootstrap";
export class Transactions extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         chain:null,
         transactions:null,
         loading:false
      };
    };
componentDidMount(){
        this.setState({loading:true});
        axios.get(heroku_url+"/blockchain")
        .then(obj=>{
                this.setState({chain:obj.data.data});
                this.populateTransactions()
        })
        .catch(err=>{
                console.log(err)
        })
}
populateTransactions(){
    const {chain} = this.state;
    let temp=[]
    chain.forEach(obj=>{
        if(obj.transactions.length>0){
        obj.transactions.forEach(obj1=>{
            temp.push(obj1)
        })
    }
    })
    this.setState({transactions:temp,loading:false})
}        
refreshChain(){
    this.setState({loading:true});
    axios.get(heroku_url+"/blockchain")
    .then(obj=>{
        this.setState({chain:obj.data.data,loading:false});
    })
    .catch(err=>{
        console.log(err)
    })
}
    render() {
        const {chain} = this.state;
        let notransaction=0;
        let transaction
        if(chain){
            
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default Transactions
