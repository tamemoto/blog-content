<template>
  <div class="c-column__table">
    <v-card outlined v-if="lists" class="pa-5">
      <client-only>
        <v-data-table
          :headers="headers"
          :items="tagsItems(lists)"
          sort-by
          hide-default-footer
          sort-desc
        >
          <template v-slot:item="{ item }">
            <nuxt-link
              :to="`/tags/${item.category}`"
            >
              {{ item.tags[1] }}
            </nuxt-link>
          </template>
        </v-data-table>
      </client-only>
    </v-card>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                lists: null,
                headers: [
                    {
                        text: 'タグ',
                        align: 'left',
                        sortable: false,
                        value: ''
                    },
                    {
                        text: '投稿数',
                        align: 'center',
                        width: 150,
                        value: 'item.count'
                    }
                ]
            }
        },
        async mounted() {
            const lists = await this.$content('categories', { deep: true }).only(['tags', 'category']).fetch()
            console.log(lists)
            this.lists = lists
        },
        methods: {
            tagsItems(lists) {
                const tags = []
                for(let item of lists) {
                    for(let tag of item.tags) {
                        item.count = this.relatedTag(tag).length
                        tags.push(item)
                    }
                }
                return tags
            },
            relatedTag(tag) {
                const posts = []
                for(let post of this.lists) {
                    const item = post.tags.find(item => {
                        return item === tag
                    })
                    if(item){
                        posts.push(post)
                    }
                }
                return posts
            },

        },
    }
</script>

<style lang="scss" scoped>
  .c-column {
    &__table {
      width: 100%;
    }
  }
</style>
