<template>
  <v-app>
    <LayoutHeader />
    <v-main>
      <div class="hoge">
        <div class="hogehoge">
          <Nuxt />
        </div>
        <div class="l-profile">
          <v-container fluid>
            <ObjectProfile class="l-profile__container pa-3" />
          </v-container>
        </div>
      </div>
    </v-main>
    <LayoutFooter />
  </v-app>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .hoge {
    display: block;
    @include desktop {
      display: flex;
      min-height: 85vh;
      align-items: flex-start;
    }
  }
  .hogehoge {
    @include desktop {
      width: calc((100% - 290px) - 40px);
    }
  }
  .l-profile {
    position: static;
    @include desktop {
      position: sticky;
      top: 24px;
    }
    &__container {
      width: 100%;
      @include desktop {
        width: 290px;
      }
    }
  }
</style>
