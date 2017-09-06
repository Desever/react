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

                <input type="checkbox" id="tm" />
                <ul className="sidenav">
                    <li><a href="#"><i className="fa fa-check"></i><b>Tasks</b></a></li>
                    <li><a href="#"><i className="fa fa-inbox"></i><b>Messages</b></a></li>
                    <li><a href="#"><i className="fa fa-pencil"></i><b>New Post</b></a></li>
                    <li><a href="#"><i className="fa fa-cog"></i><b>Settings</b></a></li>
                    <li><a href="#"><i className="fa fa-github"></i><b>gitHub</b></a></li>
                    <li><a href="#"><i className="fa fa-power-off"></i><b>Logout</b></a></li>
                </ul>

                <section>
                    <label htmlFor={'tm'} className="z-checkSidenav"></label>
                    {/*导航*/}
                    <header>
                        <i className="fa fa-align-left"></i>
                        <i className="fa fa-search"></i>
                    </header>

                    {/*主要内容*/}
                    <div className="zbp-home-container">
                        {this.props.children}
                    </div>
                </section>

            </div>

        );
    }
}
export default Home;
