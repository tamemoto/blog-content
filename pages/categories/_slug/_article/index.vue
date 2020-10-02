<template>
  <div>
    <v-container fluid>
      <v-img
        :src="`/images/${article.category}/${article.image}`"
        :aspect-ratio="16/9"
        height="400"
        class="mx-auto mb-5"
        alt="アイキャッチ画像"
      />
      <section class="my-5">
        <div class="p-column__time mb-5 font-weight-bold">
          {{ dateTime(article.date) }}
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
        :document="article"
        class="mb-8"
      />
      <nuxt-link
        v-for="tag in article.tags"
        :key="tag.index"
        :to="`/tags/${tag}`"
        class="p-column__tag"
      >
        <v-chip
          class="inline-block mt-4 mr-4"
          label
          outlined
        >
          #{{ tag }}
        </v-chip>
      </nuxt-link>
    </v-container>
    <LayoutProfile />
  </div>
</template>

<script>
import { dateService } from "@/service/DateService"
import meta from "@/meta/meta"
export default {
    head() {
        return {
            title: this.article.title,
            meta: [...meta({
                title: this.article.title,
                image: `/images/${this.article.category}/${this.article.image}`
                })]
        }
    },
    data() {
        return {
            columns: [
                { color: "#336db4", value: "web" },
                { color: "#d82a2a", value: "design" }
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
        dateTime() {
            return time => {
                return dateService.publishedAt(time)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";
.p-column {
  &__time {
    color: $clr-gray;
  }
  &__tag {
    text-decoration: none;
  }
}
</style>
