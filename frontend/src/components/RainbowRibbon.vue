<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class RainbowRibbon extends Vue {
  rainbowColours = [
    'butter',
    'azure',
    'parchment'
  ]

  get displayColours () {
    return [
      ...this.rainbowColours,
      ...this.rainbowColours
    ]
  }
}
</script>

<template>
  <div class="rainbow" aria-hidden="true">
    <span
      v-for="(colour, i) in displayColours"
      :key="i"
      :style="`background: var(--color-${colour})`">
    </span>
  </div>
</template>

<style lang="scss" scoped>
.rainbow {
  width: 170px;
  height: 3em;
  display: flex;
  flex-flow: row nowrap;
  transition: all 0.5s ease;

  span {
    display: block;
    flex: 1;
    height: 100%;
    border-radius: 0 0 15px 15px;
  }
}
</style>
