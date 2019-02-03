import React, { Component } from 'react'

import { Tab, Table } from 'react-bootstrap'

export default class Content extends Component {
  render() {
    return (
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <td>Company Ethereum address</td>
              <td>xxx</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>12344</td>
            </tr>
            <tr>
              <td>Physical address</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Manager</td>
              <td>3</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Verified by</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Verification data</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
    )
  }
}
