<template>
  <div class="nav">
    <div class="nav-title">
      <el-link href="http://10.2.40.217:8080/" :underline="false">
        毕业设计
      </el-link>
    </div>
    <div class="nav-bar">
      <el-link :underline="false">商城</el-link>
      <el-link :underline="false">社区</el-link>
      <el-link :underline="false">开发者</el-link>
      <el-link :underline="false">工单</el-link>
      <el-dropdown>
        <span class="el-dropdown-link">费用信息</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>费用总览</el-dropdown-item>
          <el-dropdown-item>收支明细</el-dropdown-item>
          <el-dropdown-item>我的订单</el-dropdown-item>
          <el-dropdown-item>发票管理</el-dropdown-item>
          <el-dropdown-item>能力价格</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-bell"></i>
          通知管理
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>费用总览</el-dropdown-item>
          <el-dropdown-item>收支明细</el-dropdown-item>
          <el-dropdown-item>我的订单</el-dropdown-item>
          <el-dropdown-item>发票管理</el-dropdown-item>
          <el-dropdown-item>能力价格</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-s-operation"></i>
          多语言
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>简体中文</el-dropdown-item>
          <el-dropdown-item>English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            size="small"
          ></el-avatar>
        </span>
        <el-dropdown-menu class="el-dropdown-menu" slot="dropdown">
          <el-dropdown-item>我的账户</el-dropdown-item>
          <el-dropdown-item>许可信息</el-dropdown-item>
          <el-dropdown-item>操作日志</el-dropdown-item>
          <el-dropdown-item>我的Key</el-dropdown-item>
          <el-dropdown-item>我的应用</el-dropdown-item>
          <el-dropdown-item>我的卡包</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  padding-right: 12px;
  background-color: #303030;

  .nav-title {
    display: inline-block;
    padding: 0 24px;
    text-align: start;
    line-height: 60px;

    .el-link {
      font-size: 18px;
      color: #f0f0f0;
    }
  }

  .nav-bar {
    float: right;
    line-height: 60px;

    .el-link {
      margin: 0 10px;
      font-size: 14px;
      color: #f0f0f0;
    }

    .el-dropdown {
      margin: 0 12px;
    }

    .el-dropdown-link {
      cursor: pointer;
      color: #f0f0f0;

      .el-avatar {
        text-align: center;
        vertical-align: middle;
      }
    }
  }
}
</style>
