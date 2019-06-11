import React, { Component } from 'react'
import axios from "axios"
import {heroku_url} from "../../ApiRef"
import { Card, Table, Nav , Button, ListGroup} from 'react-bootstrap';
import DynamicTable from "./DynamicTable";
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

    showData(tid){
        const {state} = this.state;
       this.setState({data:state[tid]})
    }

    render() {
        const {state,data}=this.state;
        let songsData,dataview;
        if(data){
            dataview=<DynamicTable data={data} />
        }else{
            dataview=null;
        }
        if(state){
            console.log(state)
            songsData=state.map((obj,i)=>{
                return <ListGroup.Item onClick={this.showData.bind(this,i)} className="dim">
                {obj.name}
                </ListGroup.Item>
                
            })
        }else{
            songsData=null
        }
        return (
            <div>
            <div className="row pa2">
            <div className="col-md-12 text-right">
            <Button variant="warning" onClick={this.refreshChain}>Refresh</Button>
            </div>
            </div>
            <div className="row mt3">
            <div className="col-md-4">
            <Card>
            <ListGroup variant="flush" className="bg-info">
            {songsData}
            </ListGroup>
            </Card>         
            </div>
            <div className="col-md-8">
            {
                data?<Card>
                <Card.Body>
                {dataview}
                </Card.Body>
                </Card>:null
            }            
            </div>
            </div>
            </div>
        )
    }
}

export default State
