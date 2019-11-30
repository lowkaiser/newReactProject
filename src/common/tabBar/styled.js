import styled from "styled-components";

export const Footer = styled.div`
    position:fixed;
    height:0.48rem;
    bottom:0;
    left:0;
    right:0;
    border-top: 1px solid #ccc;
    background: #fff;
    ul{
        height:0.48rem;
        display:flex;
        justify-content:space-around;
        
    }
    li{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-item:center;
    }
    li .anticon{
        font-size:0.26rem;
        text-align:center;
    }
    li span {
        font-size:0.12rem;
    }
    .active{
        color:#ff4c48;
    }
`