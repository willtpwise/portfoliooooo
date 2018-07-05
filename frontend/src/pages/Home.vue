<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import SetPageMeta from '@/utils/SetPageMeta'
import IntroTile from '@/components/Home/IntroTile'
import JustForFunTile from '@/components/Home/JustForFunTile'
import WorkTile from '@/components/Home/WorkTile'
import SocialTile from '@/components/Home/SocialTile'
import LocationTile from '@/components/Home/LocationTile'
import RetroTv from '@/components/Home/RetroTv'

@Component({
  components: {
    IntroTile,
    JustForFunTile,
    WorkTile,
    SocialTile,
    LocationTile,
    RetroTv
  }
})
export default class Home extends Vue {
  get headerHeight () {
    const header = document.querySelector('.header')
    if (!header) {
      throw `Unable to find header`
    }

    return header.clientHeight
  }

  offsetHeader () {
    const offset = this.headerHeight || 0
    window.scrollTo(0, offset)
  }

  mounted () {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        this.offsetHeader()
      })
    }, 100)
  }

  created () {
    SetPageMeta({
      desc: 'Front end developer'
    })
  }
}
</script>

<template>
  <article class="home">
    <intro-tile class="home-tile home-intro" />
    <social-tile class="home-tile home-social" />
    <just-for-fun-tile class="home-tile home-fun" />
    <div class="home-tile home-tv">
      <!-- <retro-tv /> -->
    </div>
    <work-tile class="home-tile home-work" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.home {
  display: grid;
  grid-template-columns: repeat(12, calc(100% / 12) [col-start]);
  grid-template-rows: repeat(4, calc(100% / 4) [row-start]);;
  height: 100vh;
  min-height: 550px;
}

.home-intro {
  grid-column-start: 1;
  grid-column-end: span 5;
  grid-row-start: 1;
  grid-row-end: span 2;
}

.home-social {
  grid-column-start: 6;
  grid-column-end: span 12;
  grid-row-start: 1;
  grid-row-end: span 1;
}

.home-tv {
  grid-column-start: 6;
  grid-column-end: span 3;
  grid-row-start: 2;
  grid-row-end: span 1;
  position: relative;
}

.home-fun {
  grid-column-start: 9;
  grid-column-end: span 12;
  grid-row-start: 2;
  grid-row-end: span 4;
}

.home-work {
  grid-column-start: 1;
  grid-column-end: span 8;
  grid-row-start: 3;
  grid-row-end: span 4;
}

.home-location {
  grid-column-start: 6;
  grid-column: span 3;
  grid-row-start: 2;
  grid-row-end: span 1;
  position: relative;
  z-index: 2;
}

@media screen and (max-width: $break-sm) {
  .home {
    display: flex;
    flex-flow: row wrap;
    height: auto;
  }

  .home-tile {
    width: 100%;
  }

  .home-social,
  .home-tv {
    display: none;
  }

  .home-fun {
    order: 3;
  }

  .home-fun,
  .home-work,
  .home-intro {
    min-height: 100vh;
  }
}
</style>
