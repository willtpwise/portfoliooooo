<template>
  <article class='company' role="article">
    <page-header :heading='company.name' :from="from" :to="to"></page-header>
    <main role="main">
      <section role="region" class="company-projects" aria-labelledby="projects">
        <div class="container">
          <h2 id="projects">Projects with {{company.name}}</h2>
        </div>
        <div class="company-project" v-for="project in company.projects">
          <div class="container">
            <project :project='project'></project>
          </div>
        </div>
      </section>
      <role :roles='company.roles' class="company-role"></role>
      <read-more :current='index'></read-more>
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
      if (work[this.$route.params.company]) {
        return work[this.$route.params.company]
      } else {
        this.$router.push('/not-found')
      }
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
