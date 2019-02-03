import React, { Component } from 'react'

import {
  Button,
  Panel,
  Tab,
  Tabs,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap'

export default class Search extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: '',
    }
  }

  getValidationState() {
    if (this.props.value.length == 0) return null
    else if (this.props.validator(this.props.value)) return 'success'
    return 'error'
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControl
            type="text"
            value={this.props.value}
            placeholder="Enter Company Ethereum address"
            onChange={this.props.onChange}
          />
          <FormControl.Feedback />
          {this.getValidationState() == 'error' ? (
            <HelpBlock>
              Invalid Ethereum address format. Expecting 42 character string
              starting with '0x'.
            </HelpBlock>
          ) : null}
        </FormGroup>
      </form>
    )
  }
}
