<template>
  <el-form
    class="login-mailbox"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
  >
    <el-form-item label="邮箱账号" prop="username">
      <el-input
        v-model="ruleForm.username"
        placeholder="请输入邮箱账号"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱密码" prop="password">
      <el-input
        v-model="ruleForm.password"
        placeholder="请输入邮箱密码"
        show-password
      ></el-input>
    </el-form-item>
    <el-button type="primary" @click="handleLoginMailbox">
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
    var validateEmailInForm = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱账号不能为空"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { validator: validateEmailInForm, required: true, trigger: "blur" },
        ],
        password: [
          { validator: validatePassword, required: true, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleLoginMailbox() {
      this.axios({
        method: "post",
        url: "http://127.0.0.1:5000/denglu",
        withCredentials: true,
        data: {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
        },
      })
        .then((res) => {
          alert(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login-mailbox {
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
