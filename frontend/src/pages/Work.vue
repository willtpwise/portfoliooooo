<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, Action, namespace } from 'vuex-class'
import SetPageMeta from '@/utils/SetPageMeta'
import Card from '@/components/Card'
import Container from '@/components/Container'
import AppSection from '@/components/AppSection'
import PageTitle from '@/components/PageTitle'
import { get } from 'lodash'

const WorkStore = namespace('Work')

@Component({
  components: {
    Card,
    Container,
    AppSection,
    PageTitle
  }
})
export default class Work extends Vue {
  @WorkStore.Action fetchWorkItems
  @WorkStore.State workItems

  title = 'My work'
  subTitle = 'Samples of my work as a developer'

  loadSuitableImage (workItem) {
    const firstSnap = get(workItem, 'projects[0].snaps[0].src')
    return firstSnap
  }

  created () {
    this.fetchWorkItems()

    SetPageMeta({
      title: 'My work',
      desc: 'Examples of my work as a front end developer'
    })
  }
}
</script>

<template>
  <div class="work">
    <page-title :heading="title" :sub="subTitle" />

    <app-section class="work-feed">
      <container>
        <card
          v-for="(item, slug) in workItems"
          :key="slug"
          :title="item.name"
          :body="item.description"
          :url="`/work/${slug}/`"
          :image="loadSuitableImage(item)">
        </card>
      </container>
    </app-section>
  </div>
</template>

<style lang="scss" scoped>

/* deep */ .work-feed > .container {
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  grid-template-rows: auto;
}
</style>
