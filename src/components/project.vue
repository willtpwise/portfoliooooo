<template>
  <div class='project'>
    <div class='project-body'>
      <h3>{{project.name}}</h3>
      <p v-html='project.desc'></p>
      <div class="project-link">
        <router-link class="button" v-for='link in project.links' :to='link.href'>{{link.label}}</router-link>
      </div>
    </div>
    <div class='project-media'>
      <figure aria-atomic="true">
        <img :src='currentImage.src' :alt='currentImage.alt'>
        <figcaption>
          {{currentImage.caption}}
        </figcaption>
      </figure>
      <ul class="project-nav" aria-label='Image navigation'>
        <li v-for='(index, image) in project.snaps'>
          <button
            @click='switchImage(index)'
            :aria-label="`Switch to image ${index}`"
            ></button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'project',

  props: ['project'],

  data () {
    return {
      currentImageIndex: 0
    }
  },

  computed: {
    currentImage () {
      return this.project.snaps[this.currentImageIndex]
    }
  },

  methods: {
    nextImage () {
      if (this.currentImageIndex + 1 === this.project.snaps.length) {
        this.currentImageIndex = 0
      } else {
        this.currentImageIndex ++
      }
    },

    prevImage () {
      if (this.currentImageIndex === 0) {
        this.currentImageIndex = this.project.snaps.length - 1
      } else {
        this.currentImageIndex --
      }
    }
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

  .project-body,
  .project-media {
    width: 50%;
    margin: auto;
    box-sizing: border-box;
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
