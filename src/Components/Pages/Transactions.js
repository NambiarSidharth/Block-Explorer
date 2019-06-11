import React, { Component } from 'react'
import axios from "axios";
import {heroku_url} from "../../ApiRef";
import {Card, Button , Modal} from "react-bootstrap";
import DynamicTable from "./DynamicTable";
export class Transactions extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         chain:null,
         transactions:null,
         data:null,
         loading:false
      };
      this.refreshChain=this.refreshChain.bind(this)
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

showData(index){
    const {transactions} = this.state;
    this.setState({data:transactions[index]})
}

render() {
        const {chain,transactions,data} = this.state;
        let notransaction=0;
        let transactionView;
        let dataview
        if(data){
            let tempdata=data.data;
            tempdata.transactionId=data.transactionId
            dataview=<DynamicTable data={tempdata}/>
        }else{
            dataview=null
        }
        if(transactions){
            transactionView=transactions.map((res,i)=>{
                return <Card bg="info" key={i} className="mv1 dim" onClick={this.showData.bind(this,i)}>
                <Card.Body>
                <h6>{res.transactionId}</h6>
                </Card.Body>
                </Card>
            })
        }else{
                transactionView=null;
        }
        return (
            <div>
            <div>
            <div className="row mv1">
            <div className="col-md-12 text-right">
            <Button variant="warning" onClick={this.refreshChain}>Refresh</Button>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4">
            <Modal.Dialog>
    <Modal.Body style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
            {transactionView}
            </Modal.Body>
            </Modal.Dialog>
            </div>
            <div className="col-md-8">
            {
                dataview
            }
            </div>
            </div>    
            </div>
            </div>
        )
    }
}

export default Transactions
