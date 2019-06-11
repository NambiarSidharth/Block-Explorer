import React, { Component } from 'react'
import axios from "axios";
import {heroku_url} from "../../ApiRef";
import {Card, Button, Modal} from "react-bootstrap";
import BlockData from "./BlockData";
export class Blockchain extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         chain:null,
         loading:false,
         data:null,
         choice:null
      };
      this.refreshChain=this.refreshChain.bind(this)
    };
    componentDidMount(){
        this.setState({loading:true});
        axios.get(heroku_url+"/blockchain")
        .then(obj=>{
            this.setState({chain:obj.data.data,loading:false});
        })
        .catch(err=>{
            console.log(err)
        })
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
        const {chain} = this.state;
        this.setState({data:chain[index]})
    }

    render() {
        const {chain,data} = this.state;
        let blocklist,dataview;
        if(data){
            dataview=<BlockData data={data}/>
        }else{
            dataview=null
        }
        if(chain){
            blocklist=chain.map((obj,i)=>{
                return <Card bg="info" key={i} className="mv1 dim" onClick={this.showData.bind(this,obj.index)}>
                <Card.Body>
                <h6>Block #{obj.index}</h6>
                </Card.Body>
                </Card>
            })
        }else{
            blocklist=<h3 className="center">Loading</h3>
        }
        return (
            <div>
            <div className="row mv1">
            <div className="col-md-2">
            {
            chain?<Card bg="primary" className="dim" onClick={this.showData.bind(this,chain.length-1)}>
            
            <Card.Body>
            <h6>Latest block</h6>
            </Card.Body>
            </Card>:null
            }
            </div>
            <div className="col-md-10 text-right">
            <Button variant="warning" onClick={this.refreshChain}>Refresh</Button>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4">
    <Modal.Dialog>
    <Modal.Body style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>

    {blocklist}

    </Modal.Body>
    {
    //     <Modal.Footer>
    //   <Button bsStyle="primary">Save changes</Button>
    // </Modal.Footer>
}
    </Modal.Dialog>
            </div>
            <div className="col-md-8">
            {dataview}
            </div>
            </div> 
               
            </div>
        )
    }
}

export default Blockchain
