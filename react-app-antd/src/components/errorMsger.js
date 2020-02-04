import React from "react";
import { Icon, Popover } from "antd";

import "antd/dist/antd.css";
import "../stylesheets/credit_card.css";

export const ErrorMsng = props => {

  const { value } = props;

  return (
    <Popover content={value} trigger="click" className="PopoverCl">
      <Icon type="message" className="ErrorIc" />
    </Popover>
  );
};
