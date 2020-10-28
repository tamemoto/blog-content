---
title: Nuxt.js+Firebaseで作る写真投稿アプリ(画面作成編)
date: 2020-10-29
image: article-4.jpg
tags: [Nuxt.js,Firebase]
category: web
---

本記事は[Nuxt.js+Firebaseで作る写真投稿アプリ(環境構築編)](https://tamblog.net/categories/web/article-4)の続きです。今回は以下の画面を作成できることがゴールです。
<p>
  <img src="https://drive.google.com/uc?export=view&id=1iZ4NZFwvNEdHaK_Jgmd1jLfLy6AKYDzK" loading="lazy" alt="ホーム画面"/>
</p>

Nuxt.jsのディレクトリ構造は以下のように分けられます。各ディレクトリの詳細な説明はドキュメントをご覧ください。[ディレクトリ構造](https://ja.nuxtjs.org/guide/directory-structure/)
```bash
├── assets
├── static
├── components
├── layouts
├── pages
├── middleware
├── plugins
└── store
```

## Bootstrapの利用
自身のアプリケーションでサクッとCSSを当てたい場合、一つの候補にBootstrapがあげられるでしょう。Nuxt.jsでは`bootstrap-vue`をインストールすることでとても簡単にBootstrapを使うことができます。
しかし、`bootstrap-vue`では`b-`から始まる独自のコンポーネントが存在するため、通常のBootstrapとは異なります。今回のアプリケーションでは通常のBootstrapをCSSとして導入する方法をご紹介します。

[Download · Bootstrap v4.5](https://getbootstrap.com/docs/4.5/getting-started/download/)からBootstrapをダウンロードし、展開したフォルダから`bootstrap.min.css`を取り出しましょう。

`/static`フォルダに新たに`bootstrap`フォルダを作成し、`bootstrap.min.css`を配置します。プロジェクト直下に存在する`nuxt.config.js`へ以下を記述することでBootstrapを導入することができます。

/nuxt.config.js
```js
module.exports = {
    //...
    head: {
      //...  
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/bootstrap/bootstrap.min.css' } //新しく追加
      ]
    }
}
```

## 画面レイアウトの調整
画面全体の幅を調整したいときは`/layouts`フォルダ内を編集していきます。`/layouts`フォルダ内のvueコンポーネントファイルを明示的に指定しない限り、`default.vue`内の内容が適用されます。
以下のような形でアプリケーションのレイアウトを調整しましょう。

/layout/default.vue
```vue
<template>
  <div class="wrapper position-relative mx-auto bg-white shadow rounded px-4">
    <Nuxt />
  </div>
</template>

<style scoped>
  .wrapper {
    max-width: 375px;
  }
</style>
<script>
</script>
```

## ページの作成
Nuxt.jsではデフォルトでVue Routerが導入されており、`/pages`配下に各ファイル・フォルダを作成すると自動的にルーティングをしてくれます。例えば`hoge`フォルダを追加し中で`index.vue`を作成した場合、
実際に [http://localhost:3000/hoge]() へアクセスすることができると思います。

それでは`/pages/index.vue`の内容を書き換え、画面を作成していきましょう。

/pages/index.vue
```vue
<template>
  <div>
    <header class="header position-absolute d-flex justify-content-between align-content-center px-4 bg-dark">
      <h1 class="header-text text-white">
        app
      </h1>
    </header>
    <div class="content">
      <div class="text-right mb-2 mx-2">
        <button class="btn btn-primary">
          写真を投稿
        </button>
      </div>
      <div class="divider mb-4" />
      <div class="items d-flex flex-wrap flex-row">
        <div class="items-col d-flex justify-content-center align-content-center">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-11.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-12.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-13.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-14.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-15.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-16.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-17.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-18.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-19.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-1.jpg" width="160" height="160" alt="サンプル" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .header {
    width: 375px;
    height: 56px;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid #dbdbdb
  }
  .header-text {
    font-size: 36px;
  }
  .content {
    padding-top: 65px;
  }

.items {
  width: 100%;
  flex: 0 1 auto;
}
 .items-col {
  height: 170px;
  object-fit: cover;
}
.items .items-col:nth-of-type(odd){
  margin-right: calc(100% - 320px);
}
  .divider {
    height: 1px;
    background: #dbdbdb;
  }
</style>
```

## コンポーネントの分割
画面自体は完成しましたが、今のままではコードが複雑で改修時の負担が大きいです。また将来的にページが増えていく場合はheader部分は使いまわしたいでしょう。
そういった複数ページでコンポーネントを使い回したい場合は`/components`フォルダへモジュールを切り出します。`/components`フォルダ内に`layouts`フォルダを作成し、
`LayoutsHeaer.vue`を作成しましょう。

/components/layouts/LayoutsHeader.vue
```vue
<template>
  <header class="header position-absolute d-flex justify-content-between align-content-center px-4 bg-dark">
    <h1 class="header-text text-white">
      app
    </h1>
  </header>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .header {
    width: 375px;
    height: 56px;
    left: 0;
    right: 0;
    z-index: 100;
    border-bottom: 1px solid #dbdbdb
  }
  .header-text {
    font-size: 36px;
  }
</style>
```

`/layouts/default.vue`に以下の内容を追加します。

/layouts/default.vue
```vue
<template>
  <div class="wrapper position-relative mx-auto bg-white shadow rounded px-4">
    <!--  新しく追加  -->
    <LayoutsHeader />
    <Nuxt />
  </div>
</template>

<style scoped>
  .wrapper {
    max-width: 375px;
  }
</style>
<script>
</script>
```

`/pages/index.vue`に戻り、headerに関する記述を削除します。

/pages/index.vue
```vue
<template>
  <div>
    <div class="content">
      <div class="text-right mb-2 mx-2">
        <button class="btn btn-primary">
          写真を投稿
        </button>
      </div>
      <div class="divider mb-4" />
      <div class="items d-flex flex-wrap flex-row">
        <div class="items-col d-flex justify-content-center align-content-center">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-11.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-12.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-13.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-14.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-15.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-16.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-17.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-18.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-19.jpg" width="160" height="160" alt="サンプル" />
        </div>
        <div class="items-col">
          <img src="https://images.dog.ceo/breeds/shiba/shiba-1.jpg" width="160" height="160" alt="サンプル" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .content {
    padding-top: 65px;
  }

.items {
  width: 100%;
  flex: 0 1 auto;
}
 .items-col {
  height: 170px;
  object-fit: cover;
}
.items .items-col:nth-of-type(odd){
  margin-right: calc(100% - 320px);
}
  .divider {
    height: 1px;
    background: #dbdbdb;
  }
</style>
```

このように使い回しが発生するようなモジュールは逐次コンポーネント化をすることで、スムーズにコード変更が可能になります。

## dataの使用
JavaScriptでは繰り返しや条件分岐を表現する際には`for`や`if`を用いると思いますが、Nuxt.jsでは`v-`から始まるディレクティブが用意されており、template内で使用します。
現状は`img`タグを直接記述していますが、 `v-for`を用いてtemplate内の`img`タグの繰り返しを表現します。`v-for`を使用する際には必ず一意の`key`を指定しましょう。詳しくはドキュメントを参照してください。[ディレクティブ - vue.js](https://012-jp.vuejs.org/api/directives.html)
 `src`や`alt`は`data()`内に移動させましょう。`data()`内ではそのページで使用するデータや要素を記述する場所です。

/pages/index.vue
```vue
<template>
  <div>
    <div class="content">
      <div class="text-right mb-2 mx-2">
        <button class="btn btn-primary">
          写真を投稿
        </button>
      </div>
      <div class="divider mb-4" />
      <div class="items d-flex flex-wrap flex-row">
        <div
          v-for="image in images"
          :key="image.id"
          class="items-col d-flex justify-content-center align-content-center"
        >
          <img :src="image.url" width="160" height="160" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    id: 1,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-1.jpg",
                    alt: "サンプル"
                },
                {
                    id: 2,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
                    alt: "サンプル"
                },
                {
                    id: 3,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-15.jpg",
                    alt: "サンプル"
                },
                {
                    id: 4,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-4.jpg",
                    alt: "サンプル"
                },
                {
                    id: 5,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
                    alt: "サンプル"
                },
                {
                    id: 6,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-6.jpg",
                    alt: "サンプル"
                },
                {
                    id: 7,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-7.jpg",
                    alt: "サンプル"
                },
                {
                    id: 8,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-8.jpg",
                    alt: "サンプル"
                },
                {
                    id: 9,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-9.jpg",
                    alt: "サンプル"
                },
                {
                    id: 10,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-10.jpg",
                    alt: "サンプル"
                },
                {
                    id: 11,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-11.jpg",
                    alt: "サンプル"
                },
                {
                    id: 12,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-12.jpg",
                    alt: "サンプル"
                },
                {
                    id: 13,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-13.jpg",
                    alt: "サンプル"
                },
                {
                    id: 14,
                    url: "https://images.dog.ceo/breeds/shiba/shiba-14.jpg",
                    alt: "サンプル"
                },
            ]
        }
    }
}
</script>

<style scoped>
  .content {
    padding-top: 65px;
  }

.items {
  width: 100%;
  flex: 0 1 auto;
}
 .items-col {
  height: 170px;
  object-fit: cover;
}
.items .items-col:nth-of-type(odd){
  margin-right: calc(100% - 320px);
}
  .divider {
    height: 1px;
    background: #dbdbdb;
  }
</style>
```

最後に今回の変更をfirebase hostingで反映させましょう
```bash
$ firebase deploy --only hosting
```
