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

@Component({
  components: {
    Container,
    AppSection,
    PageTitle
  }
})
export default class Contact extends Vue {
  heading = "Contact"

  details = {
    phone: '0448 509 543',
    email: 'will@williamwise.net',
    resume: '/static/WilliamWiseResume.pdf'
  }

  telLink (tel) {
    const formattedTel = tel.replace(/ /g, '')
    return `tel:${formattedTel}`
  }

  mailLink (email) {
    return `mailto:${email}`
  }

  get subHeading () {
    return `Let's get in touch - ${this.details.phone}`
  }
}
</script>

<template>
  <article class="contact">
    <page-title :heading="heading" :sub="subHeading" />

    <main>
      <app-section class="contact-description">
        <container>
          <h2>Let's get <br> in touch</h2>
          <p>About frontend, coffee or whatever</p>
        </container>
      </app-section>

      <app-section class="contact-details" aria-label="Roles held">
        <container>
          <div v-for="(detail, type) in details" :key="type">
            <strong>{{type}}: </strong>

            <a v-if="type === 'phone'" :href="telLink(detail)">
              {{ detail }}
            </a>

            <a v-if="type === 'email'" :href="mailLink(detail)">
              {{ detail }}
            </a>

            <a v-if="type === 'resume'" :href="detail">
              download
            </a>
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
    margin: 100px 0 80px 0;
  }

  .contact-description {
    border-right: 4px dotted $color-peach;

    h2 {
      @include font-featured-primary ();
      font-size: 4em;
      text-transform: none;
      margin: 0;
    }
  }

  .contact-details,
  .contact-description {
    display: grid;

    > .container {
      margin: auto 0;
    }
  }

  .contact-samples {
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

  .contact-feed {
    background: #fff;

    // Hide's the triangle section dividers in WorkSample.vue
    overflow: hidden;
  }

  @media screen and (max-width: $break-sm) {
    main {
      display: block;
    }

    .contact-description {
      border-right: none;
      border-bottom: 4px dotted $color-peach;
    }
  }
</style>
