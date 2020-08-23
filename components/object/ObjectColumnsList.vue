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
        :to="`${item.dir}`"
      >
        <div class="c-card__item">
          <div class="c-card__image">
            <v-img
              src="https://placehold.jp/150x150.png"
              :aspect-ratio="16/9"
              width="100%"
              height="100%"
            />
          </div>
          <div class="c-card__body">
            <v-card-title>
              <h3>
                {{ item.title }}
              </h3>
            </v-card-title>
            <v-card-text class="c-card__text">
              {{ item.description }}
            </v-card-text>
            <span class="c-card__time pl-4">
              {{ item.date }}
            </span>
            <v-card-text>
              <v-chip
                small
                dark
                label
                class="font-weight-bold"
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
                    { color: "#336db4", value: 1 },
                    { color: "#7c6766", value: 2 },
                    { color: "#b84640", value: 3 },
                    { color: "#98CA6F", value: 4 },
                ]
            }
        },
        computed: {
            categoryColor() {
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
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
