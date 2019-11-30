import React from "react";
import {withRouter} from "react-router-dom";
import {TabBarRoute} from "../../router";
import {Footer} from "./styled"
import { Icon } from 'antd';
@withRouter
class TabBar extends React.Component {
    render(){
        // 接受 tabbar中传递的路径
        let {path} =this.props
        return (
            <Footer >
                <ul>
                    {
                        TabBarRoute.map((item,index)=>(
                            <li key={item.path} className={path===item.path?'active':''} 
                                onClick={this.handleTabBarActive.bind(this,item.path,index)}
                            >
                                <Icon type={item.icon} />
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </Footer>
        )
    }
    handleTabBarActive(path,index){
        this.props.history.push(path);
    }
}

export default TabBar