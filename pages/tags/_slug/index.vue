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
  import meta from "@/meta/meta";
    export default {
        head() {
            return {
                title: "タグ関連一覧 | tameblog",
                meta: [...meta({
                    description: "タグ関連一覧"
                })]
            }
        },
        async asyncData ({ $content, params }) {
            const relatedArticles = await $content('categories', { deep: true }).where({'tags': {$contains: [params.slug]}}).sortBy('date', 'desc').fetch()
            return {
                relatedArticles
            }
        }
    }
</script>

<style scoped></style>
