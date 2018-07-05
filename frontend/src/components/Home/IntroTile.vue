<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class IntroTile extends Vue {
  title = 'Will Wise'
  role = 'front end dev'

  scrollToFirstSection () {
    const firstSection = this.$el.parentNode.querySelector('.home-work')
    if (firstSection) {
      firstSection.scrollIntoView()
    } else {
      console.error('Unable to find suitable el to scroll to')
    }
  }
}
</script>

<template>
  <header class="intro">
    <div class="intro-content">
      <h1>{{title}}</h1>
      <p>{{role}}</p>
    </div>

    <div @click="scrollToFirstSection" class="go-down" aria-hidden="true"></div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.intro {
  background: $color-butter;
  padding: $space;
  display: grid;
  position: relative;

  $cutout-size: 120px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 100%;
  }

  &:before {
    border-left: $cutout-size / 2 solid $color-butter;
    border-bottom: $cutout-size / 2 solid $color-butter;
  }

  &:after {
    background: $color-parchment;
    border-radius: 50%;
    width: $cutout-size;
    height: $cutout-size;
  }
}

.go-down {
  position: absolute;
  bottom: 1.5em;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  cursor: pointer;

  // The angle el
  &:before,
  &:after {
    content: '';
    height: 3px;
    width: 1.5em;
    background: $color-black;
    position: absolute;
    display: inline-block;
    border-radius: 4px;
  }

  // The left angle
  &:before {
    right: -4px;
    transform: rotate(40deg);
  }

  // The right angle
  &:after {
    left: -4px;
    transform: rotate(-40deg);
  }
}

.intro-content {
  text-align: center;
  margin: auto;
  transform: rotate(-5deg);
}

h1 {
  @include font-featured-primary ();
  font-size: 3em;
  text-transform: none;
  margin: 0;
}

p {
  margin: 0;
  font-size: 1.2em;
}

@media screen and (max-width: $break-sm) {
  .intro {
    min-height: 100vh;
  }

  .go-down {
    display: block;
  }
}
</style>
