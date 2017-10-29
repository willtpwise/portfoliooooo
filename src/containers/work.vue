<template>
  <div class='work'>
    <page-header heading='Work' sub-heading="What I've been up to for the past few years"></page-header>
    <div class="work-feed">
      <div class="container">
        <work-item v-if="work" v-for='(item, index) in work' :work='item' :index="index"></work-item>
      </div>
    </div>
  </div>
</template>
<script>
import pageHeader from 'components/page-header.vue'
import workItem from 'components/work-item.vue'
import work from './../../static/work/index.js'
export default {
  name: 'work',

  components: {
    workItem,
    pageHeader
  },

  data () {
    return {
      work: work
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.work {
  .work-feed {
    padding: 45px 0;

    color: $grey;

    .work-item:not(:last-child) {
      border-bottom-color: $grey-light;
    }
  }
}
</style>
