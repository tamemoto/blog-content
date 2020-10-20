<template>
  <div v-if="profile">
    <div>
      <v-sheet rounded>
        <div class="px-6 py-4">
          <div class="d-flex justify-between align-center mb-4">
            <v-avatar size="68">
              <v-img
                :src="`${profile.image}`"
                alt="プロフィール画像"
              />
            </v-avatar>
            <div class="ml-4">
              <span class="font-weight-bold">
                {{ profile.name }}
              </span>
            </div>
          </div>
          <p class="inline-block mb-4">
            {{ profile.description }}
          </p>
          <div class="c-icon">
            <a
              v-for="tool in profile.tools"
              :key="tool.index"
              :href="`${tool.url}`"
              :aria-label="`${tool.icon}`"
              target="_blank"
              rel="noopener"
              class="c-profile__link inline-block mx-2"
            >
              <v-icon :color="`#${tool.color}`">
                mdi-{{ tool.icon }}
              </v-icon>
            </a>
          </div>
        </div>
      </v-sheet>
    </div>
  </div>
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
  @import "~@/assets/scss/mixins.scss";
  .c-profile {
    &__name {
      color: $clr-gray;
    }
    &__link {
      text-decoration: none;
      & .v-icon {
        font-size: 50px;
      }
    }
  }
  .c-icon {
    @include desktop {
      text-align: center;
    }
  }
</style>
