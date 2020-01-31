import 'antd/dist/antd.css';
import React from 'react';
import {  Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';
import { CreditsTwo } from './creditsTwo';
import InputMask from 'react-input-mask';
import { withTranslation } from 'react-i18next';
import {requiredFunc,validAmountFunc} from './validFuncs';
const Card_Two = (props) => {
  const{t}=props;
  const { getFieldDecorator } = props.form;
  const creditCard2 = (
    <Card id="creditCard">
      <img src={`${process.env.PUBLIC_URL}/img/banks/alfabank.svg`} className="bankImg" />
      <div>
        <Form.Item >
          {getFieldDecorator('CardNumber2', {
            rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
              }
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="9999 9999 9999 9999" maskChar={null} onChange={props.updateDetails} >
              {(CardNumber2Props) => <Input  {...CardNumber2Props} className="inputPlace" id="CardNumber2" ></Input>}
            </InputMask>
          )}
          <span className="floating-label">{t('RecipientCardNumber')}</span>
        </Form.Item>
        <img src={`${process.env.PUBLIC_URL}/img/flags/by.svg`} className="flagsImg" />
      </div>
      <div style={{maxWidth:"138px"}}>
        <Form.Item >
          {getFieldDecorator('Sum', {
            rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
                validAmountFunc(value, callback);
              }
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="999 999" maskChar={null}  >
              {(SummProps) => <Input  {...SummProps} className="inputPlace small" />}
            </InputMask>
          )}
          <span className="floating-label">{t('Amount')}</span>
        </Form.Item>
       
      </div>
      <div id="TextNumOne">
      {t('textone')}
        <br></br>
        {t('texttwo')}
        <img src={`${process.env.PUBLIC_URL}/img/paymentSystems/mastercard.svg`} className="paySysImg" />
      </div>

    </Card>

  )

  return (
    <div className="testMedia">
      {creditCard2}
      {props.CardNumber2 !== null && props.CardNumber2 !== '' ? (<CreditsTwo form={props.form}></CreditsTwo>) : undefined}
    </div>
  )
}
export default withTranslation()(Card_Two);