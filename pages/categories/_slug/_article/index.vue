<template>
  <v-container fluid>
    <v-img
      src="https://placehold.jp/150x150.png"
      :aspect-ratio="16/9"
      height="400"
      class="mx-auto mb-5"
    />
    <section class="my-5">
      <div class="p-column__time mb-5">
        {{ article.date }}
      </div>
      <h1 class="mb-5">
        {{ article.title }}
      </h1>
      <v-chip
        small
        dark
        label
        :color="categoryColor(article.category)"
        class="font-weight-bold"
      >
        {{ article.category }}
      </v-chip>
    </section>
    <v-divider class="mb-5" />
    <nuxt-content
      class="p-column__content"
      :document="article"
    />
  </v-container>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    { color: "#336db4", value: "web" },
                    { color: "#7c6766", value: "design" },
                    { color: "#b84640", value: "thought" },
                    { color: "#98CA6F", value: "product" },
                ]
            }
        },
        async asyncData({ $content, params }) {
            const article = await $content(`/categories/${params.slug}/${params.article}`).fetch()
            return {
                article
            }
        },
        computed: {
            categoryColor() {
                return (category) => {
                    const { color } = this.columns.find(column => {
                        return column.value === category
                    })
                    return color
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .p-column {
    &__time {
      font-weight: bold;
      color: $clr-gray;
    }
    &__content {
      display: table;
      table-layout: fixed;
      width: 100%;
      &::v-deep h2 {
        margin-bottom: 36px;
      }
      &::v-deep p {
        color: $clr-black;
        line-height: 2.5;
        margin-bottom: 28px;
        @include desktop {
          margin-bottom: 36px;
          line-height: 2.5;
        }
      }
      &::v-deep img {
        display: block;
        margin: 0 auto;
        width: 100%;
      }
      &::v-deep a {
        color: #2d8fd5;
      }
      &::v-deep pre[class*="language-"] {
        -webkit-overflow-scrolling: touch;
      }
    }
  }
</style>
