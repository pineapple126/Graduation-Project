<template>
  <el-form
    class="send-email"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
  >
    <el-form-item label="发件人邮箱" prop="username">
      <el-input
        v-model="ruleForm.username"
        placeholder="请输入发件人邮箱"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="正文" prop="contents">
      <el-input
        v-model="ruleForm.contents"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5 }"
        placeholder="请输入内容"
        clearable
      >
      </el-input>
    </el-form-item>
    <el-form-item label="收件人邮箱" prop="send">
      <el-input
        v-model="ruleForm.send"
        placeholder="请输入收件人邮箱"
        clearable
      ></el-input>
    </el-form-item>
    <el-button type="primary" @click="handleSendEmail">
      {{ propValue }}
    </el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form>
</template>

<script>
import validateEmail from "@/utils/validateEmail";
import { mapState } from "vuex";

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
        return callback(new Error("邮箱不能为空"));
      }
      if (!validateEmail(value)) {
        callback(new Error("请输入正确的邮箱账号"));
      } else {
        callback();
      }
    };
    var checkContents = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮件内容"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        contents: "",
        send: "",
      },
      rules: {
        username: [
          { validator: validateEmailInForm, required: true, trigger: "blur" },
        ],
        contents: [
          { validator: checkContents, required: true, trigger: "blur" },
        ],
        send: [
          { validator: validateEmailInForm, required: true, trigger: "blur" },
        ],
      },
    };
  },
  computed: mapState(["requestURL"]),
  methods: {
    handleSendEmail() {
      this.axios({
        method: "post",
        url: this.requestURL + "/email",
        withCredentials: true,
        data: {
          username: this.ruleForm.username,
          host: "smtp.qq.com",
          contents: this.ruleForm.contents,
          send: this.ruleForm.send,
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

  el-input {
    margin-left: 20px;
  }
}
</style>
