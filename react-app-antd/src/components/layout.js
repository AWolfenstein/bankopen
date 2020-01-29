
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../stylesheets/layout.css';
import Card_One from './cardOne';
import Card_Two from './cardTwo';
import Result_Block from './reusultBlock';
import { Icon, Col, Form } from 'antd';

class Layout extends Component {
  constructor(props) {

    super(props);
    this.state = {
      cardNumberOneValue:'',
      cardNumberTwoValue:'', 
      CVVvalue:'',
      DateValidValue:'',
      summValue:'',
      firstNameOneValue:'',
      lastNameOneValue:'',
      indexValue:'',
      cityValue:'',
      adressValue:'',
      firstNameTwoValue:'',
      lastNameTwoValue:'',
      CardNumber2: '',
    };
    this.updateDetails = this.updateDetails.bind(this);

  }

  updateDetails(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  componentDidMount() {

    // this.props.form.validateFields();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields();
  };
  render() {

    return (

      <Form layout="horizontal" id="firstForm" onSubmit={this.handleSubmit}>

        <Card_One
          form={this.props.form}
          CardNumber2={this.state.CardNumber2}
          updateDetails={this.updateDetails}
        ></Card_One>
        <Icon type="right" className="IconRight" />
        <Col>
          <Card_Two
            form={this.props.form}
            CardNumber2={this.state.CardNumber2}
            updateDetails={this.updateDetails}
          ></Card_Two>
          <Result_Block></Result_Block>
        </Col>

      </Form>

    )
  }
}
export default Form.create()(Layout);
