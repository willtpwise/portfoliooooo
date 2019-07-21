<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import RainbowRibbon from '@/components/RainbowRibbon'

@Component({
  components: {
    RainbowRibbon
  }
})
export default class WorkTile extends Vue {
  preTitle = 'Samples of'
  title = 'My work'
  target = '/work/'
}
</script>

<template>
  <section class="work" role="region" id="home-work">
    <router-link :to="target">
      <rainbow-ribbon class="top" />
      <rainbow-ribbon class="bottom" />
      <div class="work-content">
        <p class="pre-title">{{preTitle}}</p>
        <h2 class="title">{{title}}</h2>
      </div>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.work {
  $border-inset: 8px;
  $border-width: 2px;

  border-top-right-radius: 80px;
  padding: $space;
  position: relative;
  background-color: $color-peach;
  background: repeating-linear-gradient(
    140deg,
    $color-peach,
    $color-peach 10px,
    darken($color-peach, 5%) 10px,
    darken($color-peach, 5%) 25px
  );

  &:hover {
    .rainbow {
      height: 5em;
    }
  }

  // The inset border
  &:before {
    content: '';
    width: calc(100% - #{$border-inset + $border-width});
    height: calc(100% - #{$border-inset + $border-width});
    position: absolute;
    top: $border-inset;
    left: 0;
    border-top-right-radius: 75px;
    border: $border-width dashed $color-parchment;
    border-left: none;
    border-bottom: none;
  }
}

a {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  color: $color-parchment;
}

.work-content {
  margin: auto;
  text-align: center;

  .pre-title,
  .title {
    margin: 0;
  }

  .pre-title {
    @include font-featured-secondary ();
    font-size: 1.2em;
    position: relative;
    display: inline-block;
    padding: 0 4px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 10px;
      width: 0.8em;
      border-bottom: 2px solid $color-parchment;
    }

    &:before {
      right: 100%;
    }

    &:after {
      left: 100%;
    }
  }
}

.rainbow {
  width: 120px;
  position: absolute;
  z-index: 3;

  &.top {
    left: 15%;
    top: 0;
  }

  &.bottom {
    right: 15%;
    bottom: 0;
    transform: rotate(180deg);
  }
}

h2 {
  @include font-featured-secondary ();
  font-size: 2.6em;
}

@media screen and (max-width: $break-sm) {
  .work {
    border-radius: 0;

    // The border
    &:before {
      display: none;
    }
  }
}
</style>
