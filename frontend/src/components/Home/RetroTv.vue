<script>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class RetroTv extends Vue {

  // Images, representing TV shows
  shows = [
    {
      img: '/static/siteminder-home.png',
      href: '/work/xyz/'
    },
    {
      img: '/static/techspace-home.png',
      href: '/work/xyz/'
    }
  ]

  isChangingShow = false
  currentShowIndex = 0

  get currentShow () {
    return this.shows[this.currentShowIndex]
  }

  nextShow () {
    const max = this.shows.length

    if (this.currentShowIndex + 1 === max) {
      this.currentShowIndex = 0
    } else {
      this.currentShowIndex ++
    }
  }

  cycleShows () {
    window.setInterval(() => {
      this.nextShow()
    }, 5000)
  }

  @Watch('currentShowIndex')
  onShowChange () {
    this.isChangingShow = true
    window.setTimeout(() => {
      this.isChangingShow = false
    }, 1000)
  }

  navigate (url) {
    this.$router.push(url)
  }

  mounted () {
    this.cycleShows()
  }
}
</script>

<template>
  <div class="tv">
    <div class="tv-antenna">
      <div class="tv-antenna-base">
        <div class="tv-aerial"></div>
        <div class="tv-aerial"></div>
      </div>
    </div>
    <router-link class="tv-body" :to="currentShow.href" title="Read more">
      <div class="tv-border">
        <div class="tv-backing">
          <div
            class="tv-screen"
            :class="{ isChangingShow }"
            :style="`background-image: url(${currentShow.img})`">
          </div>
        </div>
        <div class="tv-controls">
          <div>
            <div class="tv-knob"></div>
          </div>
          <div>
            <div class="tv-knob"></div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

$tv-radius: 25px;

.tv {
  --tv-width: 23vw;
  --tv-min-width: 270px;

  position: absolute;
  top: 45%;
  left: 52%;
  width: var(--tv-width);
  min-width: var(--tv-min-width);
  display: flex;
  flex-flow: row wrap;
  transform: rotate(-2deg) translate(-50%, -50%);
  z-index: 1000; // Overlays work on the home page
}

.tv-body {
  width: 100%;
  background: lighten($color-black, 10%);
  border-radius: $tv-radius;
  height: calc(var(--tv-width) * 0.7);
  min-height: calc(var(--tv-min-width) * 0.7);
  position: relative;
}

.tv-border {
  $inset: 3px;
  $size: 2px;
  position: absolute;
  top: $inset;
  left: $inset;
  height: calc(100% - #{($inset + $size / 2) * 2});
  width: calc(100% - #{($inset + $size / 2) * 2});
  border-radius: inherit;
  border: $size inset $color-butter;
  overflow: hidden;
}

.tv-backing {
  background: $color-brigade;
  width: 100%;
  height: 75%;
  position: relative;
  padding: 1.4em;

  // The depth shadow
  &:before {
    content: '';
    @include pos-center ();
    width: 100%;
    height: 100%;
    z-index: 5;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6)
  }
}

.tv-controls {
  height: 25%;
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;

  > div {
    margin: auto 0;
  }

  .tv-knob {
    display: inline-block;
    width: 50%;
    height: 1.4em;
    width: 1.4em;
    background: $color-butter;
    border-radius: 50%;
    border: 2px inset darken($color-butter, 5%);
    position: relative;

    // The center of the dial
    &:after {
      content: '';
      @include pos-center ();
      width: 60%;
      height: 60%;
      border-radius: 50%;
      background: darken($color-butter, 20%);
    }
  }
}

.tv-screen {
  border-radius: 16px;
  background-color: #80aebb;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  filter: grayscale(20%);
  transition: filter 2s ease-in-out;
  cursor: pointer;

  // The depth shadow
  &:before {
    content: '';
    @include pos-center ();
    margin-top: -1px;
    margin-left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    z-index: 5;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.4)
  }

  &.isChangingShow {
    background-color: #000;
    background-image: url('/static/tv-static.gif') !important;
    // The !important overides the inline style dec'
    filter: grayscale(80%);
  }
}

.tv-antenna {
  width: 60px;
  height: 1em;
  border-radius: 50%;
  background: $color-butter;
  margin: 0 auto;
  transform: translateY(50%);
  border: 2px inset $color-butter;

  .tv-aerial {
    position: absolute;
    bottom: calc(100% - 2px);
    height: 110px;
    width: 2px;
    background: #ccc;
    transform-origin: bottom center;

    &:first-child {
      left: 20px;
      transform: rotate(-20deg);
    }

    &:last-child {
      right: 20px;
      transform: rotate(22deg);
      height: 100px;
    }

    // The ball at the end of the aerial
    &:after {
      $size: 8px;

      content: '';
      position: absolute;
      transform: translateX(-50%);
      bottom: calc(100% - #{$size / 2});
      left: 1px;
      width: $size;
      height: $size;
      border-radius: 50%;
      background: inherit;
    }
  }
}
</style>
