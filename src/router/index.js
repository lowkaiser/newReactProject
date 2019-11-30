import {GoodsMoments,Market,Mine,Purchase,Shopping,Login,Search} from "../pages"



export const TabBarRoute =[
    {
        path:"/market",
        component:Market,
        text:"逛商场",
        meta:{
            flag:true
        },
        icon:"shop",
    },
    {
        path:"/goodsMoments",
        component:GoodsMoments,
        text:"好物圈",
        meta:{
            flag:true
        },
        icon:"gift",
    },
    {
        path:"/shopping",
        component:Shopping,
        text:"购物",
        meta:{
            flag:true
        },
        icon:"medicine-box",
    },
    {
        path:"/purchase",
        component:Purchase,
        text:"海外购",
        meta:{
            flag:true
        },
        icon:"global",
    },
    {
        path:"/mine",
        component:Mine,
        text:"我的",
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"user",
    },
]

export const NoTabBarRoute =[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false,
            requiredAuth:true
        },
    },
    {
        path:"/search",
        component:Search,
        meta:{
            flag:false,
            requiredAuth:false
        },
    }
]

export const configRoute =TabBarRoute.concat(NoTabBarRoute);