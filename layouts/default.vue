<template>
  <v-app>
    <LayoutHeader />
    <v-main>
      <div class="l-main">
        <div class="l-main__content">
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
  .l-main {
    display: block;
    @include desktop {
      display: flex;
      min-height: 85vh;
      align-items: flex-start;
    }
    &__content {
      background: $clr-white;
      margin-bottom: 24px;
      @include desktop {
        width: calc((100% - 290px) - 40px);
        margin: 24px 0 36px 0;
      }
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
