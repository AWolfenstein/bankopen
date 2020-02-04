import React from "react";
import { Form, Input, Card } from "antd";
import InputMask from "react-input-mask";
import { withTranslation } from "react-i18next";

import { CreditsOne } from "./creditsOne";
import {
  requiredFunc,
  validDateFunc,
  validCardFunc,
  validCardRUSFunc
} from "./validFuncs";

import "antd/dist/antd.css";
import "../stylesheets/credit_card.css";

const Card_One = props => {
  const { t } = props;
  const { getFieldDecorator } = props.form;
  const Flag = props.CardNumber.country_code;
  const payImg = props.CardNumber.payment_system;
  const bankImg = props.CardNumber;
  const bankImgRender =
    bankImg.issuer && Flag === "RUS" ? (
      <img
        src={`${process.env.PUBLIC_URL}/img/banks/${bankImg.issuer.code}.svg`}
        className="bankImg"
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

  const creditCard = (
    <Card id="creditCard">
      {bankImgRender}
      <div>
        <Form.Item>
          {getFieldDecorator("CardNumber", {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validCardFunc(value, callback);
                  validCardRUSFunc(Flag, callback);
                }
              }
            ],
            validateTrigger: ["onBlur", "onChange"]
          })(
            <InputMask
              mask="9999 9999 9999 9999"
              maskChar={null}
              onChange={props.updateDetails}
            >
              {CardNumberProps => (
                <Input
                  {...CardNumberProps}
                  className="inputPlace"
                  id="CardNumber"
                ></Input>
              )}
            </InputMask>
          )}
          <span className="floating-label">{t("SenderCardNumber")}</span>
        </Form.Item>
      </div>

      <div id="inlineCredit">
        <Form.Item>
          {getFieldDecorator("DateValid", {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                  validDateFunc(value, callback);
                }
              }
            ],
            validateTrigger: ["onBlur", "onChange"]
          })(
            <InputMask mask="99/99" maskChar={null}>
              {DateValidProps => (
                <Input
                  id="DateValid"
                  {...DateValidProps}
                  className="inputPlace small"
                />
              )}
            </InputMask>
          )}
          <span className="floating-label">{t("Validity")}</span>
        </Form.Item>
        <div style={{ width: "20px" }}></div>
        <Form.Item>
          {getFieldDecorator("CVC2", {
            rules: [
              {
                validator(rule, value, callback) {
                  requiredFunc(value, callback);
                }
              }
            ],
            validateTrigger: ["onBlur", "onChange"]
          })(
            <InputMask mask="999" maskChar={null}>
              {CVC2Props => (
                <Input
                  {...CVC2Props}
                  id="CVC2"
                  style={{ WebkitTextSecurity: "disc" }}
                  className="inputPlace small"
                />
              )}
            </InputMask>
          )}
          <span className="floating-label">{t("CVC2")}</span>
        </Form.Item>
      </div>
      <br></br>
      {payImgRender}
    </Card>
  );

  return (
    <div className="testMedia">
      {creditCard}
      {props.CardNumber2.country_code &&
      props.CardNumber2.country_code !== "RUS" ? (
        <CreditsOne form={props.form}></CreditsOne>
      ) : (
        undefined
      )}
    </div>
  );
};
export default withTranslation()(Card_One);
