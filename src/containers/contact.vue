<template>
  <article class="contact">
    <page-header heading="Contact"></page-header>
    <main role="main" class="contact-body">
      <div class="container">
        <contact-method></contact-method>
      </div>
    </main>
  </article>
</template>
<script>
import work from './../../static/work/index.js'
import pageHeader from 'components/page-header.vue'
import role from 'components/role.vue'
import project from 'components/project.vue'
import readMore from 'components/read-more.vue'
import duration from 'components/duration.vue'
export default {
  name: 'company',

  components: {
    pageHeader,
    project,
    role,
    readMore,
    duration
  },

  data () {
    return {
      work: work
    }
  },

  computed: {
    company () {
      return work[this.$route.params.company]
    },

    from () {
      return this.company.roles[0].from
    },

    to () {
      return this.company.roles[this.company.roles.length - 1].to
    },

    index () {
      return this.$route.params.company
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.company {
  .company-projects {
    padding: 45px 0;
  }
}
</style>
