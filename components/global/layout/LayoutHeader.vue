<template>
  <v-app-bar>
    <v-spacer />
    <v-toolbar-title>
      <router-link to="/" aria-label="トップページへ戻る">
        <h1>
          <v-img width="178" :src="require('~/assets/images/logo.svg')" />
        </h1>
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <template v-slot:extension>
      <v-tabs hide-slider centered fixed-tabs class="c-nav__tab">
        <v-tab v-for="nav in navs" :key="nav.index" :to="nav.link" style="width: 90%">
          {{ nav.name }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
    export default {
        data() {
            return {
                navs: [
                    { name: "WEB", link: '/categories/web' },
                    { name: "DESIGN", link: '/categories/design' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/mixins.scss";
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background: $clr-white;
    box-shadow: 0 2px 4px rgba(67,133,187, .05);
  }
  .v-application .c-nav {
    &__link {
      text-decoration: none;
      color: $clr-black;
    }
  }
  .v-toolbar {
    flex: none;
  }
  .-nav {
    &__tab::v-deep {
      .v-slide-group__wrapper {
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display:none;
        }
      }
      .v-slide-group__prev {
        display: none !important;
      }
    }
  }
</style>
