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
    export default {
        async asyncData ({ $content, params }) {
            const categories = await $content('categories', params.slug).fetch()
            console.log(categories)
            return {
                categories
            }
        }
    }
</script>

<style scoped></style>
