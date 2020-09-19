---
title: Vue Routerでwatchの挙動につまづいた
description: 今まではあまり使ってこなかったwatchでしたが、ついこないだ遭遇してつまづいてしまいました。今回はその備忘録として残します。
date: 2020-04-10
image: main.jpg
tags: [Nuxt.js,Vue.js]
category: web
---

## ルートの変更でコンポーネントが変更されない?

NuxtではデフォルトでVue Routerを使用できます。何かのクリックイベントでページを切り替えたり、あるページにリダイレクトをする一つの方法に、`this.$router.push('/from/to')`を使用すると思います。

しかし、「ユーザーが `/user/foo`から `/user/bar` へ遷移するときに同じコンポーネントインスタンスが再利用される...しかしながら、これはコンポーネントのライフサイクルフックが呼ばれないことを意味しています」と公式にも記載してある通り、`this.$router.push('/from/to')`ではcreatedやmountedが呼ばれません。
[動的ルートマッチング \| Vue Router](https://router.vuejs.org/ja/guide/essentials/dynamic-matching.html#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%83%BC%E5%A4%89%E6%9B%B4%E3%81%AE%E6%A4%9C%E7%9F%A5)

## $routeをwatchで監視

では、`this.$router.push('/from/to')`でのページ遷移時でもライフサイクルを呼び出すにはどうすればいいのか？
`$route`の中に検知したい処理を記述すれば解決します。

```js

export default {
  data() {
  return {}
  },
  watch: {
    $route () {
      // ここでページ遷移時に検知したい処理を記述
      this.hoge()
    }
  },
  mounted() {
  this.hoge()
  },
  methods: {
    hoge() {
    console.log('hoge')
    }
  }
}
```
プロジェクト内の画面遷移などは `router-link` や`nuxt-link` の方が無難ですね。
