<template>
  <v-container fluid>
    <v-col
      v-for="item in products"
      :key="item.id"
      cols="12"
      class="mb-5"
    >
      <a :href="item.url" target="_blank" class="block p-card">
        <v-card
          outlined
          class="mx-auto"
          width="90%"
        >
          <div class="p-card__item">
            <div class="p-card__image">
              <v-img
                :src="item.image"
                :aspect-ratio="16/9"
                width="100%"
                class="ma-auto py-5 p-card__image"
              />
            </div>
            <div class="p-card__body">
              <v-card-text class="pb-0">
                <div class="row mt-n12 mb-6 no-gutters justify-end">
                  <v-chip
                    v-if="item.label === 'DEV'"
                    small
                    color="primary"
                    class="font-weight-bold"
                  >
                    {{ item.label }}
                  </v-chip>
                  <v-chip
                    v-if="item.label === 'UI'"
                    small
                    color="red"
                    text-color="white"
                    class="font-weight-bold"
                  >
                    {{ item.label }}
                  </v-chip>
                </div>
                <div class="row group-default no-gutters">
                  <v-chip
                    v-for="tool in item.tools"
                    :key="tool.index"
                    small
                    label
                    dark
                    class="mr-2 mb-2"
                  >
                    {{ tool }}
                  </v-chip>
                </div>
              </v-card-text>
              <v-card-title>
                <h3>
                  {{ item.title }}
                </h3>
              </v-card-title>
              <v-card-text class="p-card__text">
                {{ item.text }}
              </v-card-text>
            </div>
          </div>
        </v-card>
      </a>
    </v-col>
  </v-container>
</template>

<script>
import meta from "@/meta/meta"
export default {
    head() {
        return {
            title: "ポートフォリオ | tameblog",
            meta: [
                ...meta({
                    title: "ポートフォリオ一覧",
                    description: "今まで制作した制作物",
                    type: "article"
                })
            ]
        }
    },
    async asyncData({ $content }) {
        const { products } = await $content("products/products").fetch()
        return {
            products
        }
    }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .p-card {
    text-decoration: none;
    &__text {
      word-break: break-all;
    }
    &__image {
      background: $clr-gray;
    }
  }
  .flex-wrap {
    width: 100%;
  }
</style>
