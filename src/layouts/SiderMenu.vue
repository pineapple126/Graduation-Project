<template>
  <div class="sider-menu">
    <div class="title">
      <i class="el-icon-s-home"></i>
      <span>毕业设计</span>
    </div>
    <el-menu
      default-active="1-1"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>设计机器人</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">可视化拖拽组件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sider-menu {
  height: 100%;
  background-color: rgb(84, 92, 100);
}

.title {
  height: 64px;
  line-height: 64px;
  background-color: #333;
  color: #fff;
  & > span {
    display: inline-block;
    margin-left: 10px;
  }
}

.el-menu-vertical {
  border-right-width: 0px;
}
</style>
