import 'antd/dist/antd.css';
import React from 'react';
import {  Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';
import {requiredFunc,validLangFunc} from './validFuncs';

export const CreditsOne = (props) => {

  const { t } = useTranslation();

  function changeFirstname(event) {
    if (event.target.value === "" || event.target.value === ! ' ') {
      alert("Только латиница и без пробелов")
    }
  }

  const { getFieldDecorator } = props.form;
  return (
    <Card id="personData">
      <div>
        <Form.Item >
          {getFieldDecorator('firstName', {
              rules: [{
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validLangFunc(value, callback);
                }
              }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="aaaaaaaaaaaaaaaaaaaaaaa" maskChar={null} onChange={changeFirstname} >
              {(FnameProps) => <Input {...FnameProps} id="firstName" className="inputPlace" ></Input>}
            </InputMask>

          )}
          <span className="floating-label">{t('Name')}</span>
        </Form.Item>
      </div>

      <div>
        <Form.Item >
          {getFieldDecorator('lastName', {
            rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
                validLangFunc(value, callback);
              }
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <InputMask mask="aaaaaaaaaaaaaaaaaaaaaaa" maskChar={null}  >
              {(LnameProps) => <Input {...LnameProps} className="inputPlace" ></Input>}
            </InputMask>

          )}
          <span className="floating-label">{t('Surname')}</span>
        </Form.Item>
      </div>

      <div id="inlineCredit">
        <Form.Item >
          {getFieldDecorator('Index', {
             rules: [{
              validator(rule, value, callback) {
                requiredFunc(value, callback);
              }
            }],
            validateTrigger: ['onBlur', 'onChange'],
          })(

            <InputMask mask="999 999" maskChar={null}  >
              {(IndexProps) => <Input  {...IndexProps} className="inputPlace small"  />}
            </InputMask>

          )}
          <span className="floating-label">{t('Index')}</span>
        </Form.Item>
        <div style={{width:"20px"}}></div>
        <Form.Item >
          {getFieldDecorator('City', {
              rules: [{
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validLangFunc(value, callback);
                }
              }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <Input className="inputPlace small" />
          )}
          <span className="floating-label">{t('Town')}</span>
        </Form.Item>
      </div>

      <div>
        <Form.Item >
          {getFieldDecorator('Adress', {
              rules: [{
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validLangFunc(value, callback);
                }
              }],
            validateTrigger: ['onBlur', 'onChange'],
          })(
            <Input className="inputPlace" ></Input>

          )}
          <span className="floating-label">{t('Adress')}</span>
        </Form.Item>
      </div>

    </Card>
  )
}
