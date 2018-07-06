<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, Action, namespace } from 'vuex-class'
import SetPageMeta from '@/utils/SetPageMeta'
import Card from '@/components/Card'
import Container from '@/components/Container'
import AppSection from '@/components/AppSection'
import PageTitle from '@/components/PageTitle'
import { get } from 'lodash'

const FunStore = namespace('Fun')

@Component({
  components: {
    Card,
    Container,
    AppSection,
    PageTitle
  }
})
export default class Fun extends Vue {
  @FunStore.Action fetchFunItems
  @FunStore.State funItems

  title = 'Just for fun'
  subTitle = `What I've been working on in my spare time`

  loadSuitableImage (funItem) {
    const firstSnap = get(funItem, 'projects[0].snaps[0].src')
    return firstSnap
  }

  created () {
    this.fetchFunItems()

    SetPageMeta({
      title: 'Just for fun',
      desc: `What I've been working on in my spare time`
    })
  }
}
</script>

<template>
  <div class="fun">
    <page-title :heading="title" :sub="subTitle" />

    <app-section class="fun-feed">
      <container>
        <card
          v-for="(item, slug) in funItems"
          :key="slug"
          :title="item.name"
          :body="item.description"
          :url="item.link.href"
          :image="item.graphic.src">
        </card>
      </container>
    </app-section>
  </div>
</template>

<style lang="scss" scoped>

/* deep */ .fun-feed > .container {
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  grid-template-rows: auto;

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 50% 50%;
    }
  }

  @media screen and (max-width: 480px) {
    & {
      display: block;
    }
  }
}
</style>
