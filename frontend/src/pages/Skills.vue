<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, Action, namespace } from 'vuex-class'
import SetPageMeta from '@/utils/SetPageMeta'
import Container from '@/components/Container'
import AppSection from '@/components/AppSection'
import PageTitle from '@/components/PageTitle'
import SkillsList from '@/components/SkillsList'

import GraphQLIcon from '@/assets/images/GraphQl.svg'
import TerraformIcon from '@/assets/images/Terraform.png'
import BuildkiteIcon from '@/assets/images/Buildkite.svg'
import JestIcon from '@/assets/images/Jest.svg'
import AgileIcon from '@/assets/images/Agile.png'

const WorkStore = namespace('Work')

@Component({
  components: {
    Container,
    AppSection,
    PageTitle,
    SkillsList
  }
})
export default class Skills extends Vue {

  title = 'Skills'
  subTitle = `Soft & technical skills which I've gained over the years`

  skills = {
    technical: [
      {
        name: 'Vue.js',
        icon: 'devicon-vuejs-plain'
      },
      {
        name: 'React',
        icon: 'devicon-react-original'
      },
      {
        name: 'Angular',
        icon: 'devicon-angularjs-plain'
      },
      {
        name: 'TypeScript',
        icon: 'devicon-typescript-plain'
      },
      {
        name: 'Webpack',
        icon: 'devicon-webpack-plain'
      },
      {
        name: 'AWS',
        icon: 'devicon-amazonwebservices-original'
      },
      {
        name: 'GraphQL',
        img: GraphQLIcon
      },
      {
        name: 'Git',
        icon: 'devicon-git-plain'
      },
      {
        name: 'Node',
        icon: 'devicon-nodejs-plain'
      },
      {
        name: 'PHP',
        icon: 'devicon-php-plain'
      },
      {
        name: 'MongoDB',
        icon: 'devicon-mongodb-plain'
      },
      {
        name: 'MySQL',
        icon: 'devicon-mysql-plain'
      },
      {
        name: 'Docker',
        icon: 'devicon-docker-plain'
      },
      {
        name: 'Terraform',
        img: TerraformIcon
      },
      {
        name: 'Buildkite',
        img: BuildkiteIcon
      },
      {
        name: 'Gulp',
        icon: 'devicon-gulp-plain'
      },
      {
        name: 'Sass',
        icon: 'devicon-sass-original'
      },
      {
        name: 'Less',
        icon: 'devicon-less-plain-wordmark'
      },
      {
        name: 'Mocha',
        icon: 'devicon-mocha-plain'
      },
      {
        name: 'Jest',
        img: JestIcon
      }
    ],
    soft: [
      {
        name: 'Management',
        icon: 'fas fa-chalkboard-teacher'
      },
      {
        name: 'Stakeholder engagement',
        icon: 'fas fa-comment-dots'
      },
      {
        name: 'Mentoring',
        icon: 'fas fa-graduation-cap'
      },
      {
        name: 'Agile',
        img: AgileIcon
      },
      {
        name: 'Project management',
        icon: 'fas fa-project-diagram'
      }
    ]
  }

  created () {
    SetPageMeta({
      title: this.title,
      desc: this.subTitle
    })
  }
}
</script>

<template>
  <div class="skills">
    <page-title :heading="title" :sub="subTitle" />

    <app-section class="skills-tech">
      <container :small="true">
        <h2>Technical skills</h2>
        <skills-list :items="skills.technical" />
      </container>
    </app-section>

    <app-section class="skills-soft">
      <container :small="true">
        <h2>Soft skills</h2>
        <skills-list :items="skills.soft" />
      </container>
    </app-section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/mixins.scss";

.skills section {
  text-align: center;
}

.skills {
  .skills-tech {
    padding-bottom: 60px;
  }

  .skills-soft {
    padding-top: 60px;
    position: relative;

    &:before {
      content: '';
      border-top: 3px dotted $color-azure;
      width: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      max-width: 600px;
    }
  }
}
</style>
