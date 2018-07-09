<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Action, Getter, namespace } from 'vuex-class'
import { get } from 'lodash'
import SetPageMeta from '@/utils/SetPageMeta'
import AppSection from '@/components/AppSection'
import Container from '@/components/Container'
import PageTitle from '@/components/PageTitle'
import CareerHistory from '@/components/Workplace/CareerHistory'
import WorkSample from '@/components/Workplace/WorkSample'

const WorkStore = namespace('Work')

@Component({
  components: {
    Container,
    AppSection,
    PageTitle,
    CareerHistory,
    WorkSample
  }
})
export default class Workplace extends Vue {
  @WorkStore.Action fetchWorkItems
  @WorkStore.Getter getCompanyBySlug

  company = null

  get slug () {
    return this.$route.params.company
  }

  get startDate () {
    return this.company.roles[0].from
  }

  get endDate () {
    const last = this.company.roles.length - 1
    return this.company.roles[last].to
  }

  get lastHeldTitle () {
    const last = this.company.roles.length - 1
    return this.company.roles[last].title
  }

  get subheading () {
    return `${this.startDate} - ${this.endDate} | ${this.lastHeldTitle}`
  }

  findSuitableLink (company) {
    return get(company, 'links[0].href')
  }

  async created () {
    await this.fetchWorkItems()
    this.company = await this.getCompanyBySlug(this.slug)

    SetPageMeta({
      title: this.company.name,
      desc: this.company.description
    })
  }
}
</script>

<template>
  <article class="workplace" v-if="company">
    <page-title :heading="company.name" :sub="subheading" />

    <main>
      <app-section class="workplace-description">
        <container>
          <h2>My work <br> with <br> {{company.name}}</h2>
          <p v-html="company.description"></p>
        </container>
      </app-section>

      <app-section class="workplace-history" aria-label="Roles held">
        <container>
          <career-history :roles="company.roles" />
        </container>
      </app-section>

      <app-section class="workplace-samples">
        <container>
          <div class="workplace-feed">
            <work-sample
              v-for="(sample, i) in company.projects"
              :key="i"
              :heading="sample.name"
              :description="sample.desc"
              :image="sample.snaps[0].src"
              :link="findSuitableLink(sample)">
            </work-sample>
          </div>
        </container>
      </app-section>
    </main>
  </article>
</template>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";
  @import "@/assets/styles/mixins.scss";

  main {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .workplace-description {
    border-right: 4px dotted $color-peach;

    h2 {
      @include font-featured-primary ();
      font-size: 4em;
      text-transform: none;
      margin: 0;
    }
  }

  .workplace-history,
  .workplace-description {
    display: grid;

    > .container {
      margin: auto 0;
    }
  }

  .workplace-samples {
    grid-column-start: 0;
    grid-column-end: span 2;
    margin-top: 3.5em;
    background-color: $color-azure;
    background: repeating-linear-gradient(
      140deg,
      $color-azure,
      $color-azure 10px,
      darken($color-azure, 5%) 10px,
      darken($color-azure, 5%) 25px
    );
  }

  .workplace-feed {
    background: #fff;

    // Hide's the triangle section dividers in WorkSample.vue
    overflow: hidden;
  }

  @media screen and (max-width: $break-sm) {
    main {
      display: block;
    }

    .workplace-description {
      border-right: none;
      border-bottom: 4px dotted $color-peach;

      h2 {
        font-size: 3em;
      }
    }
  }
</style>
