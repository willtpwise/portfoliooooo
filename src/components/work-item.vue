<template>
  <div class="work-item">
    <figure class="work-graphic" aria-atomic="true">
      <!-- <img :src='currentImage.src' :alt='currentImage.caption'> -->
    </figure>
    <div class="work-body">
      <h3>{{work.name}}</h3>
      <p class="work-period">
        <i class="fa fa-calendar" aria-label="Duration of employment"></i>
        <time datetime="20160801">August, 2016</time> - <time datetime="">Present</time>
      </p>
      <p>
        {{work.description}}
      </p>
      <router-link :to='url' class="button">Read more <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'work-item',

  data () {
    return {
      currentImageIndex: 0
    }
  },

  computed: {
    imagePreviews () {
      let images = []
      this.work.samples.forEach((sample) => {
        sample.snaps.forEach((snap) => {
          images.push(snap)
        })
      })
      return images
    },

    currentImage () {
      return this.imagePreviews[this.currentImageIndex]
    },

    url () {
      return '/work/siteminder'
    }
  },

  methods: {
    changeImage () {
      if (this.currentImageIndex + 1 === this.imagePreviews.length) {
        this.currentImageIndex = 0
      } else {
        this.currentImageIndex ++
      }
    }
  },

  mounted () {
    window.setInterval(() => {
      this.changeImage()
    }, 3000)
  },

  props: ['work']
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.work-item {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 35px;

  &:not(:last-child) {
    padding-bottom: 35px;
    border-bottom: 1px solid rgba(#fff, 0.3);
  }

  .work-graphic {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    background: $grey-dark;
    margin: 0;

    img {
      width: 100%;
      height: auto;
    }
  }

  .work-body {
    margin: auto 0;
    text-align: left;
    padding-left: 35px;
    width: calc( 100% - 250px );
    box-sizing: border-box;

    .work-period {
      margin-top: -1.5rem;
      font-size: smaller;

      i {
        margin-right: 0.35em;
      }
    }

  }

  @media #{$tablet} {
    .work-graphic {
      margin: 0 auto 35px auto;
    }
    .work-body {
      width: 100%;
      margin: 0 auto;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
