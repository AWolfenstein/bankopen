
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../stylesheets/layout.css';
import Card_One from './cardOne';
import Card_Two from './cardTwo';
import Result_Block from './reusultBlock';
import { Icon, Col, Form } from 'antd';
import { getCardInfo, getCommisionInfo } from './methods';

class Layout extends Component {
  constructor(props) {

    super(props);
    this.state = {
      amount: 0,
      fee: { fee: {} },
      CardNumber: { issuer: {} },
      CardNumber2: { issuer: {} },
      mask:'999 999'
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.abc = this.abc.bind(this);
  }


  updateDetails(event) {

    let card = event.target.value.replace(/\s+/g, '');
    if (card.length < 8) {
      this.setState({
        [event.target.id]: { issuer: {} }
      })
    }

    if (card.length == 8) {
      let self = this;
      getCardInfo(card, event, self)
    }
  }

  componentDidMount() {

  }
  abc(event) {
    const Flag = this.state.CardNumber2.country_code;
    const { getFieldValue } = this.props.form;
    let ammount = parseInt((event.target.value || '').replace(/\s+/g, ''));
    let card2 = (getFieldValue("CardNumber2") || '').replace(/\s+/g, '');
    let card = (getFieldValue("CardNumber") || '').replace(/\s+/g, '')
    function countDigits(ammount) {
      for( var i = 0; ammount > 1; i++) {
        ammount /= 10;
      }
      return i;
   }
   let count =countDigits(ammount);
   
    if(count <= 3){
   
      this.setState({
        mask: "999 999"
      })
    }
    if(count == 4){
      this.setState({
        mask: "9 99999"
      })
    }
    if(count == 5){
      this.setState({
        mask: "99 9999"
      })
    }
    if(count == 6){
      this.setState({
        mask: "999 999"
      })
    }
    if (Flag != "RUS" && ammount <= 100000) {
      this.setState({
        fee: { fee: {} }
      })
    }else if (Flag == "RUS" && ammount <= 140000) {
      this.setState({
        fee: { fee: {} }
      })
    }
    if (ammount >= 10) {
      this.setState({
        fee: { fee: {} }
      })
    }

    if (isNaN(ammount) === true) {
      this.setState({
        fee: { fee: {} }
      })
    }

    if (ammount >= 10 && card.length >= 16 && card2.length >= 16
    ) {


      const Commision = {
        amount: {
          currency: "RUR",
          value: ammount
        },
        destination_card: {
          number: card2
        },
        is_masterpass: false,
        source_card: {
          number: card
        }

      };
      let self = this;

      if (Flag != "RUS" && ammount <= 100000) {
        getCommisionInfo(Commision, self);
      }else if (Flag == "RUS" && ammount <= 140000) {
        getCommisionInfo(Commision, self);
      }
     

    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields({ force: true });
  };
  render() {

    return (

      <Form layout="horizontal" id="firstForm" onSubmit={this.handleSubmit}>
        <Card_One
          cardNumberOneValue={this.state.cardNumberOneValue}
          form={this.props.form}
          CardNumber2={this.state.CardNumber2}
          CardNumber={this.state.CardNumber}
          updateDetails={this.updateDetails}
        ></Card_One>
        <Icon type="right" className="IconRight" />
        <Col>
          <Card_Two
            form={this.props.form}
            CardNumber2={this.state.CardNumber2}
            updateDetails={this.updateDetails}
            abc={this.abc}
            mask={this.state.mask}
          ></Card_Two>
          <Result_Block
            form={this.props.form}
            fee={this.state.fee}
            amount={this.amount}
            CardNumber2={this.state.CardNumber2}
          ></Result_Block>
        </Col>

      </Form>

    )
  }
}
export default Form.create()(Layout);
