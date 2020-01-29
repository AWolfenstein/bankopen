import 'antd/dist/antd.css';
import React from 'react';
import { Icon, Popover, Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';

export const CreditsTwo = (props) => {
  
    const {getFieldDecorator} = props.form;
    return (
        <Card id="personData">
            <div>
                <Form.Item >
                    {getFieldDecorator('firstName2', {
                        rules: [{
                            required: true, message: (
                                <Popover content="firstName" trigger="click" style={{ position: "relative" }}>
                                    <Icon
                                        type="message"
                                        style={{ position: "absolute", top: "8px", right: "5px" }}
                                    /></Popover>
                            )
                        }],
                        validateTrigger: ['onBlur', 'onChange'],
                    })(
                        <Input className="inputPlace" ></Input>

                    )}
                    <span className="floating-label">First Name</span>
                </Form.Item>
            </div>

            <div>
                <Form.Item >
                    {getFieldDecorator('lastName2', {
                        rules: [{
                            required: true, message: (
                                <Popover content="lastName" trigger="click" style={{ position: "absolute" }}>
                                    <Icon
                                        type="message"
                                        style={{ position: "absolute", top: "8px", right: "5px" }}
                                    /></Popover>
                            )
                        }],
                        validateTrigger: ['onBlur', 'onChange'],
                    })(
                        <Input className="inputPlace" ></Input>

                    )}
                    <span className="floating-label">Last Name</span>
                </Form.Item>
            </div>


        </Card>
    )
}
