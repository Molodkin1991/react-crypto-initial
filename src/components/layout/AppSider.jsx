import React from "react";
import {Layout} from "antd";

const siderStyle = {
    textAlign: 'center',
    lineHeight: '150px',
    color: '#fff',
    backgroundColor: '#d6c9bb',
};
export default function AppSider(){
    return(
    <Layout.Sider width="25%" style={siderStyle}> Sider </Layout.Sider>
);}