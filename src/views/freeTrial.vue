<template>
  <div class="freeTrial">
    <freeTrialContent></freeTrialContent>
  </div>
</template>

<script>

import freeTrialContent from '@/components/freeTrialContent.vue';


export default {
  name: 'free-trial',
  components: {
    freeTrialContent
  }
}
</script>

<style scoped lang="scss">
  .freeTrial {
    height: 100%;
    width: 100%;
  }
</style>

