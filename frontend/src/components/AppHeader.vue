<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import AppLogo from '@/components/AppLogo'
import AppNav from '@/components/AppNav'

@Component({
  components: {
    AppLogo,
    AppNav
  }
})
export default class AppHeader extends Vue {
  @Emit('visible')
  whenVisible () { }

  mounted () {
    this.whenVisible()
  }
}
</script>

<template>
  <header class="header">
    <div class="header-col header-logo">
      <app-logo />
    </div>
    <div class="header-col header-nav">
      <app-nav />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  display: grid;
  grid-template-columns: 40% 60%;
  box-shadow: 0 2px 3px rgba(#000, 0.15);
  position: relative;
  z-index: 3000;
  background: $color-parchment;
}

.header-col {
  padding: $space / 4 $space;
  margin: auto 0;
}

.header-nav {
  margin-left: auto;
}

@media screen and (max-width: $break-sm) {
  .header {
    grid-template-columns: 60% 40%;
  }
}
</style>
