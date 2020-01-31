import 'antd/dist/antd.css';
import React from 'react';
import { Button } from 'antd';
import '../stylesheets/result_block.css';
import { withTranslation } from 'react-i18next';

const Result_Block = (props) => {
    const { t } = props;
    
  const { getFieldValue } = props.form;
 let amount=parseInt((getFieldValue("Sum") || '').replace(/\s+/g, ''));
    return (

        <div>
            <div className="divResults">
                <span style={{ marginRight: "10px" }}>
                    {t('Commission')}:
        </span>
                <span style={{ marginRight: "10px" }}>
                    {props.fee && props.fee.fee.value != null ? props.fee.fee.value : "0" } ₽
        </span>
                <span style={{ marginRight: "10px" }}>
                    {t('TotalWithCommission')}:
        </span>
                <span style={{ marginRight: "10px" }}>
                    {console.log(amount)}
                    {props.fee && props.fee.fee.value != null && isNaN(amount)===false? props.fee.fee.value + amount : "0" } ₽
        </span>
            </div>
            <div className="divResultClick">
                <p className="TextCondition">
                    {t('textthree')}<a href="https://p2p.mdm.ru/assets/Uslovia_polzovania.pdf">{t('textfour')}</a>
                </p>
                <Button type="primary" htmlType="submit" style={{ width: "194px", height: "64px" }}>{t('Transfer')}</Button>
            </div>
        </div>

    )
}
export default withTranslation()(Result_Block);