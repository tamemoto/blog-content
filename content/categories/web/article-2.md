---
title: nuxt/contentではscopedに注意すること
date: 2020-09-21
image: article-2.jpg
tags: [Nuxt.js]
category: web
---

## nuxt/contentとは?
nuxt/contentはNuxt.jsで使用できるとても強力なモジュールとなっています。
`content/`ディレクトリをプロジェクト直下に作成し、マークダウンなど様々なファイルを取得します
[Contentとは](https://content.nuxtjs.org/ja/)

これまでの外部サービスに依存するものとは異なった、GitベースのHeadless CMSとなっており、個人的に非常に使いやすいと感じています。

## scopedが効かない
nuxt/contentのファイル表示は独自の `<nuxt-content>`タグを記述してpageのbodyを表示します。[Contentを表示する](https://content.nuxtjs.org/ja/displaying)

その際自動的に`.nuxt-content`というクラスが付与され、これを起点にスタイリングするのですがvueファイルのsccに`scoped`を指定されていると、スタイルは適応されません。
<image src="https://drive.google.com/uc?export=view&id=1QUFC6WplgO9JeZmnNsrwK4rJtNqGoefs" alt="You can add the styles here or as a global style in your css folder"/>
[#styling-our-markdown-content](https://ja.nuxtjs.org/blog/creating-blog-with-nuxt-content/#styling-our-markdown-content)

スタイルを適応するためにはscopedを外すか、グロバールCSSで定義する必要があります。
公式に書かれていなかったため、結構ハマってしまいました、、。


