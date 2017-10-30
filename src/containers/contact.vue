<template>
  <article class="contact" role="article">
    <page-header heading="Contact"></page-header>
    <main role="main" class="contact-body">
      <section class="contact-type">
        <div class="container">
          <h2>Get in touch</h2>
          <div class="contact-methods">
            <contact-method v-for='item in contact' :contact='item'></contact-method>
          </div>
        </div>
      </section>

      <section class="contact-type">
        <div class="container">
          <h2>Resume</h2>
          <div class="contact-methods">
            <contact-method v-for='item in downloads' :contact='item'></contact-method>
          </div>
        </div>
      </section>

      <section class="contact-type">
        <div class="container">
          <h2>Social</h2>
          <div class="contact-methods">
            <contact-method v-for='item in social' :contact='item'></contact-method>
          </div>
        </div>
      </section>
    </main>
  </article>
</template>
<script>
import pageHeader from 'components/page-header.vue'
import contactMethod from 'components/contact-method.vue'
export default {
  name: 'company',

  components: {
    pageHeader,
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
        }
      ],
      downloads: [
        {
          name: 'Resume',
          icon: 'fa-file-pdf-o',
          link: {
            href: '/static/william-wise.pdf',
            label: 'Download Resume'
          }
        }
      ],
      social: [
        {
          name: 'LinkedIn',
          icon: 'fa-linkedin-square',
          link: {
            href: 'https://www.linkedin.com/in/will-wise-2a07bb6b/',
            label: 'LinkedIn'
          }
        },
        {
          name: 'GitHub',
          icon: 'fa-github',
          link: {
            href: 'https://github.com/willtpwise',
            label: 'GitHub'
          }
        }
      ]
    }
  },

  computed: {

  }
}
</script>
<style lang='scss'>
@import './../assets/variables.scss';
.contact {
  .contact-body {
    padding-top: 60px;
  }

  .contact-type {
    padding-top: 45px;

    &:nth-child(even) {
      background: #f2f2f2;
    }

    h2 {
      padding-bottom: 0;
    }
  }

  .contact-methods {
    display: flex;
    flex-flow: row wrap;

    .contact-method {
      width: 50%;

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
