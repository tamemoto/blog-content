<template>
  <v-container fluid>
    <v-row class="p-404" justify="center" align="center">
      <v-col class="text-center">
        <h2 class="p-404__title">
          404
        </h2>
        <p class="p-404__description">
          お探しのページは見つかりませんでした
        </p>
        <nuxt-link to="/">
          トップページへ戻る
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .p-404 {
    padding-top: 100px;
    @include tablet {
      padding-top: 68px;
    }
    @include desktop {
      padding-top: 80px;
    }
    &__title {
      @include tablet {
        font-size: 100px;
      }
      @include desktop {
        font-size: 124px;
      }
    }
    &__description {
      @include tablet {
        font-size: 40px;
      }
      @include desktop {
        font-size: 48px;
      }
    }
  }
</style>
