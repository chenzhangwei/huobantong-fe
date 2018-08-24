<template>
    <div>
        <div class="header">
            <theHeader/>
        </div>
        <div class="serch-container">
            <div class="left-icon">
                <ul>
                    <li>
                        <div class="icon-img">
                            <img src="http://thyrsi.com/t6/361/1535004006x-1566688712.png" alt="">
                        </div>
                        <div>正品保障</div>
                    </li>
                     <li>
                        <div class="icon-img">
                            <img src="http://thyrsi.com/t6/361/1535003951x-1566688712.png" alt="">
                        </div>
                        <div>PICC承保</div>
                    </li>
                     <li>
                        <div class="icon-img">
                            <img src="http://thyrsi.com/t6/361/1535003964x-1566688712.png" alt="">
                        </div>
                        <div>天天低价</div>
                    </li>
                     <li>
                        <div class="icon-img">
                            <img src="http://thyrsi.com/t6/361/1535003979x-1566688712.png" alt="">
                        </div>
                        <div>无忧售后</div>
                    </li>
                </ul>
            </div>
            <div class="right-serch">
                <div class="serch-input">
                    <el-input placeholder="请输入内容">
                        <template slot="append">搜索</template>
                    </el-input>
                   <span>贝亲</span>
                   <span>合生元</span>
                   <span>飞鹤</span>
                   <span>惠氏</span>
                </div>
                <div class="gouwuche">
                    <span>购物车</span>
                    <span class="my-badge">10</span>
                </div>
            </div>
        </div>
        <div class="home-nav">
            <NavList/>
        </div>
        <div class="home-slider">
            <theSlider />
        </div>
        <div class="main-container">
           <topFiveProduct/>
           <exclusiveProduct/>
           <CatagoryList/>
        </div>
        <div class="footer">
           <Footer/>
        </div>
    </div>
</template>
<script>

import theHeader from '../../components/header/TheHeader'
import theSlider from '../../components/slider/TheSlider'
import topFiveProduct from '../home/TopFiveProduct'
import exclusiveProduct from '../home/ExclusiveProduct'
import CatagoryList from '../home/CatagoryList'
import Footer from '../../components/footer/Footer'
import NavList from '../../components/header/NavList'

export default {
    name:"layout",
    data(){
        return{
            adList:[]
        }
    },
    components:{
        theHeader,
        theSlider,
        topFiveProduct,
        exclusiveProduct,
        CatagoryList,
        Footer,
        NavList
    },
    methods: {
    
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/base.scss';
    //  $themeColor : rgb(255, 106,105);
    .home-nav{
        width: 100%;
        margin: 0 auto;
        text-align: center;
        margin-top: 20px;
        ul{
            display: flex;
            justify-content: center;
            border: none;
        }
    }
    .serch-container{
        width: $w-1190;
        margin: 0 auto;
        display: flex;
        margin-top: 15px;
        justify-content: center;
        .left-icon,.right-serch{
            width: 50%;
            text-align: center;
        }
        .left-icon{
            ul{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin: 0;
                li{
                    list-style: none;
                    padding: 0px 25px;
                    font-size: $fs-12;
                    color: #cecece;
                    text-align: center;
                    cursor: pointer;
                    .icon-img:after{
                        content: '';
                        width: 1px;
                        height: 40px;
                        border-left: 1px solid #cecece;
                        position: absolute;
                        margin-left: 30px;
                    }
                }
                li:last-child{
                    .icon-img{
                        border: none;
                    }
                }
            }
        }
    }
    .right-serch{
        display: flex;
        div:first-child{
            width: 385px;
            height: 34px;
            input{
                height: 34px;
                line-height: 34px;
            }
        }
       .serch-input{
           span{
               margin-left: 5px;
               margin-top: 5px;
               display: inline-block;
               cursor: pointer;
               &:hover{
                   color:$themeColor;
               }
           }
           font-size: $fs-12;
           text-align: left;
           color: #cecece;
       }
       .gouwuche{
            width: 120px;
            height: 34px;
            border:1px solid  $themeColor;
            margin-left: 30px;
            line-height: 34px;
            font-size: $fs-12;
            color: $themeColor;
            .my-badge{
                position: relative;;
                top: 0;
                transform: translateY(-50%) translateX(0px);
                background-color:  $themeColor;
                border-radius: 14px;
                color: #fff;
                display: inline-block;
                font-size: $fs-12;
                height: 14px;
                width: 14px;
                line-height: 14px;
                text-align: center;
                white-space: nowrap;
                border: 1px solid #fff;
                padding: 0.5px;
            }
        }
    }
    .home-slider{
        height: 300px;
        margin-top: 10px;
        width: 100%;
        clear: both;
    }
    .main-container{
        width: $w-1190;
        margin: 0 auto;
        margin-top: 10px;
    }
    .el-input__inner{
        border-color: $themeColor;
    }
    .el-input__inner:hover{
        border-color: $themeColor;
    }
    .el-input-group--prepend .el-input__inner, .el-input-group__append{
        background-color:  $themeColor;
        border-color:  $themeColor;
        color: #ffffff;
    }
    .el-input.is-active .el-input__inner, .el-input__inner:focus{
        border-color: $themeColor;
    }
</style>


