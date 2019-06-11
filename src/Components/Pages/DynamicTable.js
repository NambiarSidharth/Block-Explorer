import React, { Component } from 'react'
import {Table} from "react-bootstrap"
export class DynamicTable extends Component {
    render() {
        const {data} = this.props;
        let view=Object.keys(data).map(obj=>{
            return <tr>
            <th>{obj}</th>
            <th>{data[obj]}</th>
            </tr>
        })
        return (
            <div>
                <Table variant="info">
                <tbody>
                {view}
                </tbody>
                </Table>
            </div>
        )
    }
}

export default DynamicTable
