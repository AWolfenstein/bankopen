import 'antd/dist/antd.css';
import React from 'react';
import {  Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';
import { CreditsOne } from './creditsOne';
import InputMask from 'react-input-mask';
import { withTranslation } from 'react-i18next';

import {requiredFunc,validDateFunc} from './validFuncs';




const Card_One = (props) => {
  const { t } = props;
  const { getFieldDecorator } = props.form;
  const creditCard = (
    <Card id="creditCard" >
      <img src={`${process.env.PUBLIC_URL}/img/banks/otkrytie.svg`} className="bankImg" />
      <div>
        <Form.Item >
          {getFieldDecorator('CardNumber', {
            rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
              }
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="9999 9999 9999 9999" maskChar={null} onChange={props.onChange} >
              {(CardNumberProps) => <Input  {...CardNumberProps} className="inputPlace" id="CardNumber" ></Input>}
            </InputMask>
          )}
          <span className="floating-label">{t('SenderCardNumber')}</span>
        </Form.Item>
      </div>

      <div id="inlineCredit">
        <Form.Item >
          {getFieldDecorator('DateValid', {
            rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
                validDateFunc(value, callback);
              }

            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="99/99" maskChar={null} onChange={props.onChange} >
              {(DateValidProps) => <Input id="DateValid" {...DateValidProps} className="inputPlace small"  />}
            </InputMask>
          )}
          <span className="floating-label">{t('Validity')}</span>
        </Form.Item>
        <div style={{width:"20px"}}></div>
        <Form.Item >
          {getFieldDecorator('CVC2', {
            rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
              }
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="999" maskChar={null} onChange={props.onChange} >
              {(CVC2Props) => <Input {...CVC2Props} id="CVC2" style={{ WebkitTextSecurity: "disc" }} className="inputPlace small" />}
            </InputMask>
          )}
          <span className="floating-label">{t('CVC2')}</span>
        </Form.Item>


      </div>
      <br></br>
      <img src={`${process.env.PUBLIC_URL}/img/paymentSystems/visa.svg`} className="paySysImg" />

    </Card>
  )

  return (
    <div className="testMedia">
      {creditCard}
      {props.CardNumber2 !== null && props.CardNumber2 !== '' ? (<CreditsOne form={props.form}></CreditsOne>) : undefined}
    </div>
  )
}
export default withTranslation()(Card_One);