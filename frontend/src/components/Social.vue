<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
import GitHubIcon from '@/assets/images/GitHub.svg'
import TwitterIcon from '@/assets/images/Twitter.svg'
import LinkedInIcon from '@/assets/images/LinkedIn.svg'

@Component
export default class Social extends Vue {
  socialAccounts = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/willWisedUp',
      icon: TwitterIcon
    },
    {
      name: 'GitHub',
      href: 'https://github.com/willtpwise',
      icon: GitHubIcon
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/will-wise-2a07bb6b/',
      icon: LinkedInIcon
    }
  ]
}
</script>

<template>
  <ul class="social">
    <li v-for="(account, i) in socialAccounts" :key="i">
      <a :href="account.href" :title="account.name">
        <img :src="account.icon" :alt="account.name">
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.social {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: inline-block;
  margin: 0 0.8em;
  padding: 0;
}

a {
  display: inline-block;
}

img {
  width: 1.3em;
  height: 1.3em;
}
</style>
