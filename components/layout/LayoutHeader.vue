<template>
  <v-app-bar elevation="0" app>
    <v-spacer />
    <v-toolbar-title>
      <router-link to="/">
        <h1>
          ほげ
        </h1>
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <template v-slot:extension>
      <v-tabs hide-slider centered fixed-tabs class="l-nav__tab">
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
                    { name: "THOUGHT", link: '/categories/thought' },
                    { name: "PRODUCTS", link: '/products' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background: $clr-white;
    border-bottom: solid 1px $clr-gray;
  }
  .v-application .c-nav {
    &__link {
      text-decoration: none;
      color: $clr-black;
    }
  }
  .l-nav {
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
