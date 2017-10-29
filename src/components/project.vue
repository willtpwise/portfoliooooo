<template>
  <div class='project'>
    <div class='project-body'>
      <h3>{{project.name}}</h3>
      <p v-html='project.desc'></p>
      <div class="project-link">
        <a class="button" v-for='link in project.links' target="_blank" :href='link.href'>{{link.label}}</a>
      </div>
    </div>
    <div class='project-media'>
      <carousel
      :autoplay="true"
      :autoplayTimeout="5000"
      :per-page="1"
      :loop="true">
        <slide v-for="snap in project.snaps">
          <img :src='snap.src' :alt='snap.caption'>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'project',

  props: ['project'],

  components: {
    Carousel,
    Slide
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.project {
  text-align: left;
  display: flex;
  flex-flow: row wrap;
  padding: 35px 0;

  .project-body {
    padding-right: 20px;
  }
  .project-media {
    padding-left: 20px;
  }

  .project-body,
  .project-media {
    width: 50%;
    margin: auto;
    box-sizing: border-box;

    @media #{$tablet} {
      & {
        width: 100%;
        padding: 0;
        padding-bottom: 20px;
      }
    }
  }

  .project-media {
    position: relative;
    figure {
      width: 100%;
      margin: 0;
    }
    figcaption {
      font-size: smaller;
      color: $grey;
      font-style: italic;
      padding: 8px 0;
    }
    img {
      width: 100%;
    }
  }

  .project-nav {
    position: absolute;
    bottom: 3.5rem;
    left: 0;
    text-align: center;
    width: 100%;
    z-index: 3;
    margin: 0;
    padding: 0;

    li {
      display: inline;
      margin: 5px;
      padding: 0;
    }

    button {
      background: rgba(#fff, 0.6);
      border: 1px solid #fff;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      line-height: 0;
      display: inline-block;
      padding: 0;
      transition: all 0.5 ease;
      cursor: pointer;

      &:hover,
      &:focus,
      &.is-active {
        background: #fff;
      }

      &.is-active {
        border-color: $primary;
      }
    }
  }

}
</style>
