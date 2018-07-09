<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Container extends Vue {
  @Prop({ default: false }) small
}
</script>

<template>
  <div class="container" :class="{ 'container--small': small }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 2em;
}

.container--small {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
