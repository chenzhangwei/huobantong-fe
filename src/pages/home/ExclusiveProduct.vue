<!--独家产品-->
<template>
    <div>
        <div class="exclusive-product-content">
            <p class="content-header">独家产品 <span>exclusive products</span></p>
            <div class="content-main">
                <div class="left">
                    <p class="product-name">
                        {{leftProduct.productTitle}}
                    </p>
                    <p class="price product-price">￥{{leftProduct.productPrice}}</p>
                    <div class="product-img">
                        <img v-lazy="leftProduct.productImg" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="item"  v-for="(item, index) in exclusiveProductList" :key="index">
                        <p>{{item.productTitle}}</p>
                        <div class="item-info">
                            <div class="item-info-price price">￥{{item.productPrice}}</div>
                            <div class="item-info-img">
                                <img v-lazy="item.productImg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                exclusiveProductList:[],
                leftProduct:{}
            }
        },
        created() {
            this.$fetch('static/api/home/exclusiveProductList.json')
            .then(response=>{
                this.exclusiveProductList = response.exclusiveProductList
                this.leftProduct = response.leftProduct
            })
            .catch(error=>{
                console.log(error)
            })
        },
    }
</script>

<style scoped lang="scss">
    $exclusiveTheme : rgb(255,169,169);
    // $exclusiveTheme : rgb(255, 94, 94);
    $priceColor:rgb(255, 94, 94);
    .price{
        color:$priceColor;
        font-weight: bold;
        font-size: 14px;
        text-align: left;
        margin-top: 6px;
    }
    .exclusive-product-content{
        margin-top: 30px;
        background-color: $exclusiveTheme;
        padding: 10px;
        .content-header{
            color: #ffffff;
            font-size: 18px;
            text-align: left;
            padding: 0px;
            margin: 0px;
            margin-bottom: 10px;
            span{
                font-size: 14px;
            }
        }
        .content-main{
            height: 380px;
            background-color: #ffffff;
            .left{
                width: 220px;
                // border-right:1px solid #cecece;
                padding: 10px;
                float: left;
                box-sizing: border-box;
                .product-name{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    font-size: 14px;
                    text-align: left;
                }
                .product-img{
                    box-sizing: border-box;
                    padding: 10px;
                    img{
                        width: 100%;
                        box-sizing: border-box;
                        cursor: pointer;
                    }
                }
            }
            .right{
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                .item{
                    width: 237px;
                    height: 189px;
                    border-left: 1px solid #cecece;
                    border-bottom: 1px solid #cecece;
                    box-sizing: border-box;
                    padding: 10px;
                    cursor: pointer;
                    p{
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        font-size: 14px;
                        text-align: left;
                    }
                    .item-info{
                       display: flex;
                       .item-info-img{
                           img{
                               margin: 5px 10px;
                               width: 100%;
                               width: 150px;
                               height: 130px;
                           }
                       }
                    }
                }
                div:nth-child(n+5){
                    border-bottom: none;
                }
            }
        }
    }
</style>
