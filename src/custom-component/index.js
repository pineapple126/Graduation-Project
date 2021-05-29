import Vue from "vue";

const components = [
  "Picture",
  "VText",
  "VButton",
  "Group",
  "RectShape",
  "SendEmail",
  "LoginMailbox",
  "GenerateExcel",
  "FillForm",
];

components.forEach((key) => {
  Vue.component(key, () => import(`@/custom-component/${key}`));
});
