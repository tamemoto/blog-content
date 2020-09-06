<template>
  <v-container fluid>
    <v-col
      v-for="item in products"
      :key="item.product.id"
      cols="12"
      class="mb-5"
    >
      <a :href="item.product.url" target="_blank" class="block p-card">
        <v-card
          outlined
          class="mx-auto"
          width="90%"
        >
          <div class="p-card__item">
            <div class="p-card__image">
              <v-img
                :src="item.product.image"
                :aspect-ratio="16/9"
                contain
                width="90%"
                class="ma-auto py-5 p-card__image"
              />
            </div>
            <div class="p-card__body">
              <v-card-title>
                <h3>
                  {{ item.product.title }}
                </h3>
              </v-card-title>
              <v-card-text class="p-card__text">
                {{ item.product.text }}
              </v-card-text>
              <v-card-text>
                <v-chip
                  small
                  dark
                  label
                  class="font-weight-bold"
                >
                  {{ item.product.label }}
                </v-chip>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </a>
    </v-col>
  </v-container>
</template>

<script>
    export default {
        async asyncData({ $content }) {
            const products = await $content("products").fetch()
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
