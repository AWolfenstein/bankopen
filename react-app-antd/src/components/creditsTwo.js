import 'antd/dist/antd.css';
import React from 'react';
import { Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';

import {requiredFunc,validLangFunc} from './validFuncs';

export const CreditsTwo = (props) => {
    const { t } = useTranslation();
    const {getFieldDecorator} = props.form;
    
    return (
        <Card id="personData">
            <div>
                <Form.Item >
                    {getFieldDecorator('firstName2', {
                          rules: [{
                            validator(rule, value, callback) {
                              requiredFunc(value, callback);
                              validLangFunc(value, callback);
                            }
                          }],
                        validateTrigger: ['onBlur', 'onChange'],
                    })(
                        <InputMask mask="aaaaaaaaaaaaaaaaaaaaaaa" maskChar={null}  >
              {(Fname2Props) =><Input {...Fname2Props} className="inputPlace" ></Input>}
              </InputMask>

                    )}
                    <span className="floating-label">{t('Name')}</span>
                </Form.Item>
            </div>

            <div>
                <Form.Item >
                    {getFieldDecorator('lastName2', {
                         rules: [{
                            validator(rule, value, callback) {
                              requiredFunc(value, callback);
                              validLangFunc(value, callback);
                            }
                          }],
                        validateTrigger: ['onBlur', 'onChange'],
                    })(
                        <InputMask mask="aaaaaaaaaaaaaaaaaaaaaaa" maskChar={null}  >
                        {(Lname2Props) =><Input {...Lname2Props} className="inputPlace" ></Input>}
                        </InputMask>

                    )}
                    <span className="floating-label">{t('Surname')}</span>
                </Form.Item>
            </div>


        </Card>
    )
}
