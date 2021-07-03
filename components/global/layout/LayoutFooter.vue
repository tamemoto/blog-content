<template>
  <v-footer class="l-footer">
    <v-container fluid>
      <div class="l-footer__container px-8 pt-6">
<!--        <p v-if="policy">-->
<!--          {{ policy.detail }}-->
<!--        </p>-->
        <div class="text-center">
          <small>
            © 2020, yusuke All rights reserved.
          </small>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                policy: null,
            }
        },
        // async mounted() {
        //     const { policy } = await this.$content('policy').fetch()
        //     this.policy = policy
        // }
    }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .l-footer {
    &__container {
      @include container;
    }
  }
  .v-footer {
    background: $clr-white;
    color: $clr-gray;
  }
</style>
