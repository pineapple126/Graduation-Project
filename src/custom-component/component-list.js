// 公共样式
export const commonStyle = {
  rotate: 0,
  opacity: 1,
};

export const commonAttr = {
  animations: [],
  events: {},
  groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  isLock: false, // 是否锁定组件
};

// 编辑器左侧组件列表
const list = [
  {
    component: "login-mailbox",
    label: "登陆邮箱",
    propValue: "登陆邮箱",
    icon: "login",
    style: {
      width: 360,
      height: 170,
      borderWidth: "",
      borderColor: "",
      borderRadius: "",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      backgroundColor: "",
    },
  },
  {
    component: "send-email",
    label: "发送邮件",
    propValue: "发送邮件",
    icon: "email",
    style: {
      width: 400,
      height: 260,
      borderWidth: "",
      borderColor: "",
      borderRadius: "",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      backgroundColor: "",
    },
  },
  {
    component: "generate-excel",
    label: "自动生成 Excel",
    propValue: "自动生成 Excel",
    icon: "excel",
    style: {
      width: 380,
      height: 225,
      borderWidth: "",
      borderColor: "",
      borderRadius: "",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      backgroundColor: "",
    },
  },
  {
    component: "fill-form",
    label: "自动填写表单",
    propValue: "自动填写表单",
    icon: "form",
    style: {
      width: 360,
      height: 270,
      borderWidth: "",
      borderColor: "",
      borderRadius: "",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      backgroundColor: "",
    },
  },
  {
    component: "v-text",
    label: "文字",
    propValue: "双击编辑文字",
    icon: "wenben",
    style: {
      width: 100,
      height: 34,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
    },
  },
  {
    component: "v-button",
    label: "按钮",
    propValue: "按钮",
    icon: "button",
    style: {
      width: 100,
      height: 34,
      borderWidth: "",
      borderColor: "",
      borderRadius: "",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      backgroundColor: "",
    },
  },
  {
    component: "Picture",
    label: "图片",
    icon: "tupian",
    propValue: require("@/assets/title.jpg"),
    style: {
      width: 300,
      height: 200,
      borderRadius: "",
    },
  },
  {
    component: "rect-shape",
    label: "矩形",
    propValue: "&nbsp;",
    icon: "juxing",
    style: {
      width: 200,
      height: 200,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "center",
      color: "",
      borderColor: "#000",
      borderWidth: 1,
      backgroundColor: "",
      borderStyle: "solid",
      verticalAlign: "middle",
    },
  },
];

for (let i = 0, len = list.length; i < len; i++) {
  const item = list[i];
  item.style = { ...commonStyle, ...item.style };
  list[i] = { ...commonAttr, ...item };
}

export default list;
