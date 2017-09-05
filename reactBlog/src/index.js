import React from 'react';
import ReactDOM from 'react-dom';

//公共样式
import "./index.less";

//引入组件
import Home from './home/home';//首页
import Start from './start/start';//首页----启动
import New from './new/new';//首页----最新
import Hot from './hot/hot';//首页----最热
import User from './user/user';//首页----个人中心

import registerServiceWorker from './registerServiceWorker';

//引入路由
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
ReactDOM.render((

    <Router history = {browserHistory} >

        {/*嵌套路由*/}
        <Route path ="/" component={Home}>
            <IndexRoute component={Start}/>
            <Route path="/new_page" component={New}></Route>
            <Route path="/hot_page" component={Hot}></Route>
            <Route path="/user_page" component={User}></Route>
        </Route>

    </Router>

), document.getElementById('root'));
registerServiceWorker();
