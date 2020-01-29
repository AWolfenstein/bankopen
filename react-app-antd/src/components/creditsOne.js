import 'antd/dist/antd.css';
import React from 'react';
import { Icon, Popover, Form, Input, Card } from 'antd';
import '../stylesheets/credit_card.css';

export const CreditsOne = (props) => {
    console.log(props)
    const {getFieldDecorator} = props.form;
    return (
        <Card id="personData">
        <div>
          <Form.Item >
            {getFieldDecorator('firstName', {
              rules: [{
                required: true, message: (
                  <Popover content="firstName" trigger="click" style={{ position: "absolute" }}>
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
            {getFieldDecorator('lastName', {
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
    
        <div id="inlineCredit">
          <Form.Item >
            {getFieldDecorator('Index', {
              rules: [{
                required: true, message: (
                  <Popover content="Index" trigger="click" style={{ position: "absolute" }}>
                    <Icon
                      type="message"
                      style={{ position: "absolute", top: "8px", right: "26px" }}
                    /></Popover>
    
                )
              }],
              validateTrigger: ['onBlur', 'onChange'],
            })(
              <Input type="number" className="inputPlace small" style={{ marginRight: "20px" }} />
            )}
            <span className="floating-label">Index</span>
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('City', {
              rules: [{
                required: true, message: (
                  <Popover content="City" trigger="click" style={{ position: "absolute" }}>
                    <Icon
                      type="message"
                      style={{ position: "absolute", top: "8px", right: "5px" }}
                    /></Popover>
                )
              }],
              validateTrigger: ['onBlur', 'onChange'],
            })(
              <Input className="inputPlace small" />
            )}
            <span className="floating-label">City</span>
          </Form.Item>
        </div>
    
        <div>
          <Form.Item >
            {getFieldDecorator('Adress', {
              rules: [{
                required: true, message: (
                  <Popover content="Adress" trigger="click" style={{ position: "absolute" }}>
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
            <span className="floating-label">Adress</span>
          </Form.Item>
        </div>
    
      </Card>
    )
}
