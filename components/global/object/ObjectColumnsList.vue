<template>
  <div v-if="lists" class="d-flex flex-wrap">
    <v-col
      v-for="item in lists"
      :key="item.index"
      cols="12"
      class="mb-5"
    >
      <v-card
        outlined
        class="mx-auto c-card"
        width="100%"
        nuxt
        :to="`${item.path}`"
      >
        <div class="c-card__item">
          <div class="c-card__image">
            <v-img
              :src="`/images/${item.category}/${item.slug}/${item.image}`"
              :aspect-ratio="16/9"
              alt="アイキャッチ画像"
              width="100%"
              height="100%"
            />
          </div>
          <div class="c-card__body">
            <v-card-title class="font-weight-bold">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="c-card__text">
              {{ item.description }}
            </v-card-text>
            <span class="c-card__time pl-4">
              {{ dateTime(item.date) }}
            </span>
            <v-card-text>
              <v-chip
                small
                dark
                label
                class="font-weight-bold"
                :color="categoryColor(item.category)"
              >
                {{ item.category }}
              </v-chip>
            </v-card-text>
          </div>
        </div>
      </v-card>
    </v-col>
  </div>
</template>

<script>
  import { dateService } from "@/service/DateService"
  export default {
      props: {
          lists: {
              type: Array,
              default: () => []
          }
      },
      data() {
          return {
              columns: [
                  { color: "#336db4", value: "web" },
                  { color: "#7c6766", value: "design" },
                  { color: "#98CA6F", value: "product" },
              ]
          }
      },
      computed: {
          categoryColor() {
              return (category) => {
                  const {color} = this.columns.find(column => {
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
  @import "~@/assets/scss/mixins.scss";
  .c-card {
    &__item {
      @include tablet {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
      }
      @include desktop {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
      }
    }
    &__text {
      word-break: break-all;
    }
    &__time {
      font-weight: bold;
      color: $clr-gray;
    }
    &__image {
      @include tablet {
        flex-basis: 30%;
      }
      @include desktop {
        flex-basis: 20%;
      }
    }
    &__body {
      @include tablet {
        flex-basis: 70%;
      }
      @include desktop {
        flex-basis: 80%;
      }
    }
  }
  .flex-wrap {
    width: 100%;
  }
</style>
