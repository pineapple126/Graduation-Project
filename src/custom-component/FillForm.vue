<template>
  <el-form
    class="fill-form"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
  >
    <el-form-item label="表单链接" prop="formlink">
      <el-input
        v-model="ruleForm.formlink"
        placeholder="请输入表单链接"
        clearable
      ></el-input>
    </el-form-item>
    <el-button type="primary" @click="handleFillForm">
      {{ propValue }}
    </el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      default: "",
    },
  },
  data() {
    var validateFormlink = (rule, value, callback) => {
      if (!value) {
        callback(new Error("链接不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        formlink: "",
      },
      rules: {
        formlink: [
          { validator: validateFormlink, required: true, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleFillForm() {
      this.axios({
        method: "post",
        url: "http://127.0.0.1:5000/email",
        withCredentials: true,
        data: {
          formlink: this.formlink,
          host: "smtp.qq.com",
        },
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.fill-form {
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
  padding: 20px;

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
