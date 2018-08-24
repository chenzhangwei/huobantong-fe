<template>
    <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in adList" :key="item.adName">
                    <img :src="item.adUrl" alt="">
                </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    data(){
        return{
             adList:[]
        }
    },
    created() {
        this.$fetch('static/api/home/getAdList.json')
            .then(response=>{
                this.adList = response;
            })
            .catch(error=>{
                console.log(error)
            })
    },
}
</script>
<style lang="scss" scoped>

</style>

