<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppLogo extends Vue {
  text = "Will Wise"
}
</script>

<template>
  <router-link to="/" title="Home" class="logo">
    {{text}}
  </router-link>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.logo {
  @include font-featured-secondary ();
  font-size: 1.8em;
  color: $color-black;
}
</style>
