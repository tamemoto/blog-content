<template>
  <div v-if="profile" class="mx-auto my-8 px-4">
    <div>
      <div class="mb-2 text-right">
        <a
          v-for="tool in profile.tools"
          :key="tool.index"
          :href="`${tool.url}`"
          :aria-label="`${tool.icon}`"
          target="_blank"
          rel="noopener"
          class="l-profile__link inline-block ma-2"
        >
          <v-icon>
            mdi-{{ tool.icon }}
          </v-icon>
        </a>
      </div>
      <v-sheet rounded outlined>
        <div class="px-10 py-8">
          <div class="d-flex justify-center">
            <v-avatar size="75">
              <v-img
                :src="`${profile.image}`"
                alt="プロフィール画像"
              />
            </v-avatar>
            <div class="ml-4">
              <span class="font-weight-bold">
                {{ profile.name }}
              </span>
              <p class="inline-block mb-0">
                {{ profile.description }}
              </p>
            </div>
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
  .l-footer {
    &__bg {
      background: $clr-black;
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
