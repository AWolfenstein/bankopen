import React from 'react';
import { Form, Input, Card } from 'antd';
import { useTranslation } from 'react-i18next';

import { requiredFunc, validLangFunc } from './validFuncs';

import 'antd/dist/antd.css';
import '../stylesheets/credit_card.css';

export const DestinationUserData = props => {
  const { t } = useTranslation();
  const { getFieldDecorator } = props.form;

  return (
    <Card id="personData">
      <div>
        <Form.Item>
          {getFieldDecorator('firstName2', {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validLangFunc(value, callback);
                },
              },
            ],
            validateTrigger: ['onBlur', 'onChange'],
          })(<Input className="inputPlace"></Input>)}
          <span className="floating-label">{t('Name')}</span>
        </Form.Item>
      </div>

      <div>
        <Form.Item>
          {getFieldDecorator('lastName2', {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validLangFunc(value, callback);
                },
              },
            ],
            validateTrigger: ['onBlur', 'onChange'],
          })(<Input className="inputPlace"></Input>)}
          <span className="floating-label">{t('Surname')}</span>
        </Form.Item>
      </div>
    </Card>
  );
};
