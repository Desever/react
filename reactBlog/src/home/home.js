import React, { Component } from 'react';

//引入样式
import './home.less';

//引入首页数据处理
import homeJs from "./homeclass";

//antd组件
import {  Icon,Toast } from 'antd-mobile';

//首页
class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return (

            <div className="zbp-home">

                {/*导航*/}
                <header>

                    <i className="fa fa-align-left"></i>
                    <i className="fa fa-search"></i>

                </header>

                {/*主要内容*/}
                <div className="zbp-home-container">
                    {this.props.children}
                </div>

            </div>

        );
    }
}
export default Home;
