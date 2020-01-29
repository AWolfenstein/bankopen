import 'antd/dist/antd.css';
import React from 'react';
import { Icon, Popover, Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';
import {CreditsTwo} from './creditsTwo';

const Card_Two = ({ updateDetails, form, CardNumber2 }) => {
  const { getFieldDecorator } = form;


  const creditCard2 = (
    <Card id="creditCard">
      <div>
        <Form.Item >
          {getFieldDecorator('CardNumber2', {
            rules: [{
              required: true, message: (
                <Popover content="Card number" trigger="click" style={{ position: "relative" }}>
                  <Icon
                    type="message"
                    style={{ position: "absolute", top: "8px", right: "5px" }}
                  /></Popover>
              )
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <Input type="number" id="CardNumber2" onChange={updateDetails} className="inputPlace" />
          )}
          <span className="floating-label">Card number</span>
        </Form.Item>
      </div>
      <div>
        <Form.Item >
          {getFieldDecorator('Sum', {
            rules: [{
              required: true, message: (
                <Popover content="Summ" trigger="click" style={{ position: "absolute" }}>
                  <Icon
                    type="message"
                    style={{ position: "absolute", top: "8px" ,right: "5px", marginRight: "157px"}}
                  /></Popover>
              )
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <Input type="number" className="inputPlace small" />
          )}
          <span className="floating-label">Sum P</span>
        </Form.Item>
      </div>
      <div id="TextNumOne">
        Переводы возможны на карты
        <br></br>
        Российской Федерации и за рубежом
        </div>

    </Card>

  )



  return (
    <div className="testMedia">
      {creditCard2}
      {CardNumber2 !== null && CardNumber2 !== ''? (<CreditsTwo form={form}></CreditsTwo>) : undefined}
    </div>
  )
}
export default Card_Two;