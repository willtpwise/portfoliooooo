<template>
  <article class='home' role="article">
    <page-header></page-header>
    <main role="main">

      <section role="region" aria-labelledby="about">
        <div class="container">
          <h2 id="about">About me</h2>
          <p>
            I’m Will, a Senior Front End Developer working for SiteMinder, a cloud based software company operating across the globe.
          </p>
          <p>
            I'm passionate about the web and pushing the limits of technology. It’s pretty straight forward, I love what I do – and the people I do it with are great too.
          </p>
          <hr class="hr hr--large">
        </div>
      </section>

      <section role="region" aria-labelledby="langs">
        <div class="container">
          <h2 id="langs">Languages</h2>
          <skills></skills>
        </div>
      </section>
      <work></work>

      <section role="region" class="home-contact" aria-labelledby="contact">
        <div class="container">
          <h2 id="contact" class="sr-only">Contact</h2>
          <div class="contact-methods">
            <contact-method v-for='item in contact' :contact='item'></contact-method>
          </div>
        </div>
      </section>
    </main>
  </article>
</template>
<script>
import pageHeader from 'components/header.vue'
import skills from 'components/skills.vue'
import work from 'components/work.vue'
import contactMethod from 'components/contact-method.vue'
export default {
  name: 'home',

  components: {
    pageHeader,
    skills,
    work,
    contactMethod
  },

  data () {
    return {
      contact: [
        {
          name: 'Phone',
          icon: 'fa-phone',
          link: {
            href: 'tel:0448509543',
            label: '0448 509 543'
          }
        },
        {
          name: 'Email',
          icon: 'fa-send',
          link: {
            href: 'mailto:will@williamwise.net',
            label: 'will@williamwise.net'
          }
        },
        {
          name: 'Resume',
          icon: 'fa-file-pdf-o',
          link: {
            href: '/static/william-wise.pdf',
            label: 'Download Resume'
          }
        }
      ]
    }
  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.home {

  .home-contact {
    padding: 45px 0;
  }

  .contact-methods {
    display: flex;
    flex-flow: row wrap;

    .contact-method {
      width: 33.333%;

      &:first-child {
        border-right: none;
      }
    }

    @media #{$tablet} {
      .contact-method {
        width: 100%;
        &:first-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
