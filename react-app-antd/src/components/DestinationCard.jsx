import React from 'react';
import { Form, Input, Card } from 'antd';
import InputMask from 'react-input-mask';
import { withTranslation } from 'react-i18next';

import { DestinationUserData } from './DestinationUserData';
import { requiredFunc, validAmountFunc, validCardFunc, validAmountminFunc, validCardCountryFunc } from './validFuncs';

import 'antd/dist/antd.css';
import '../stylesheets/credit_card.css';

const DestinationCard = props => {
  const getCountryISO2 = require('country-iso-3-to-2');
  const { t, receivingCommissionAndRecording, mask, form, updateDetails } = props;
  const { getFieldDecorator } = props.form;
  const flag = props.destinationCardNumber.country_code;
  const countryCode = getCountryISO2(flag);
  const paymentSystemImage = props.destinationCardNumber.payment_system;
  const bankImage = props.destinationCardNumber;
  const bankImageRender =
    bankImage.issuer && countryCode === 'RU' ? (
      <img src={`${process.env.PUBLIC_URL}/img/banks/${bankImage.issuer.code}.svg`} className="bankImage" />
    ) : (
      undefined
    );
  const flagRender =
    countryCode !== undefined ? (
      <img src={`${process.env.PUBLIC_URL}/img/flags/${countryCode.toLowerCase()}.svg`} className="flagsImg" />
    ) : (
      undefined
    );
  const paymentSystemImageRender =
    paymentSystemImage !== undefined ? (
      <img src={`${process.env.PUBLIC_URL}/img/paymentSystems/${paymentSystemImage}.svg`} className="paySysImg" />
    ) : (
      undefined
    );

  const creditCard2 = (
    <Card id="creditCard">
      {bankImageRender}
      <div>
        <Form.Item>
          {getFieldDecorator('destinationCardNumber', {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validCardFunc(value, callback);
                  validCardCountryFunc(paymentSystemImage, flag, callback);
                },
              },
            ],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="9999 9999 9999 9999" maskChar={null} onChange={updateDetails}>
              {destinationCardNumberProps => <Input {...destinationCardNumberProps} className="inputPlace" id="destinationCardNumber"></Input>}
            </InputMask>,
          )}
          <span className="floating-label">{t('RecipientCardNumber')}</span>
        </Form.Item>
        {flagRender}
      </div>
      <div style={{ maxWidth: '138px' }}>
        <Form.Item>
          {getFieldDecorator('Sum', {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validAmountFunc(countryCode, value, callback);
                  validAmountminFunc(value, callback);
                },
              },
            ],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask={`${mask}`} maskChar={null} onChange={receivingCommissionAndRecording}>
              {SummProps => <Input {...SummProps} className="inputPlace small" id="Amount"></Input>}
            </InputMask>,
          )}
          <span className="floating-label">{t('Amount')}</span>
          <span className="Rubl">₽</span>
        </Form.Item>
      </div>
      <div id="TextNumOne">
        {t('textone')}
        <br></br>
        {t('texttwo')}
        {paymentSystemImageRender}
      </div>
    </Card>
  );
  return (
    <div className="testMedia">
      {creditCard2}
      {flag && flag !== 'RUS' ? <DestinationUserData form={form}></DestinationUserData> : undefined}
    </div>
  );
};
export default withTranslation()(DestinationCard);
