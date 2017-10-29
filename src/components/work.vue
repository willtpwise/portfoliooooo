<template>
  <section role="section" class="work_component" aria-labelledby="work">
    <div class="container">
      <h2 id="work">Work</h2>
      <work-item v-if="work" v-for='(item, index) in work' :work='item' :index="index"></work-item>
    </div>
  </section>
</template>
<script>
import workItem from './work-item.vue'
import work from './../../static/work/index.js'
export default {
  name: 'work',

  data () {
    return {
      work: work
    }
  },

  components: {
    workItem
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.work_component {
  padding: 45px 0;
  background: $primary;
  color: $primary-inverse;
  background-image: url('/static/red-splash.jpg');

  .work-periods {
    display: flex;
    flex-flow: row wrap;

    .work-period {
      display: flex;
      flex-flow: column wrap;

      .work-year {

      }
    }
  }
}
</style>
