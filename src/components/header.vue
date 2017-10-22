<template>
  <header class='header'>
    <div class="container header-content">
      <h1 class="header-title">William Wise</h1>
      <p class="header-sub subtitle">
        Front End Engineer
      </p>
    </div>
    <div class="header-bg"></div>
  </header>
</template>
<script>
export default {
  name: 'page-header'
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.header {
  color: #fff;
  position: relative;
  min-height: 90vh;
  overflow: hidden;

  .header-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/static/red-splash.jpg');
    transform: skewY(-6deg);
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

  .header-content {
    padding: 150px 20px 100px 20px;
    position: relative;
    z-index: 2;
    text-align: left;

    .header-title {
      font-size: 55px;
    }

    .header-sub {
      font-size: 1.8em;
      font-weight: lighter;
    }
  }
}
</style>
