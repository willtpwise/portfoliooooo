<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PageTitle extends Vue {
  @Prop() heading
  @Prop() sub
}
</script>

<template>
  <header role='banner' class="header">
    <div class="header-feature" aria-hidden="true"></div>

    <div class="header-ribbon">
      <div class="header-content">
        <h1 v-if="heading">{{heading}}</h1>
        <p>{{sub}}</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

$ribbon-bg: #fff;
$circle-size: 150px;
$circle-x-offset: 15vw;
$dash-inset: 3px;

.header {
  transform: rotate(-13deg);
  margin-left: -10%;
  margin-top: -10%;
  margin-bottom: 10%;
  width: calc(100% + 4em);
}

.header-feature {
  height: 100px;
  background-color: $color-peach;
  background: repeating-linear-gradient(
    140deg,
    $color-peach,
    $color-peach 10px,
    darken($color-peach, 5%) 10px,
    darken($color-peach, 5%) 25px
  );
}

.header-ribbon {
  background: #fff;
  position: relative;
  box-shadow: 0 0 8px rgba(#000, 0.2);

  // The inset dash
  &:after {
    content: '';
    position: absolute;
    top: $dash-inset;
    left: 0;
    height: calc(100% - #{$dash-inset * 2 + 2px});
    width: 100%;
    border: 1px dashed $color-peach;
  }
}

.header-content {
  padding: 2em 10%;
  position: relative;
  z-index: 3;

  h1 {
    margin: 0 10px 0 0;
  }

  p {
    margin: 0;
    font-size: 0.9em
  }
}
</style>
