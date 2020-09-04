<template>
  <v-footer>
    <v-container v-if="profile" fluid>
      <div class="l-footer__container">
        <v-card outlined class="pa-5">
          <v-card-title class="font-weight-bold pl-0 pb-3">
            PROFILE
          </v-card-title>
          <v-divider />
          <div class="text-center pt-5">
            <v-avatar size="75">
              <v-img
                :src="`${profile.image}`"
                alt="プロフィール画像"
              />
            </v-avatar>
            <v-card-subtitle class="font-weight-bold l-profile__name">
              {{ profile.name }}
            </v-card-subtitle>
          </div>
          <v-card-actions class="d-flex justify-center">
            <a
              v-for="tool in profile.tools"
              :key="tool.index"
              :href="`${tool.url}`"
              :aria-label="`${tool.icon}`"
              target="_blank"
              rel="noopener"
              class="l-profile__link ma-2"
            >
              <v-icon>
                mdi-{{ tool.icon }}
              </v-icon>
            </a>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                profile: null
            }
        },
        async mounted() {
            const { profile } = await this.$content("profile").fetch()
            this.profile = profile
        }
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .l-footer {
    &__container {
      @include container();
      padding: 16px 14px;
    }
  }
  .l-profile {
    &__name {
      color: $clr-gray;
    }
    &__link {
      text-decoration: none;
    }
  }
</style>
