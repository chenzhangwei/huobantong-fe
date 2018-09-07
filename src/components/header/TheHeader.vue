<template>
  <div>
    <ul class="header">
      <li><img src="http://thyrsi.com/t6/361/1535003428x1822611233.png" alt=""></li>
      <li>店铺</li>
      <li>订单</li>
      <li>商品订购</li>
      <li>
        <span><img src="//staticonline.hipac.cn/mallpc/common/gaojimendian_13x12.gif" alt=""></span>
        <span class="loginName">{{loginName}}</span>
        <span>设置</span>
        <span><i class="el-icon-caret-bottom"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'theHeader',
  data () {
    return {
      loginName: '爱婴岛湖南供应链'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
  .header{
    background-color: #f1f1f1;
    height: 60px;
    line-height: 60px;
    li{
      text-decoration: none;
      list-style: none;
      float: left;
      margin-left: 50px;
      font-size: 16px;
      &:first-child{
        color:rgb(255,93,94);
        margin: 0px 80px;
        font-size: 24px;
        padding: 5px;
      }
      &:last-child{
        float: right;
        margin-right: 80px;
        font-size: 14px;
        .loginName{
          border-right: 1px solid #cecece;
          padding: 0 10px;
          padding-left: 0px;
        }
        span:last-child{
          font-size: 16px;
        }
      }
    }
  }
</style>
