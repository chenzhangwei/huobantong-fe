<template>
    <div class="category">
        <div v-for="(item, index) in catagoryList" :key="index">
            <div class="category-name">
                    <h3 class="category_tit">{{item.catagoryName}}</h3>
            </div>
            <div class="categoty-content">
                <div class="left">
                    <img v-lazy="item.catagoryImg" alt="">
                </div>
                <div class="right">
                    <div class="item" v-for="(pro, index) in item.productList" :key="index">
                        <div class="item-img">
                            <img v-lazy="pro.productImg" alt="">
                        </div>
                        <div class="item-title">
                            <!-- <p>{{pro.prductName}}</p> -->
                            <div>{{pro.prductName}}</div>
                            <span>￥{{pro.price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            catagoryList:[]
        }
    },
    created() {
        this.$fetch('static/api/home/catagoryList.json')
            .then(response=>{
                this.catagoryList = response.catagoryList
            })
            .catch(error=>{
                console.log(error)
            })
    },
}
</script>
<style scoped lang="scss">
    .category{
        // margin-top: 10px;
        .category-name{
            margin: 0 auto;
            width: 1190px;
            .category_tit{
                position: relative;
                width: 150px;
                height: 45px;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                line-height: 45px;
                padding: 0 30px;
                margin: 0 auto;
                overflow: hidden;
                color:rgb(255, 94, 94);
            }
            .category_tit:before {
                left: 0px;
            }
            .category_tit:before, .category_tit:after {
                content: '';
                position: absolute;
                width: 50px;
                height: 2px;
                display: block;
                background:rgb(255, 94, 94);
                top: 20px;
            }
            .category_tit:after {
                right: 0px;
            }
        }
        .categoty-content{
            width: 100%;
            height: 540px;
            display: flex;
            .left{
                float: left;
                width: 236px;
                height: 540px;
                box-sizing: border-box;
                img{
                    width: 235px;
                    height: 540px;
                    cursor: pointer;
                }
            }
            .right{
                display: flex;
                flex-wrap: wrap;
                .item{
                    width: 238px;
                    border-right: 1px solid #cecece;
                    border-bottom: 1px solid #cecece;
                    border-top: 1px solid #cecece;
                    height: 270px;
                    box-sizing: border-box;
                    cursor: pointer;
                    padding:0px 5px;
                    padding-top: 25px;
                    .item-img{
                        box-sizing: border-box;
                        img{
                           max-width: 100%;
                           max-height: 155px;
                           min-height: 155px;
                        }
                    }
                    .item-title{
                        text-align: left;
                        padding: 0px 14px;
                        font-size: 14px;
                        div{
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            height: 35px;
                        }
                        span{
                            color:rgb(255, 94, 94);
                            display: block;
                            margin-top: 10px;
                            font-size: 16px;
                            font-weight: bold;
                        }
                    }
                }
                div:nth-child(n+5){
                    border-top: none;
                }
            }
        }
    }
   
</style>

