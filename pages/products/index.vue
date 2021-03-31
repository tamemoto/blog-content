<template>
  <v-container fluid>
    <div />
  </v-container>
</template>

<script>
import meta from "@/meta/meta"
export default {
    head() {
        return {
            title: "ポートフォリオ | tameblog",
            meta: [
                ...meta({
                    title: "ポートフォリオ一覧",
                    description: "今まで制作した制作物",
                    type: "article"
                })
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins.scss";
  .flex-wrap {
    width: 100%;
  }
</style>
