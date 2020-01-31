import 'antd/dist/antd.css';
import React from 'react';
import {  Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';
import { CreditsTwo } from './creditsTwo';
import InputMask from 'react-input-mask';
import { withTranslation } from 'react-i18next';
import {requiredFunc,validAmountFunc,validCardFunc} from './validFuncs';
const getCountryISO2 = require("country-iso-3-to-2");

const Card_Two = (props) => {
  const{t}=props;
  const { getFieldDecorator } = props.form;
  const Flag =getCountryISO2(props.CardNumber2.country_code);
  const payImg=props.CardNumber2.payment_system;
  const bankImg=props.CardNumber2;
  const bankImgRender = bankImg.issuer && Flag === "RU" ?  <img src={`${process.env.PUBLIC_URL}/img/banks/${bankImg.issuer.code}.svg`} className="bankImg" /> : undefined;
  const flagRender = Flag !== undefined  ?<img src={`${process.env.PUBLIC_URL}/img/flags/${Flag.toLowerCase()}.svg`} className="flagsImg" /> : undefined;
  const payImgRender = payImg !== undefined ? <img src={`${process.env.PUBLIC_URL}/img/paymentSystems/${payImg}.svg`} className="paySysImg" /> : undefined;
  const creditCard2 = (
    <Card id="creditCard">
     {bankImgRender}
      <div>
        <Form.Item >
          {getFieldDecorator('CardNumber2', {
            rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
                validCardFunc(value, callback);
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
        { flagRender }
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
            <InputMask mask="999 999" maskChar={null} onChange={props.abc} >
              {(SummProps) => <Input  {...SummProps} className="inputPlace small" id="Amount" ></Input> }
          </InputMask>
          )}
          <span className="floating-label">{t('Amount')}</span>
        </Form.Item>
       
      </div>
      <div id="TextNumOne">
      {t('textone')}
        <br></br>
        {t('texttwo')}
       {payImgRender}
      </div>

    </Card>

  )

  return (
    <div className="testMedia">
      {creditCard2}
      {props.CardNumber2.country_code && props.CardNumber2.country_code !== "RUS" ? (<CreditsTwo form={props.form}></CreditsTwo>) : undefined}
    </div>
  )
}
export default withTranslation()(Card_Two);