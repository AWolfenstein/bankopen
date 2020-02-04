import React, { Component } from "react";
import { Icon, Col, Form } from "antd";

import Card_One from "./cardOne";
import Card_Two from "./cardTwo";
import Result_Block from "./reusultBlock";
import { getCardInfo, getCommisionInfo } from "./methods";
import{validateSumm,countDigits} from "./functions";

import "antd/dist/antd.css";
import "../stylesheets/layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      fee: { fee: {} },
      CardNumber: { issuer: {} },
      CardNumber2: { issuer: {} },
      mask: "999 999"
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.abc = this.abc.bind(this);
  }

  updateDetails(event) {
    let card = event.target.value.replace(/\s+/g, "");

    if (card.length < 8) {
      this.setState({
        [event.target.id]: { issuer: {} }
      });
    }

    if (card.length == 8) {
      let self = this;
      getCardInfo(card, event, self);
    }
  }

  componentDidMount() {}

  abc(event) {
    const Flag = this.state.CardNumber2.country_code;
    const { getFieldValue } = this.props.form;
    let ammount = parseInt((event.target.value || "").replace(/\s+/g, ""));
    let card2 = (getFieldValue("CardNumber2") || "").replace(/\s+/g, "");
    let card = (getFieldValue("CardNumber") || "").replace(/\s+/g, "");
    let count = countDigits(ammount);
    const self = this;

    validateSumm(ammount,count,self,Flag);
   
    if (ammount >= 10 && card.length >= 16 && card2.length >= 16) {
    
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

      if (Flag != "RUS" && ammount <= 100000) {
        getCommisionInfo(Commision, self);
      } else if (Flag == "RUS" && ammount <= 140000) {
        getCommisionInfo(Commision, self);
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields({ force: true });
  };

  render() {

    const {
      cardNumberOneValue,
      CardNumber2,
      CardNumber,
      fee,
      mask
    }=this.state;
    const {
      form
    }=this.props;

    return (
      <Form layout="horizontal" id="firstForm" onSubmit={this.handleSubmit}>
        <Card_One
          cardNumberOneValue={cardNumberOneValue}
          form={form}
          CardNumber2={CardNumber2}
          CardNumber={CardNumber}
          updateDetails={this.updateDetails}
        ></Card_One>
        <Icon type="right" className="IconRight" />
        <Col>
          <Card_Two
            form={form}
            CardNumber2={CardNumber2}
            updateDetails={this.updateDetails}
            abc={this.abc}
            mask={mask}
          ></Card_Two>
          <Result_Block
            form={form}
            fee={fee}
            amount={this.amount}
            CardNumber2={CardNumber2}
          ></Result_Block>
        </Col>
      </Form>
    );
  }
}
export default Form.create()(Layout);
