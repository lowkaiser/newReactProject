import React from 'react';
import {ShoppingCon} from "./shopcss"
import { Icon } from 'antd';
class Shopping extends React.Component{
    render(){
        return(
            <ShoppingCon>
                <div className="head-box">
                    <div className="head-info">
                        <div className="head-logo">
                            <img alt="haha" src="http://image1.51tiangou.com/tgou2/img2/index/logo-tgw.png"/>
                            <span>逛商场更便利、买好货更省钱</span>
                        </div>
                        <div className="head-icon">
                            <Icon type="shopping-cart" />
                            <Icon type="message" />
                        </div>
                    </div>
                    <div className="head-input">
                        <div className="head-search">
                            <span>控油抗痘宝典</span>
                        </div>
                    </div>
                </div>
                <div className="main-box">
                    <div className="banner">
                        <div className="banner-position"><img alt="haha" src="http://img1.tg-img.com/seller/201911/25/166D7D5F-DAE3-48F8-9C6A-FC7017B63B4E.jpg!y"/></div>
                    </div>
                    <div className="main-nav">
                        <ul>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/8FEF1F26-5465-4DD5-A5CC-FE3245EA07DA.png!y"/>
                                <span className="title">扫码购</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/66520014-A142-45BC-823A-429C13B8397E.png!y"/>
                                <span className="title">结算码</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/52C9AF35-9D74-49EF-9DCF-BDC84966F3D4.png!y"/>
                                <span className="title">专柜收银</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/8515C9C6-3144-42D6-A43B-FBA81A69890A.png!y"/>
                                <span className="title">停车缴费</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/29/4D39C429-C615-4FF6-91EF-1D6BFF93D008.gif!y"/>
                                <span className="title">拼团</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/EA8EC29C-6B99-4AF2-AA6B-D2C005F85833.png!y"/>
                                <span className="title">专柜特卖</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/E11284B9-FBBB-457F-A953-9D713913AA7F.png!y"/>
                                <span className="title">全球好货</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/4C859B5A-6283-4827-9A23-4922EC8D1EBE.png!y"/>
                                <span className="title">超市精选</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/B07604D4-499D-45B2-A15F-6B5CC040374C.png!y"/>
                                <span className="title">品牌秒杀</span>
                            </li>
                            <li>
                                <img alt="haha" src="http://img1.tg-img.com/seller/201905/23/63D6162A-8668-48ED-ABDC-0A915F0C69DE.png!y"/>
                                <span className="title">天狗到家</span>
                            </li>
                        </ul>
                    </div>
                    <div className="center-banner">
                        <img alt="haha" src="http://img1.tg-img.com/seller/201911/26/05E82B39-EAAA-4596-AFFA-0DC8E67D039B.png!y"/>
                    </div>
                    <div className="main-title">
                        限时疯抢
                    </div>
                    <div className="main-content">
                        <div className="mian-one">
                            <div className="one-head">
                                <div className="one-title">
                                    <div className="title-top">精品女包低至2折起</div>
                                    <div className="title-time">
                                        <span>距结束</span>
                                        <span>1</span>
                                        <span>天</span>
                                    </div>

                                </div>
                            </div>
                            <div className="one-content">
                                <div className="one-goods">
                                    <img alt="haha" src="http://img1.tg-img.com/seller/201907/04/29D6DD7F-F779-4E62-8734-89EC3434B6A3.jpg!y"/>
                                    <div className="activity">
                                        <span>秒杀</span>
                                    </div>
                                    <div className="name">水桶包单肩包</div>
                                    <div className="price">
                                        <span className="new">¥99</span>
                                        <span className="pro"><s>¥369</s></span>
                                    </div>
                                </div>
                                <div className="one-goods">
                                    <img alt="haha" src="http://img1.tg-img.com/seller/201907/04/29D6DD7F-F779-4E62-8734-89EC3434B6A3.jpg!y"/>
                                    <div className="activity">
                                        <span>秒杀</span>
                                    </div>
                                    <div className="name">水桶包单肩包</div>
                                    <div className="price">
                                        <span className="new">¥99</span>
                                        <span className="pro"><s>¥369</s></span>
                                    </div>
                                </div>
                                <div className="one-goods">
                                    <img alt="haha" src="http://img1.tg-img.com/seller/201907/04/29D6DD7F-F779-4E62-8734-89EC3434B6A3.jpg!y"/>
                                    <div className="activity">
                                        <span>秒杀</span>
                                    </div>
                                    <div className="name">水桶包单肩包</div>
                                    <div className="price">
                                        <span className="new">¥99</span>
                                        <span className="pro"><s>¥369</s></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-title">
                        为你推荐
                    </div>
                    <div className="content-two">
                        <div className="goods-img">
                            <img alt="haha" src="http://img1.tg-img.com/seller/201807/05/04748DFD-0EDA-4C6F-9907-B09E6FD48E2A.jpg!y"/>
                            <span>贝尔旗舰店</span>
                        </div >
                        <div className="goods-info">
                            <div className="goods-title">
                                <span>品牌</span>
                                <span>贝尔新款【牛皮】时尚单肩斜挎女包百搭亮片链条包真皮小方包</span>
                            </div>
                            <div className="goods-activity"></div>
                            <div className="goods-price">
                                <span className="new">￥368</span>
                                <span className="pro"><s>1380</s></span>
                            </div>
                        </div>
                    </div>
                </div>
            </ShoppingCon>
        )
    }
}

export default Shopping;