<template>
  <el-form
    class="fill-form"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
  >
    <el-form-item label="字段1" prop="field1">
      <el-input
        v-model="ruleForm.field1"
        placeholder="请输入字段1"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="字段2" prop="field2">
      <el-input
        v-model="ruleForm.field2"
        placeholder="请输入字段2"
        clearable
      ></el-input> </el-form-item
    ><el-form-item label="字段3" prop="field3">
      <el-input
        v-model="ruleForm.field3"
        placeholder="请输入字段3"
        clearable
      ></el-input> </el-form-item
    ><el-form-item label="字段4" prop="field4">
      <el-input
        v-model="ruleForm.field4"
        placeholder="请输入字段4"
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
    var validateField = (rule, value, callback) => {
      if (!value) {
        callback(new Error("字段不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
      },
      rules: {
        field1: [{ validator: validateField, required: true, trigger: "blur" }],
        field2: [{ validator: validateField, required: true, trigger: "blur" }],
        field3: [{ validator: validateField, required: true, trigger: "blur" }],
        field4: [{ validator: validateField, required: true, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleFillForm() {
      this.axios({
        method: "post",
        url: "http://127.0.0.1:5000/form_submit",
        withCredentials: true,
        data: {
          field1: this.ruleForm.field1,
          field2: this.ruleForm.field2,
          field3: this.ruleForm.field3,
          field4: this.ruleForm.field4,
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
