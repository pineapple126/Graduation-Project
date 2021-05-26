<template>
  <div class="components">
    <div @dragstart="handleDragStart" class="component-list">
      <div
        v-for="(item, index) in componentList"
        :key="index"
        class="list"
        draggable
        :data-index="index"
      >
        <span class="iconfont" :class="'icon-' + item.icon"></span>
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="disable-component-list">
      <div
        v-for="(item, index) in disableComponentList"
        :key="index"
        class="disable-list"
        :data-index="index"
      >
        <span class="iconfont" :class="'icon-' + item.icon"></span>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import componentList, { disabledList } from "@/custom-component/component-list";

export default {
  data() {
    return {
      componentList,
      disableComponentList: disabledList,
    };
  },
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData("index", e.target.dataset.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.component-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px 0 20px;

  .list {
    width: 45%;
    border: 1px solid #ddd;
    cursor: grab;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      cursor: grabbing;
    }

    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }

    .icon-wenben,
    .icon-tupian {
      font-size: 18px;
    }
  }
}

.disable-component-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px 20px 20px;

  .disable-list {
    width: 45%;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    text-align: center;
    color: #c0c4cc;
    background-color: #ebeef5;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }

    .icon-wenben,
    .icon-tupian {
      font-size: 18px;
    }
  }
}
</style>
