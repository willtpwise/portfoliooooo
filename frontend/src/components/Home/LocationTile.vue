<script>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LocationTile extends Vue {
  location = 'Sydney'
}
</script>

<template>
  <section class="location" role="region">
    <div class="opera-house" aria-hidden="true">
      <div class="sails">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- <div class="location-name">
      {{location}}
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .location {
    display: grid;
    // grid-template-columns: 50% 50%;
    padding: $space;

    > * {
      margin: auto;
    }
  }

  .opera-house {
    --sail-size: 100px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;

    .sails {
      position: absolute;
      width: 100%;
      bottom: 30%;
      left: 0;
    }

    // The sails
    span {
      --translate-y: calc(var(--sail-size) * 0.4);
      --rotate-x: 0;

      display: inline-block;
      background: $color-black;
      width: var(--sail-size);
      height: var(--sail-size);
      border-radius: 50%;
      position: absolute;
      bottom:0;
      transform: translateY(var(--translate-y)) rotateY(var(--rotate-x));

      &:before,
      &:after {
        content: '';
        position: absolute;
        background: $color-parchment;
      }

      // The left side cutout
      &:before {
        width: calc(var(--sail-size) * 1.2);
        height: calc(var(--sail-size) * 1.2);
        border-radius: 50%;
        top: 0;
        left: -70%;
      }

      // The bottom side cutout
      &:after {
        width: calc(var(--sail-size) * 1.2);
        height: 48px;
        border-radius: 50%;
        top: 55%;
        left: 10%;
        transform: rotate(-21deg);
      }

      // Each individual sail
      // Note: In reverse DOM order for ease of stacking
      &:nth-child(4) {
        left: 0;
        --sail-size: 40px;
      }
      &:nth-child(3) {
        left: 20px;
        --sail-size: 50px;
      }
      &:nth-child(2) {
        left: 45px;
        --sail-size: 60px;
      }
      &:nth-child(1) {
        left: 105px;
        --sail-size: 55px;
        --rotate-x: 180deg;
      }
    }
  }
</style>
