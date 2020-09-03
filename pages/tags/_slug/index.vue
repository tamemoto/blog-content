<template>
  <v-container fluid>
    <div
      class="d-flex flex-wrap justify-center"
    >
      <ObjectColumnsList
        :lists="relatedArticles"
      />
    </div>
  </v-container>
</template>

<script>
    export default {
        async asyncData ({ $content, params }) {
            const relatedArticles = await $content('categories', { deep: true }).where({'tags': {$contains: [params.slug]}}).fetch()
            return {
                relatedArticles
            }
        }
    }
</script>

<style scoped></style>
