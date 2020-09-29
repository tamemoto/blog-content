<template>
  <v-container fluid>
    <div
      class="d-flex flex-wrap justify-center"
    >
      <ObjectColumnsList
        :lists="categories"
      />
    </div>
  </v-container>
</template>

<script>
  import meta from "@/meta/meta"
    export default {
        head() {
            return {
                title: "カテゴリー記事一覧 | tameblog",
                meta: [...meta({
                    description: "カテゴリー記事一覧"
                })]
            }
        },
        async asyncData ({ $content, params }) {
            const categories = await $content('categories', params.slug).sortBy('date', 'desc').fetch()
            return {
                categories
            }
        }
    }
</script>

<style scoped></style>
