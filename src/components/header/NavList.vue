<template>
    <div>
        <ul class="nav-container">
            <li class="father">
                <div class="brother-showing">
                    首页
                </div>
            </li>
             <li class="father">
                <div class="brother-showing">
                    食品
                </div>
                <div class="element">
                    <div class="nav-item-container">
                        <div>
                            <img src="//img.hicdn.cn/item/201712/12071943527289.jpeg@150w.webp" alt="">
                            <p>111</p>
                        </div>
                        <div>
                            <img src="//img.hicdn.cn/item/201603/03021027304185.jpg@100w.webp" alt="">
                            <p>222</p>
                        </div>
                        <div>
                            <img src="//img.hicdn.cn/itemApply/201808/08180959441238.jpg@150w.webp" alt="">
                            <p>333</p>
                        </div>
                        <div>
                            <img src="//img.hicdn.cn/item/201603/03021030574482.jpg@100w.webp" alt="">
                            <p>444</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="father">
                <div class="brother-showing">
                    用品
                </div>
                <div class="element">
                     <div class="nav-item-container">
                        <div>
                            <img src="http://thyrsi.com/t6/361/1535005884x-1404775491.png" alt="">
                            <p>家具服装</p>
                        </div>
                        <div>
                            <img src="http://thyrsi.com/t6/361/1535005904x-1404775491.png" alt="">
                            <p>内衣搭配</p>
                        </div>
                        <div>
                            <img src="http://thyrsi.com/t6/361/1535005918x-1404775491.png" alt="">
                            <p>小童服装</p>
                        </div>
                        <div>
                            <img src="http://thyrsi.com/t6/361/1535005934x-1404775491.png" alt="">
                            <p>新生儿服装</p>
                        </div>
                        <div>
                            <img src="http://thyrsi.com/t6/361/1535005954x-1404775491.png" alt="">
                            <p>中大童服装</p>
                        </div>
                    </div>
                </div>
            </li>
             <li class="father">
                <div class="brother-showing">
                    纸品
                </div>
                <div class="element">
                    这里是纸品
                </div>
            </li>
             <li class="father">
                <div class="brother-showing">
                    玩具
                </div>
                <div class="element">
                    这里是玩具
                </div>
            </li>
             <li class="father">
                <div class="brother-showing">
                    服装
                </div>
                <div class="element">
                    这里是服装
                </div>
            </li>
        </ul>
    </div>
        
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped lang="scss">
 $themColor : rgb(255, 106,105);
    .nav-container{
        li{
            padding: 0px 30px;
            cursor: pointer;
            height: 40px;
            line-height: 40px;
        }
    }
    .element{
        display:none;
        z-index: 999;
        position: absolute;
        padding: 20px 0px;
        background-color: #ffffff;
        width: 100%;
        left: 0;
        border-top: 1px solid #cecece;
        .nav-item-container{
            align-items: center;
            justify-content: center;
            display: flex;
            div{
                width: 90px;
                height: 70px;
                margin-left: 20px;
                text-align: center;
                font-size: 12px;
                img{
                    max-width: 100%;
                    max-height: 60px;
                    display: block;
                    margin: 0 auto;
                    min-height: 40px;
                }
            }
        }
        
    }
    .father:hover{
        .brother-showing{
            color: $themColor;
            border-bottom: 2px solid $themColor;
        }
    }
    .father:hover .element{
        display:block ;
    }
</style>

