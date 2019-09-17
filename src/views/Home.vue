<template>
  <div class="home">
    <HomePageContent></HomePageContent>
  </div>
</template>

<script>

import HomePageContent from '@/components/HomePageContent.vue';


export default {
  name: 'home',
  components: {
    HomePageContent
  }
}
</script>

<style scoped lang="scss">
  .home {
    height: 100%;
    width: 100%;
  }
</style>

