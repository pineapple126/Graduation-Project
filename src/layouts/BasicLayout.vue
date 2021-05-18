<!-- 
  <template>
    <el-container>
      <el-aside width="256px">
        <SiderMenu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </template>
-->

<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
// import SiderMenu from "./SiderMenu";

export default {
  components: {
    Header,
    Footer,
    // SiderMenu,
  },
};
</script>

<style lang="scss" scoped>
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-header {
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container .el-aside {
  line-height: 320px;
}
</style>
