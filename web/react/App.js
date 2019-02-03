import React, { Component } from 'react'

import {
  Button,
  Panel,
  Tab,
  Tabs,
  Table,
  Row,
  Grid,
  Col,
} from 'react-bootstrap'

import Search from './Search'
import Content from './Content'
import Form from './Form'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      address: '',
    }
  }

  isValidEthereumAddress(address) {
    return address.length == 42 && address.startsWith('0x')
  }

  handleChange(e) {
    this.setState({ address: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <Grid>
          <br />
          <Tabs defaultActiveKey={1}>
          <br />
            <Tab eventKey={1} title="Verify Company">
              <Row>
                <Form />
              </Row>
            </Tab>
            <Tab eventKey={2} title="Identity Lookup">
              <Row className="search">
                <Col md={8} mdOffset={2}>
                  <Search
                    value={this.state.address}
                    onChange={this.handleChange}
                    validator={this.isValidEthereumAddress}
                  />
                </Col>
              </Row>
              <Row>
                {this.isValidEthereumAddress(this.state.address) ? (
                  <Content />
                ) : null}
              </Row>
            </Tab>
          </Tabs>
        </Grid>
      </div>
    )
  }
}
