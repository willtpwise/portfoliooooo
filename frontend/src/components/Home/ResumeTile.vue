<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LocationTile extends Vue {
  resume = 'Sydney'
}
</script>

<template>
  <section class="resume" role="region">

  </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";
</style>
