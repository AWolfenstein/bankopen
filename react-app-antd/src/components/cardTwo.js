import React from "react";
import { Form, Input, Card } from "antd";
import InputMask from "react-input-mask";
import { withTranslation } from "react-i18next";

import { CreditsTwo } from "./creditsTwo";
import {
  requiredFunc,
  validAmountFunc,
  validCardFunc,
  validAmountminFunc,
  validCardCountryFunc
} from "./validFuncs";

import "antd/dist/antd.css";
import "../stylesheets/credit_card.css";

const Card_Two = props => {
  const getCountryISO2 = require("country-iso-3-to-2");
  const { t, abc, mask, form, updateDetails } = props;
  const { getFieldDecorator } = props.form;
  const flag = props.CardNumber2.country_code;
  const Flag = getCountryISO2(flag);
  const payImg = props.CardNumber2.payment_system;
  const bankImg = props.CardNumber2;
  const bankImgRender =
    bankImg.issuer && Flag === "RU" ? (
      <img
        src={`${process.env.PUBLIC_URL}/img/banks/${bankImg.issuer.code}.svg`}
        className="bankImg"
      />
    ) : (
      undefined
    );
  const flagRender =
    Flag !== undefined ? (
      <img
        src={`${process.env.PUBLIC_URL}/img/flags/${Flag.toLowerCase()}.svg`}
        className="flagsImg"
      />
    ) : (
      undefined
    );
  const payImgRender =
    payImg !== undefined ? (
      <img
        src={`${process.env.PUBLIC_URL}/img/paymentSystems/${payImg}.svg`}
        className="paySysImg"
      />
    ) : (
      undefined
    );

  const creditCard2 = (
    <Card id="creditCard">
      {bankImgRender}
      <div>
        <Form.Item>
          {getFieldDecorator("CardNumber2", {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validCardFunc(value, callback);
                  validCardCountryFunc(payImg, flag, callback);
                }
              }
            ],
            validateTrigger: ["onBlur", "onChange"]
          })(
            <InputMask
              mask="9999 9999 9999 9999"
              maskChar={null}
              onChange={updateDetails}
            >
              {CardNumber2Props => (
                <Input
                  {...CardNumber2Props}
                  className="inputPlace"
                  id="CardNumber2"
                ></Input>
              )}
            </InputMask>
          )}
          <span className="floating-label">{t("RecipientCardNumber")}</span>
        </Form.Item>
        {flagRender}
      </div>
      <div style={{ maxWidth: "138px" }}>
        <Form.Item>
          {getFieldDecorator("Sum", {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validAmountFunc(Flag, value, callback);
                  validAmountminFunc(value, callback);
                }
              }
            ],
            validateTrigger: ["onBlur", "onChange"]
          })(
            <InputMask mask={`${mask}`} maskChar={null} onChange={abc}>
              {SummProps => (
                <Input
                  {...SummProps}
                  className="inputPlace small"
                  id="Amount"
                ></Input>
              )}
            </InputMask>
          )}
          <span className="floating-label">{t("Amount")}</span>
          <span className="Rubl">₽</span>
        </Form.Item>
      </div>
      <div id="TextNumOne">
        {t("textone")}
        <br></br>
        {t("texttwo")}
        {payImgRender}
      </div>
    </Card>
  );
  return (
    <div className="testMedia">
      {creditCard2}
      {flag && flag !== "RUS" ? (
        <CreditsTwo form={form}></CreditsTwo>
      ) : (
        undefined
      )}
    </div>
  );
};
export default withTranslation()(Card_Two);