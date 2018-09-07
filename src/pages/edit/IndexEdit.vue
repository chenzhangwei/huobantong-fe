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
            <NavList :edit="disabled"/>
        </div>
        <div class="home-slider">
            <theSlider />
        </div>
        <div class="main-container">
               <topFiveProduct/>
               <exclusiveProduct/>
               <CatagoryList :edit="disabled" :pointerOrMove="pointerOrMove"/>
               <el-button type="primary" icon="el-icon-circle-plus-outline">点我添加新的分类</el-button>
        </div>
        <div class="footer">
           <Footer/>
        </div>
        <back-to-top bottom="50px" right="50px">
            <button type="button" class="btn btn-info btn-to-top">
                <i class="el-icon-caret-top"></i>
            </button>
        </back-to-top>
    </div>
</template>
<script>

import draggable from 'vuedraggable'
import theHeader from '../../components/header/TheHeader'
import theSlider from '../../components/slider/TheSlider'
import topFiveProduct from '../home/TopFiveProduct'
import exclusiveProduct from '../home/ExclusiveProduct'
import CatagoryList from '../home/CatagoryList'
import Footer from '../../components/footer/Footer'
import NavList from '../../components/header/NavList'

export default {
    name:"indexEdit",
    data(){
        return{
            adList:[],
            disabled:false,
            pointerOrMove:"move"
        }
    },
    components:{
        theHeader,
        theSlider,
        topFiveProduct,
        exclusiveProduct,
        CatagoryList,
        Footer,
        NavList,
        draggable
    },
    methods: {
    
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/base.scss';
@import '../../assets/scss/pages/layout.scss';
@import '../../assets/scss/element-overwrite.scss';

.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>


