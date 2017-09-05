import React, { Component } from 'react';

//页面逻辑
import thisPage from './js/start_obj'

//引入样式文件
import "./start.less";

//引入antd组件
import { Carousel } from 'antd-mobile';
class Start extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: ['https://www.kaquantong.cn','']
        }
    }
    render(){

        return(

            <div className="zb-start-container">

                {/*banner文字*/}
                <div className="banner-img-text">

                    <p className="left">05</p>
                    <p className="center">
                        <span>EWERWERWER</span>
                        <em>2017</em>
                    </p>
                    <p className="right">
                        SELECT
                    </p>

                </div>

                {/*banner图片*/}
                <div className="banner-content">

                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img
                                    src={require('./images/test.png')}
                                    alt="icon"
                                    className="slide-image"
                                />
                                <div className="see-userlist">
                                    <p className="see-userlist-p">
                                        <span>
                                            <img
                                                src={require('./images/test.png')}
                                                alt="icon"
                                            />
                                             <img
                                                 src="http://img1.imgtn.bdimg.com/it/u=1384469051,228542804&fm=26&gp=0.jpg"
                                                 alt="icon"
                                             />
                                             <img
                                                 src="http://img0.imgtn.bdimg.com/it/u=3584229119,2330210159&fm=26&gp=0.jpg"
                                                 alt="icon"
                                             />
                                        </span>

                                        <em>阅读数:100+</em>
                                    </p>
                                    <p className="see-article" id={12123}>
                                        Google 的免费翻译服务可提供简体中文和另外 100 多种语言之间的互译功能,
                                        可让您即时翻译字词、短语和网页内容。
                                    </p>

                                </div>
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={require('./images/test.png')}
                                    alt="icon"
                                    className="slide-image"
                                />
                                <div className="see-userlist">
                                    <p className="see-userlist-p">
                                        <span>
                                            <img
                                                src={require('./images/test.png')}
                                                alt="icon"
                                            />
                                             <img
                                                 src="http://img1.imgtn.bdimg.com/it/u=1384469051,228542804&fm=26&gp=0.jpg"
                                                 alt="icon"
                                             />
                                             <img
                                                 src="http://img0.imgtn.bdimg.com/it/u=3584229119,2330210159&fm=26&gp=0.jpg"
                                                 alt="icon"
                                             />
                                        </span>

                                        <em>阅读数:100+</em>
                                    </p>
                                    <p className="see-article" id={12123}>
                                        Google 的免费翻译服务可提供简体中文和另外 100 多种语言之间的互译功能,
                                        可让您即时翻译字词、短语和网页内容。
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </div>
        )
    }

    componentDidMount(){
        //开始swiper
        thisPage.startSwiper();
    }
}
export default Start;