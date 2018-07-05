<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AppSection extends Vue {

}
</script>

<template>
  <section class="section" role="region">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding: 2em 0;
}
</style>
