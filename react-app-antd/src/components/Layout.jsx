import React, { Component } from 'react';
import { Icon, Col, Form } from 'antd';

import SenderCard from './SenderCard';
import DestinationCard from './DestinationCard';
import ResultBlock from './ResultBlock';
import { getCardInfo, getCommisionInfo } from './methods';
import { validateSumm, countDigits } from './functions';

import 'antd/dist/antd.css';
import '../stylesheets/layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      fee: { fee: {} },
      senderCardNumber: { issuer: {} },
      destinationCardNumber: { issuer: {} },
      mask: '999 999',
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.receivingCommissionAndRecording = this.receivingCommissionAndRecording.bind(this);
  }

  updateDetails(event) {
    let card = event.target.value.replace(/\s+/g, '');

    if (card.length < 8) {
      this.setState({
        [event.target.id]: { issuer: {} },
      });
    }

    if (card.length === 8) {
      let self = this;
      getCardInfo(card, event, self);
    }
  }

  componentDidMount() {}

  receivingCommissionAndRecording(event) {
    const countryCode = this.state.destinationCardNumber.country_code;
    const { getFieldValue } = this.props.form;
    let ammount = parseInt((event.target.value || '').replace(/\s+/g, ''));
    let card2 = (getFieldValue('destinationCardNumber') || '').replace(/\s+/g, '');
    let card = (getFieldValue('senderCardNumber') || '').replace(/\s+/g, '');
    let count = countDigits(ammount);
    const self = this;

    validateSumm(ammount, count, self, countryCode);

    if (ammount >= 10 && card.length >= 16 && card2.length >= 16) {
      const Commision = {
        amount: {
          currency: 'RUR',
          value: ammount,
        },
        destination_card: {
          number: card2,
        },
        is_masterpass: false,
        source_card: {
          number: card,
        },
      };

      if (countryCode !== 'RUS' && ammount <= 100000) {
        getCommisionInfo(Commision, self);
      } else if (countryCode === 'RUS' && ammount <= 140000) {
        getCommisionInfo(Commision, self);
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields({ force: true });
  };

  render() {
    const { cardNumberOneValue, destinationCardNumber, senderCardNumber, fee, mask } = this.state;
    const { form } = this.props;

    return (
      <Form layout="horizontal" id="firstForm" onSubmit={this.handleSubmit}>
        <SenderCard
          cardNumberOneValue={cardNumberOneValue}
          form={form}
          destinationCardNumber={destinationCardNumber}
          senderCardNumber={senderCardNumber}
          updateDetails={this.updateDetails}
        ></SenderCard>
        <Icon type="right" className="IconRight" />
        <Col>
          <DestinationCard
            form={form}
            destinationCardNumber={destinationCardNumber}
            updateDetails={this.updateDetails}
            receivingCommissionAndRecording={this.receivingCommissionAndRecording}
            mask={mask}
          ></DestinationCard>
          <ResultBlock
            form={form}
            fee={fee}
            amount={this.amount}
            destinationCardNumber={destinationCardNumber}
          ></ResultBlock>
        </Col>
      </Form>
    );
  }
}
export default Form.create()(Layout);
