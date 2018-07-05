<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Container extends Vue {

}
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 2em;
}
</style>
