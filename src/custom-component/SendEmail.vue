<template>
  <button class="send-email" @click="sendEmail">{{ propValue }}123</button>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    sendEmail() {
      this.axios({
        method: "post",
        url: "http://127.0.0.1:5000/email",
        withCredentials: true,
        data: {
          username: "2686000278@qq.com",
          host: "smtp.qq.com",
          contents: "test",
          send: "1289346684@qq.com",
        },
      });
    },
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.send-email {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  width: 100%;
  height: 100%;
  font-size: 14px;

  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
  }

  &:hover {
    background-color: #ecf5ff;
    color: #3a8ee6;
  }
}
</style>
