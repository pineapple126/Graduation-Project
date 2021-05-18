<template>
  <div class="footer">
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "@/components/footer/FooterBar";

export default {
  components: {
    FooterBar,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 44.6px;
  color: rgba(0, 0, 0, 0.65);
}
</style>
