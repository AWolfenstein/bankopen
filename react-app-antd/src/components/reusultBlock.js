import 'antd/dist/antd.css';
import React from 'react';
import {Button } from 'antd';
import '../stylesheets/result_block.css';

const Result_Block = () => {


    return(
<div>
<div className="divResults">
<span style={{marginRight: "10px"}}>
Комиссия: 
</span>
<span style={{marginRight: "10px"}}>
0 ₽
</span>
<span style={{marginRight: "10px"}}>
Итого с комиссией: 
</span>
<span style={{marginRight: "10px"}}>
0 ₽
</span>
</div>
<div className="divResultClick">
<p className="TextCondition">
Нажимая на кнопку, вы соглашаетесь
c <a href="https://p2p.mdm.ru/assets/Uslovia_polzovania.pdf">условиями пользования</a> 
</p>
<Button type="primary" htmlType="submit" style={{width:"194px",height:"64px"}}>Перевести</Button>
</div>
</div>
 
)
    }
export default  Result_Block  ;