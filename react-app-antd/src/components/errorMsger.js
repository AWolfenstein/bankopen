import 'antd/dist/antd.css';
import React from 'react';
import { Icon, Popover } from 'antd';
import '../stylesheets/credit_card.css'; 
export const ErrorMsng = (props) => {

    return (
        <Popover content={props.value} trigger="click" className="PopoverCl" >
            <Icon
                type="message"
                className="ErrorIc"
               
            /></Popover>
    )

}

