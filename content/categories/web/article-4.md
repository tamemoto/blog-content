---
title: Nuxt.js+Firebaseで作る写真投稿アプリ(環境構築編)
date: 2020-10-28
image: article-4.jpg
tags: [Nuxt.js,Firebase]
category: web
---


今回開発する環境は以下の通りです。firebaseでのNode.jsは10系が推奨されています。
- Node.js v10.15.0
- @nuxt/cli v2.14.7
- npm v6.2.1

## プロジェクトの作成
Nuxtでアプリケーションを作成する際、まず挙げられるのはCLIを用いての開発でしょう。`nuxt-sample-app`という名前でプロジェクトを作成します。
```bash
$ npx create-nuxt-app nuxt-sample-app
```

インストールが再開されると、プロジェクトに関して質問をたずねられます。基本はEnterで良いですが、`Choose the package manager?`のセクションでは`npm`を選択しました。
インストールはyarnの方が早いと言われていますが、最近はそこまで大差はありません。

プロジェクトの作成が完了すると、プロジェクト直下に移動し、初期画面が表示されれば成功です。
```bash
$ cd nuxt-sample-app
$ npm run dev
````

## 実際にデプロイしてみよう
Firebaseには非常に簡単にプロジェクトのデプロイができるホスティング機能が備わっています。まずはFirebaseのコンソールに移動し、
「プロジェクトの追加」から手順にしたがってFirebase内にプロジェクトを作成しましょう。
<p>
  <img src="https://drive.google.com/uc?export=view&id=1fwsv7xMODBdoMzuggIuTt-1_OA5kCiUw" loading="lazy" alt="コンソール画面"/>
</p>


Firebaseをコマンドラインツールで操作できるようにするため、firebase-toolsをインストールしましょう
```bash
$ npm install firebase-tools --global
```

また、Googleアカウントの認証が完了していない方は認証を完了しておきましょう。
```bash
$ firebase login
```
自身のプロジェクトに戻り、ターミナルから、以下のコマンドでfirebaseに関する設定を行なっていきます。
```bash
$ firebase init
```

すると以下のような質問を順番に尋ねられるでしょう
```bash
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: sample-nuxt-app-4cbdc (sample-nuxt-app)
i  Using project sample-nuxt-app-4cbdc (sample-nuxt-app)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? No
✔  Wrote dist/404.html
✔  Wrote dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

```

`? Please select an option`では `Use an existing project` から、先ほどfirebaseコンソールで追加したプロジェクトを選択しましょう。

Nuxt.jsのデフォルトの設定では、静的ファイルが生成されるフォルダ名は `dist`であるため `? What do you want to use as your public directory`では `dist`と打ち込み、次へ進みます。

今回は静的サイトでホスティングするため、`Configure as a single-page app (rewrite all urls to /index.html)?`では `No`と打ち込みます。
正常に動作すると、`Firebase initialization complete!` と表示され、新たに`firebase.json` `.firebaserc` `.firebase`が作成されます。

アプリケーションをgithubで管理している場合はgithub上にあげないようにするため`.gitignore`ファイルに以下を追加しましょう。
```bash
.firebaserc
.firebase
```

Firebaseの設定が完了すれば、以下のコマンドで静的ファイルを生成し、`dist`フォルダが作成されます。
```bash
$ npm run generate
```

最後に以下のコマンドでfirebaseにデプロイし、表示されたURLから正常に動作しているか確認してみましょう。
```bash
$ firebase deploy --only hosting
```
