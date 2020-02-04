import React from 'react';
import { Form, Input, Card } from 'antd';
import InputMask from 'react-input-mask';
import { withTranslation } from 'react-i18next';

import { SenderUserData } from './SenderUserData';
import { requiredFunc, validDateFunc, validCardFunc, validCardRUSFunc } from './validFuncs';

import 'antd/dist/antd.css';
import '../stylesheets/credit_card.css';
  
const SenderCard = props => {
  const { t } = props;
  const { getFieldDecorator } = props.form;
  const countryCode = props.senderCardNumber.country_code;
  const paymentSystemImage = props.senderCardNumber.payment_system;
  const bankImage = props.senderCardNumber;
  const bankImageRender =
    bankImage.issuer && countryCode === 'RUS' ? (
      <img src={`${process.env.PUBLIC_URL}/img/banks/${bankImage.issuer.code}.svg`} className="bankImage" />
    ) : (
      undefined
    );
  const paymentSystemImageRender =
    paymentSystemImage !== undefined ? (
      <img src={`${process.env.PUBLIC_URL}/img/paymentSystems/${paymentSystemImage}.svg`} className="paySysImg" />
    ) : (
      undefined
    );

  const creditCard = (
    <Card id="creditCard">
      {bankImageRender}
      <div>
        <Form.Item>
          {getFieldDecorator('senderCardNumber', {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validCardFunc(value, callback);
                  validCardRUSFunc(countryCode, callback);
                },
              },
            ],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="9999 9999 9999 9999" maskChar={null} onChange={props.updateDetails}>
              {CardNumberProps => <Input {...CardNumberProps} className="inputPlace" id="senderCardNumber"></Input>}
            </InputMask>,
          )}
          <span className="floating-label">{t('SenderCardNumber')}</span>
        </Form.Item>
      </div>

      <div id="inlineCredit">
        <Form.Item>
          {getFieldDecorator('DateValid', {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validDateFunc(value, callback);
                },
              },
            ],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="99/99" maskChar={null}>
              {DateValidProps => <Input id="DateValid" {...DateValidProps} className="inputPlace small" />}
            </InputMask>,
          )}
          <span className="floating-label">{t('Validity')}</span>
        </Form.Item>
        <div style={{ width: '20px' }}></div>
        <Form.Item>
          {getFieldDecorator('CVC2', {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                },
              },
            ],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="999" maskChar={null}>
              {CVC2Props => (
                <Input {...CVC2Props} id="CVC2" style={{ WebkitTextSecurity: 'disc' }} className="inputPlace small" />
              )}
            </InputMask>,
          )}
          <span className="floating-label">{t('CVC2')}</span>
        </Form.Item>
      </div>
      <br></br>
      {paymentSystemImageRender}
    </Card>
  );

  return (
    <div className="testMedia">
      {creditCard}
      {props.destinationCardNumber.country_code && props.destinationCardNumber.country_code !== 'RUS' ? (
        <SenderUserData form={props.form}></SenderUserData>
      ) : (
        undefined
      )}
    </div>
  );
};
export default withTranslation()(SenderCard);
