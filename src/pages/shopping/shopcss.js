import styled from 'styled-components';

export const ShoppingCon =styled.div`
    height:100%;
    .head-box{
        height:0.85rem;
        background: rgb(192, 153, 139);
    }
    .head-info{
        height:0.4rem;
        padding:0 0.1rem 0 0.15rem;
        
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .head-logo {
        display:flex;
        align-items:center;
    }
    .head-logo img {
        width:0.75rem;height:0.22rem;
    }
    .head-logo span{
        font-size:0.11rem;
        color:#fff;
        margin: 0 0 0 0.04rem;
    }
    .head-icon {
        font-size:0.22rem;
        color:#fff;
        display:flex;
        justify-center:space-between;
    }
    .head-icon .anticon-shopping-cart{
        font-size:0.24rem;
        margin-right:0.08rem;
    }
    .head-input{
        height:0.36rem;
        padding: 0 0.2rem;
        margin-top:0.05rem;
    }
    .head-search{
        width:100%;
        height:0.36rem;
        border-radius:3px;
        background-color:#eeeff4;
        padding: 0 0.08rem;
        line-height:0.36rem;
        color:#999;
        font-size:0.13rem;
    }
    .main-box{
        height:100%;
        overflow-y:scroll;
        padding-bottom:0.48rem;
    }
    .banner {
        height:1.98rem;
        background: rgb(192, 153, 139);
        padding-top:0.1rem;
        border-radius: 0 0 0.26rem 0.26rem;
        overflow:hidden;
        margin-bottom:0.2rem;
    }
    .banner-position{
        width:100%;
        height:1.88rem;
    }
    .banner img {
        height:1.88rem;
    }
    .main-nav{
        height:1.5rem;
    }
    .main-nav ul {
        height:100%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }
    .main-nav li {
        width:20%;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    .main-nav li img {
        width:0.5rem;
        height:0.5rem;
    }
    .main-nav li .title {
        font-size:0.11rem;
        color:#222;
        line-height:0.2rem;
    }
    .center-banner {
        width:100%;
        height:0.86rem;
    }
    .center-banner img{
        width:3.2rem;
        margin-top:0.2rem;
        height:0.86rem;
    }
    .main-title{
        height:0.34rem;
        line-height:0.34rem;
        font-size:0.17rem;
        color:#222;
        font-weight:bolder;
        margin-top:0.1rem
    }
    .main-content{
        min-height:2.1rem;
        padding:0 0.15rem;
        margin-bottom:0.25rem;
    }
    .mian-one{
        width:100%;
        height:2.1rem;
        color:#fff;
        background: url("//img1.tg-img.com/seller/201910/29/7BDA3A7B-FAC2-4E5D-8220-D95E9D7C604A.png!y") center top / 100% no-repeat;
    }
    .one-head{
        height:0.67rem;

    }
    
    .one-title{
        height:0.67rem;
        padding:0.07rem 0;
        position:relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
    }
    .one-title .title-top{
        overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-weight: bolder;
    font-size: 0.16rem;
    color: #fff;
    text-align:center;
    }
    .title-time{
        font-size: 0.09rem;
        color: #fff;
    }
    .title-time span:nth-child(2){
        text-align:center;
        margin: 0 0.05rem;
        min-width: 12px;
    height: 12px;
    line-height: 12px;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.16);
    display:inline-block;
    }
    .one-content{
        height:1.43rem;
        display:flex;
        justify-content:space-around;
    }
    .one-content .one-goods{
        width:0.95rem;
        height:1.4rem;
        border:1px solid #eee;
        padding:0.05rem;
        position:relative;
        background-color:#fff;
    }
    .one-content .one-goods img{
        width:0.85rem;
        height:0.85rem;
    }
    .one-content .one-goods .activity{
        position:absolute;
        bottom:0.55rem;
        left:0.4rem;
    }
    .one-content .one-goods .activity span{
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid rgb(255, 76, 72);
        border-radius: 0.08rem;
        font-size: 0.09rem;
        color: #ff4c48;
    }
    .one-content .one-goods .name{
        height:0.17rem;
        line-height:0.17rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        font-weight: bolder;
        text-align: center;
        font-size: 0.12rem;
        color: #222;
    }
    .one-content .one-goods .price{
        height:0.18rem;
        text-align:center;
    }
    .one-content .one-goods .price .new{
        text-align: right;
        font-size: 0.13rem;;
        color: #ff4c48;
        margin-right:0.05rem;
    }
    .one-content .one-goods .price .pro{
        text-align: left;
        font-size: 0.09rem;;
        color: #999;
    }
    .content-two{
        height:1.1rem;
        padding:0 0.08rem 0.08rem;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content:space-between;
    }

    .content-two .goods-img{
        width:1rem;
        height:1rem;
        position:relative;
    }
    .content-two .goods-img img{
        width:1rem;
        height:1rem;
    }
    .content-two .goods-img span{
        position:absolute;
        left:0;
        bottom:0;
        font-size: 0.08rem;
        background: rgb(189, 162, 139);
        padding: 0.03rem;
    }
    .content-two .goods-info{
        width:2.02rem;
        height:1rem;
       display:flex;
       flex-direction:column;
       justify-content:space-between
    }
    .goods-title{
        width:100%;
        height:0.32rem;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 0.13rem;
    color: #222;
    }
    .goods-title span:nth-child(1){
        font-size: 0.1rem;
        color: #fff;
        padding: 0.01rem 0.02rem;
        background-color: #ff9800;
        margin-right:0.1rem;
    }
    .goods-title span:nth-child(2){
        overflow: hidden;
        height:0.38rem;
        font-weight: 700;
        font-size: 0.13rem;
    }
    .goods-activity{
        height:0.21rem;
    }
    .goods-price{
        height:0.27rem;
        line-height:0.27rem;
    }
    .goods-price .new{
        text-align: right;
        font-size: 0.19rem;
        color: #ff4c48;
    } 
    .goods-price .pro{
        color: #999;
        font-size: 0.11rem;
        line-height: 0.16rem;
    }
    .goods-activity{
        margin-top:0.1rem;
    }
` 