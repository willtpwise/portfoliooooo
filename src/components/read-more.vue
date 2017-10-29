<template>
  <section class="read-more">
    <div class="container">
      <h2>More like this</h2>
      <nav class="read-more-links">
        <div class="read-more-prev">
          <router-link class="button" v-if='prev' :to="prev" :aria-label="`View the previous company, ${work[prev].name}`">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            {{work[prev].name}}
          </router-link>
        </div>
        <div class="read-more-all">
          <router-link class="button" to="/work" exact aria-label="View all of my work">All</router-link>
        </div>
        <div v-if='next' class="read-more-next">
          <router-link class="button" v-if='next' :to="next" :aria-label="`View the next company, ${work[next].name}`">
            {{work[next].name}}
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
import work from './../../static/work/index.js'
export default {
  name: 'read-more',

  props: ['current'],

  data () {
    return {
      work: work
    }
  },

  computed: {
    prev () {
      let keys = Object.keys(this.work)
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === this.current) {
          // If this is the first item, there is no previous
          if (i === 0) {
            return false
          }

          // Return the previous index
          return keys[i - 1]
        }
      }
    },

    next () {
      let keys = Object.keys(this.work)
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === this.current) {
          // If this is the first item, there is no previous
          if (i + 1 === keys.length) {
            return false
          }

          // Return the next index
          return keys[i + 1]
        }
      }
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.read-more {
  padding: 45px 0;
  .read-more-links {
    padding: 35px 0;
    display: flex;
    div {
      width: 33.333%;

      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }

      &:nth-child(2) {
        text-align: center;
      }
    }
  }
}
</style>
