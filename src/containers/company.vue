<template>
  <article class='company'>
    <page-header :heading='company.name' :sub-heading="duration"></page-header>
    <main role="main">
      <div class="company-project" v-for="project in company.projects">
        <div class="container">
          <project :project='project'></project>
        </div>
      </div>
    </main>
  </article>
</template>
<script>
import work from './../../static/work/index.js'
import pageHeader from 'components/page-header.vue'
import project from 'components/project.vue'
export default {
  name: 'company',

  components: {
    pageHeader,
    project
  },

  data () {
    return {
      work: work
    }
  },

  computed: {
    company () {
      return work['siteminder']
    },

    duration () {
      return '<i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;August, 2016 - Present'
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.company {}
</style>
