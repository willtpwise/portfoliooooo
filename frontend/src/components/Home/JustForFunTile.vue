<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class JustForFunTile extends Vue {
  title = 'Just for fun'
  target = '/fun/'
}
</script>

<template>
  <section class="fun" role="region">
    <router-link :to="target">
      <div class="fun-features" aria-hidden="true">
        <span class="line" v-for="i in 30"></span>
      </div>
      <h2>{{title}}</h2>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.fun {
  background: $color-azure;
  border-top-left-radius: 80px;
  padding: $space;
  position: relative;

  --ring-size: 120px;
  &:hover {
    --ring-size: 130px;
  }

  $cutout-size: 150px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
  }

  &:before {
    width: $cutout-size;
    height: $cutout-size / 2;
    transform: translateX(50%);
    background: $color-black;
    z-index: -1;
  }

  &:after {
    background: $color-parchment;
    border-radius: 50%;
    width: $cutout-size;
    height: $cutout-size;
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
  overflow: hidden;
  border-radius: inherit;
}

h2 {
  @include font-featured-secondary ();
  margin: auto;
  font-size: 2.6em;
  z-index: 2;
  position: relative;

  &:before,
  &:after {
    content: '';
    @include pos-center ();
    border-radius: 50%;
    z-index: -1;
    transition: all 0.5s ease;
  }

  &:before {
    background: lighten($color-azure, 8%);
    width: var(--ring-size);
    height: var(--ring-size);
  }

  &:after {
    --outer-ring-size: calc(var(--ring-size) + 5px);
    border: lighten($color-azure, 8%) 2px solid;
    width: var(--outer-ring-size);
    height: var(--outer-ring-size);
  }
}

.fun-features {
  @include pos-center ();
  width: 100vw;

  .line {
    @include pos-center ();
    display: block;
    width: 100%;
    height: 1px;
    background: lighten($color-azure, 5%);

    $i: 1;
    @while $i <= 30 {
      &:nth-child(#{$i}) {
        $rotation: $i * (180deg / 30);
        transform: translate(-50%, -50%) rotate($rotation);
      }
      $i: $i + 1;
    }
  }
}

@media screen and (max-width: $break-sm) {
  .fun {
    border-radius: 0;
  }

  .fun-features {
    width: calc(2 * 100vh);
  }
}
</style>
