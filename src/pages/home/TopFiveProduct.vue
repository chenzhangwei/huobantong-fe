<template>
    <div class="top-five-content">
        <div class="product-info" v-for="(item, index) in fiveProductList" :key="index">
            <img v-lazy="item.productImg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fiveProductList:[]
        }
    },
    created() {
        this.$fetch('static/api/home/topFiveProduct.json')
            .then(response=>{
                this.fiveProductList = response.topFiveProductList;
            })
            .catch(error=>{
                console.log(error)
            })
    },
}
</script>
<style scoped lang="scss">
.top-five-content{
    display: flex;
    margin-top: 30px;
    .product-info{
        width: 238px;
        height: 250px;
        // border-left: 1px solid #cecece;
        // border-bottom: 1px solid #cecece;
        // border-top: 1px solid #cecece;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            max-width: 238px;
            max-height: 250px;
        }
    }
    .product-info:last-child{
        border-right: 1px solid #cecece;
    }
}
    
</style>
