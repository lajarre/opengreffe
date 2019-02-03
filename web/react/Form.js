import React, { Component } from 'react'

import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap'


const cleanData = ({
  addr, name, capital, currency, physicalAddress, country, firstName, lastName, dateOfBirth
}) => [
  addr || "",
  name || "",
  parseInt(capital || '0'),
  currency || "",
  physicalAddress || "",
  country || "",
  firstName || "",
  lastName || "",
  parseInt(dateOfBirth || '0')
]


const ManagedTextField = ({ fieldName, fieldType, label, placeholder, setField, data}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type="text"
      value={data[fieldName]}
      placeholder={placeholder}
      onChange={e => setField(fieldName, e.target.value)}
    />
  </FormGroup>
)
const ManagedTextAreaField = ({ fieldName, fieldType, label, placeholder, setField, data}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type="textarea"
      componentClass="textarea"
      value={data[fieldName]}
      placeholder={placeholder}
      onChange={e => setField(fieldName, e.target.value)}
    />
  </FormGroup>
)


export default class Form extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      data: {
      }
    }
  }

  setField = (fieldName, val) => {
    this.setState({
      ...this.state
      , [fieldName]: val
    });
  } 

  onSubmit = (e) => {
    e.preventDefault()

    console.log(this.cleanStateData())
  }

  cleanStateData = () => {
    return cleanData(this.state.data) 
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <ManagedTextField fieldName="addr" label="Company Ethereum address"
          setField={this.setField} placeholder="0xsomething" data={this.state.data} />
        <ManagedTextField fieldName="name" label="Company name"
          setField={this.setField} placeholder="" data={this.state.data} />
        <ManagedTextField fieldName="capital" label="Capital of the company"
          setField={this.setField} placeholder="" data={this.state.data} />
        <ManagedTextField fieldName="currency" label="Currency denomination of the capital"
          setField={this.setField} placeholder="EUR / USD" data={this.state.data} />
        <ManagedTextAreaField fieldName="physicalAddress" label="Company physical address"
          setField={this.setField} placeholder="" data={this.state.data} />
        <ManagedTextField fieldName="country" label="Country"
          setField={this.setField} placeholder="France?" data={this.state.data} />
        <ManagedTextField fieldName="firstName" label="First name"
          setField={this.setField} placeholder="Denis" data={this.state.data} />
        <ManagedTextField fieldName="lastName" label="Last name"
          setField={this.setField} placeholder="Martin" data={this.state.data} />
        <ManagedTextField fieldName="dateOfBirth" label="Date of birth"
          setField={this.setField} placeholder="1981-01-01" data={this.state.data} />
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}
