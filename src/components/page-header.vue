<template>
  <header class='page-header'>
    <div class="container page-header-content">
      <h1 class="page-header-title">{{heading}}</h1>
      <p class="page-header-subtitle subtitle" v-if="subHeading" v-html="subHeading"></p>
      <p class="page-header-subtitle subtitle" v-if="from">
        <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;
        <duration :from='from' :to='to'></duration>
      </p>
    </div>
    <div class="page-header-bg"></div>
  </header>
</template>
<script>
import duration from 'components/duration.vue'
export default {
  name: 'page-header',

  props: [
    'heading',
    'subHeading',
    'from',
    'to'
  ],

  components: {
    duration
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.page-header {
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 100;

  .page-header-content {
    position: relative;
    z-index: 100;
    padding: 130px 20px;
    text-align: left;
  }

  .page-header-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/static/red-splash.jpg');
    background-position: center;
    background-attachment: scroll;
    transform: skewY(-5deg);
    transform-origin: top left;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-image: linear-gradient(transparent, rgba(#fff, 0.2))
    }
  }
}
</style>
