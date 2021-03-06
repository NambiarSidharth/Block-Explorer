import React, { Component } from 'react'
import {Card,Table} from "react-bootstrap"
export class BlockData extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="center">
                <Table variant="info" className="mt3">
                <tbody>
                <tr>
                <th>Hash</th>
                <th>{data.hash}</th>
                </tr>
                <tr>
                <th>No. of Transactions</th>
                <th>{data.transactions.length}</th>
                </tr>
                <tr>
                <th>timestamp</th>
                <th>{data.timestamp}</th>
                </tr>
                <tr>
                <th>previous block hash</th>
                <th>{data.previousBlockHash}</th>
                </tr>
                </tbody>
                </Table>
            </div>
        )
    }
}

export default BlockData
