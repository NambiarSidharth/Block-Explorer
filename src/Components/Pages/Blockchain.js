import React, { Component } from 'react'
import axios from "axios";
import {heroku_url} from "../../ApiRef";
import {Card} from "react-bootstrap";
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
            blocklist=chain.map(obj=>{
                return <Card className="mv1" onClick={this.showData.bind(this,obj.index)}>
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

            </div>
            <div className="row">
            <div className="col-md-4">
            {blocklist}
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
