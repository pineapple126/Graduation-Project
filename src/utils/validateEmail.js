export default function validateEmail(email) {
  // 邮箱验证正则
  var reg = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/;
  return reg.test(email);
}
