/* eslint-disable no-console */
<template>
  <div class="git-status-wrapper d-flex">
    <ul>
      <li class="icon-holder">
        <font-awesome-icon :icon="['fab', 'github']" class="text-secondary" />
      </li>
      <li class="text-secondary">Username</li>
      <li class="text-secondary">/</li>
      <li class="text-light">
        <a v-if="gitData.html_url" :href="gitData.html_url">@Mamulashvili</a>
      </li>
    </ul>

    <ul>
      <li class="icon-holder">
        <font-awesome-icon
          :icon="['fas', 'code-branch']"
          class="text-secondary"
        />
      </li>
      <li text-light>54</li>
      <li class="text-secondary">commits / 24h</li>
    </ul>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import getGithubService from '@/services/githubService.js'

export default {
  name: 'SideGitStatus',

  data() {
    return {
      gitData: {},
    }
  },

  mounted() {
    this.fetchGithubData()
  },

  methods: {
    async fetchGithubData() {
      const res = await getGithubService.getGithubData()
      const data = await res.data
      this.gitData = data
    },
  },
}
</script>
