
<template>
  <div>
    <el-carousel :interval="3000" type="card" height="244px">
      <el-carousel-item v-for="item in imagesbox" :key="item.id">
        <img :src="item.idView" class="banner" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
        imagesbox: [
        { id: 0, idView: require("../../../public/img/1.png") },
        { id: 1, idView: require("../../../public/img/2.jpg") },
        { id: 2, idView: require("../../../public/img/3.jpg") },
        { id: 3, idView: require("../../../public/img/4.jpg") }
      ],
    };
  }
};
</script>

<style lang='scss' scoped>
.banner {
  width: 100%;
}
</style>
