<template>
  <el-form
    class="generate-excel"
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="80px"
  >
    <el-form-item label="字段1" prop="t1">
      <el-input
        v-model="ruleForm.t1"
        placeholder="请输入字段1"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="字段2" prop="t2">
      <el-input
        v-model="ruleForm.t2"
        placeholder="请输入字段2"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="字段3" prop="t3">
      <el-input
        v-model="ruleForm.t3"
        placeholder="请输入字段3"
        clearable
      ></el-input>
    </el-form-item>
    <el-button type="primary" @click="handleGenerateExcel">
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
        return callback(new Error("字段不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        t1: "",
        t2: "",
        t3: "",
      },
      rules: {
        t1: [{ validator: validateField, required: true, trigger: "blur" }],
        t2: [{ validator: validateField, required: true, trigger: "blur" }],
        t3: [{ validator: validateField, required: true, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleGenerateExcel() {
      this.axios({
        method: "post",
        url: "http://127.0.0.1:5000/excel_gene",
        withCredentials: true,
        data: {
          t1: this.ruleForm.t1,
          t2: this.ruleForm.t2,
          t3: this.ruleForm.t3,
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
.generate-excel {
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
