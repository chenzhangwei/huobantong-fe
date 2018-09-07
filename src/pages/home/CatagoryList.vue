<template>
    <div class="category">
        <draggable :options="{animation:500,disabled:edit,sort:true,group:'catagory'}" :class="pointerOrMove" @update="datadragEnd" v-model="catagoryList">
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
                                <div>{{pro.prductName}}</div>
                                <span>￥{{pro.price}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    data(){
        return{
            catagoryList:[],
        }
    },
    components:{
        draggable
    },
    props:['edit','pointerOrMove'],
    created() {
        this.$fetch('static/api/home/catagoryList.json')
            .then(response=>{
                this.catagoryList = response.catagoryList
            })
            .catch(error=>{
                console.log(error)
            })
    },
    computed:{
      
    },
    mounted () {
        //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
        document.body.ondrop = function (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    },
    methods:{
        datadragEnd (evt) {
            evt.preventDefault();
            console.log('拖动前的索引 :' + evt.oldIndex)
            console.log('拖动后的索引 :' + evt.newIndex)
            console.log(JSON.stringify(this.catagoryList))
        }
    }
}
</script>
<style scoped lang="scss">
    .category{
        .pointer{
            cursor: pointer;
        }
        .move{
            cursor: move;
        }
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
                    padding:0px 5px;
                    padding-top: 25px;
                    .item-img{
                        box-sizing: border-box;
                        text-align: center;
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

