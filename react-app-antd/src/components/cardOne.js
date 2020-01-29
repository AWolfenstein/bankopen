import 'antd/dist/antd.css';
import React from 'react';
import { Icon, Popover, Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';
import {CreditsOne} from './creditsOne';


const Card_One = (props) => {
  const { getFieldDecorator } = props.form;
  const creditCard = (<Card id="creditCard">
    <div>
      <Form.Item >
        {getFieldDecorator('CardNumber', {
          rules: [{
            required: true, message: (
              <Popover content="Card number" trigger="click" style={{ position: "absolute" }}>
                <Icon
                  type="message"
                  style={{ position: "absolute", top: "8px", right: "5px" }}
                /></Popover>
            )
          }],
          validateTrigger: ['onBlur', 'onChange'],
        })(
          <Input type="number"  className="inputPlace" id="CardNumber" ></Input>

        )}
        <span className="floating-label">Card number</span>
      </Form.Item>
    </div>

    <div id="inlineCredit">
      <Form.Item >
        {getFieldDecorator('DateValid', {
          rules: [{
            required: true, message: (
              <Popover content="Date" trigger="click" style={{ position: "absolute" }}>
                <Icon
                  type="message"
                  style={{ position: "absolute", top: "8px", right: "26px" }}
                /></Popover>

            )
          }],
          validateTrigger: ['onBlur', 'onChange'],
        })(
          <Input id="DateValid" type="number"  className="inputPlace small" style={{ marginRight: "20px" }} />
        )}
        <span className="floating-label">01/22</span>
      </Form.Item>
      <Form.Item >
        {getFieldDecorator('CVC2', {
          rules: [{
            required: true, message: (
              <Popover content="CVC2/CVV2" trigger="click" style={{ position: "absolute" }}>
                <Icon
                  type="message"
                  style={{ position: "absolute", top: "8px", right: "5px" }}
                /></Popover>
            )
          }],
          validateTrigger: ['onBlur', 'onChange'],
        })(
          <Input id="CVC2" type="number" className="inputPlace small" />
        )}
        <span className="floating-label">CVC2/CVV2</span>
      </Form.Item>
    </div>
  </Card>)

  return (
    <div className="testMedia">
      {creditCard}
      {props.CardNumber2 !== null && props.CardNumber2 !== ''? (<CreditsOne form={props.form}></CreditsOne>) : undefined}
    </div>
  )
}
export default Card_One;