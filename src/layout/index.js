import React, { Component,Fragment } from 'react'
import Tabbar from "common/tabBar"
class Layout extends  Component{
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                {/* 接受组件内部标签内容 this.props.children  获得 routeEach 中
                    由layout 包裹的组件
                */}
                {this.props.children}

                {/* 接受 父级传递过来的路径  又将路径传递到 tabbar中*/} 
                <Tabbar path={this.props.path}/>
            </Fragment>
        )
    }
}

export default Layout

/*
    

*/ 