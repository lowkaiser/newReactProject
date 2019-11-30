import React from 'react'
import {PageContainer} from "common/styled"
import { MineCss } from "./styeld";
import Header from "../../common/components/header";
import { Icon } from 'antd-mobile';
class Mine extends React.Component {
  render() {
    return (
      <PageContainer>
        <MineCss>
        <Header title="我的" />
          <div className="subHeader">
            <div className="personal-user-img">
              <img src="https://static1.zugeliang01.com/lease/img/bd2251b0-9616-11e8-9eb4-ed1a7f328482.png" alt=""/>
            </div>

            <div className="personal-user-info">
              <div className="personal-name">
                <div className="nick-name">133****0310</div>
                <div className="change-user">
                  切换
                  <Icon type="down" />
                </div>
              </div>
              <p className="h5-text">当前：个人</p>
              <p>
                <a className="renzheng" href="##">
                  去认证&gt;
                </a>
              </p>
            </div>
          </div>
          <div className="personal-base">
            <div className="base-box">
              <div className="base-info h5-text">
                <em>--</em>
              </div>
              <div className="base-title">我的余额</div>
            </div>
            <div className="base-box">
              <div className="base-info h5-text">
                <em>--</em>
              </div>
              <div className="base-title">余额免押</div>
            </div>
            <div className="base-box">
              <div className="base-info h5-text">
                <em className="iconfont iconwodedingdan"></em>
              </div>
              <div className="base-title">我的订单</div>
            </div>
            <div className="base-box">
              <div className="base-info h5-text">
                <em className="iconfont iconredpacket"></em>
              </div>
              <div className="base-title">我的发票</div>
            </div>
          </div>

          <div className="personal-pay-show">
            <div className="personal-pay">
              <em>查看缴费计划</em>
              <h3>每月1日0点自动更新账单</h3>
              <p>-</p>
            </div>
          </div>

          <div className="personal-list mgt20">
            <ul>
              <li>
                <div className="link-box">
                  <div className="link-name">卡券</div>
                  <div className="link-detail">
                    <span></span>
                    <em>
                      <Icon type="right" />
                    </em>
                  </div>
                </div>
              </li>
              <li>
                <div className="link-box">
                  <div className="link-name">租赁方案</div>
                  <div className="link-detail">
                    <span></span>
                    <em>
                      <Icon type="right" />
                    </em>
                  </div>
                </div>
              </li>
              <li>
                <div className="link-box">
                  <div className="link-name">补充资料</div>
                  <div className="link-detail">
                    <span></span>
                    <em>
                      <Icon type="right" />
                    </em>
                  </div>
                </div>
              </li>
              <li>
                <div className="link-box">
                  <div className="link-name">帮助</div>
                  <div className="link-detail">
                    <span></span>
                    <em>
                      <Icon type="right" />
                    </em>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="person-call">
            客服电话：
            <a href="tel://4000282788">400-028-2788</a>
          </div>
        </MineCss>
      </PageContainer>
    );
  }
}

export default Mine;
