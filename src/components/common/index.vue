<template>
  <div class="hello">
    <h1>index</h1>
    <div class="box"></div>
    <button class="btn" v-test>test</button>
    <ul>
      <li v-for="(item,index) in dataList" :key="index">
        <p>{{item.title}}</p>
      </li>
    </ul>
    <i class="fa fa-user-plus fa-lg"></i>
    <button @click="toPath">toList</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    console.log("run_index");
    axios.all([this.$apis.getTest(), this.$apis.getTopic()]).then(
      axios.spread(function(acct, perms) {
        // 两个请求现在都执行完成
        console.log(acct, perms);
      })
    );

    this.$eventBus.$on("testEvent", res => {
      console.log(res);
    });
  },
  methods: {
    toPath() {
      this.$router.push("/list/1998");
    }
  }
};
</script>
<style lang="scss">
.btn {
  background-color: $baseColor;
}
.box {
  width: r(51);
  height: r(51);
  background: $baseColor;
  @include setRem(padding, 20, 20, 20, 20);
}
</style>

