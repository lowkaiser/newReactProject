import styled from "styled-components";
export const MineCss = styled.div`
  width: 100%;
  height: 100%;
  overflow-y:auto;

  .subHeader {
        margin-top:.4rem;
        height:1rem;
        background:#fff;
        display:flex;
        .personal-user-img {
            width:.8rem;
            margin:20px 15px;
            img{
               width:100%;
            }
       
        }
        .personal-user-info {
            box-sizing: border-box;
            width:2rem;
            padding-top: 0.2rem;
            overflow: hidden;
            background:#fff;
            .personal-name {
                background:#fff;
                box-sizing: border-box;
                height: 0.3rem;
                line-height: 0.3rem;
                position: relative;
                width: 2rem;
                display: flex;
                .nick-name {
                box-sizing: border-box;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 2rem;
                font-weight: 700;
                font-size: 0.2rem;
                height: 0.3rem;
                }
                .change-user {
                box-sizing: border-box;
                width: .8rem;
                text-align: left;
                }
            }
            .h5-text {
                box-sizing: border-box;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                line-height: 0.25rem;
                height: 0.25rem;
                color: #999;
                font-size: 0.12rem;
            }
            .renzheng {
                text-decoration: none;
                color: #efab17;
                display: block;
                border-radius: 0.04rem;
                height: 0.18rem;
                width: .55rem;
                border: 0.005rem solid #efab17;
                text-align: center;
                overflow: hidden;
                line-height: 0.16rem;
                font-size: 0.1rem;
            }
        }
    }
    .personal-base {
      width: 3.2rem;
      height: .8rem;
      padding: 0.1rem 0.15rem;
      background: #fff;
      display: flex;
      justify-content: space-between;

      .base-box {
        width: .7rem;
        height: .6rem;
        text-align: center;

        .base-info {
            width: .7rem;
            height: 0.35rem;
            line-height: 0.35rem;
            font-weight: 700;
            .iconwodedingdan{
                color:yellow;
                font-size:28px;
            }
            .iconredpacket{
                color:salmon;
                font-size:28px;
            }
          }
          .base-title {
            width: .7rem;
            height: 0.25rem;
            line-height: 0.25rem;
          }
          .h5-text {
            box-sizing: border-box;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 0.25rem;
            height: 0.25rem;
            color: #999;
            font-size: 0.12rem;
          }

      }
     
    }
  }
  .personal-pay-show{
        width:100%;
        overflow: hidden;
        padding: .1rem .15rem;
        background: #fff;
    }
    .personal-pay-show .personal-pay{
        width:100%;
        overflow: hidden;
        background: linear-gradient(90deg,#ffc620,#fda804);
        padding: .1rem;
        position: relative;
        border-radius: .05rem;
        em{
            position: absolute;
            right: 0;
            top: 60%;
            transform: translateY(-50%);
            margin-right: .15rem;
            display: block;
            padding: 0 .15rem;
            line-height: .25rem;
            border: .005rem solid #efab17;
            color: #efab17;
            border-radius: .175rem;
            background: #fff;
           
        }
        
        h3{
            line-height: .2rem;
            color: #fff;
        }
        p{
            line-height: .45rem;
            font-size: .15rem;
            color: #fff;
        }
    }
    .mgt20 {
        margin-top: .05rem!important;
    }
    .personal-list{
        width:100%;
        overflow: hidden;

        ul{
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;

            li{
                width: 3rem;
                padding-left:.3rem;
                height: .4rem;
                border-bottom: .005rem solid #e6e6e6;

                .link-box{
                    width: 2.7rem;
                    height: .49rem;
                    display: flex;
                    line-height: .49rem;

                    .link-name{
                        width: 2rem;
                        font-size: .16rem;
                    }

                    .link-detail{
                        text-align: right;
                        width: 1rem;
                        span{
                            color: #ff6767;
                        }

                        em{
                            color: #999;
                        }
                    }
                }
            }
        }


    }
    
    .person-call{
        margin-top: .15rem;
        width: 3rem;
        height: .5rem;
        line-height: .44rem;
        text-align: center;
        color: #999;

        a{
            color: #3e95fe;
        }
    }
    
`;
