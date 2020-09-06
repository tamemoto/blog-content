<template>
  <v-container fluid>
    <div
      v-if="lists"
      class="d-flex flex-wrap justify-center"
    >
      <ObjectColumnsList :lists="lists"/>
    </div>
  </v-container>
</template>

<script>
export default {
    async asyncData ({ $content }) {
        const lists = await $content('categories', { deep: true }).fetch()
        return {
            lists
        }
    }
}
</script>

<style scoped>
</style>
