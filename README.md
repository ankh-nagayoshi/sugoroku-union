# 社員旅行用すごろくアプリ

## Github Pages

[https://ankh-nagayoshi.github.io/sugoroku-union/](https://ankh-nagayoshi.github.io/sugoroku-union/)

## 動作環境

|アプリ|バージョン|
|---|---|
|Node.js|v6.7.0|

### npm list --global --depth=0

```
├── browserify@13.1.1
├── create-react-app@0.6.0
├── gulp@3.9.1
├── gulp-cli@1.2.2
├── npm-check-updates@2.8.6
├── watchify@3.7.0
└── yarn@0.17.6
```

## 構築

ワーキングディレクトリで以下のコマンドを実行する  
`package.json` または `yarn.lock` にもとづいて、必要なパッケージをインストールする  
```sh
$ yarn
```

## ビルド

### 全て

```sh
$ gulp build
```

### js

`gulp`によって以下のコマンドが使えるようになっている
```sh
$ gulp browserify
```

`gulp`を使わない場合は以下のコマンドを実行する
```sh
$ browserify src/index.js -o dist/index.js -t [ babelify --presets [ react es2015 ] ]
```

### css

`gulp`によって以下のコマンドが使えるようになっている
```sh
$ gulp css
```

### image

`gulp`によって以下のコマンドが使えるようになっている
```sh
$ gulp imagemin
```

## 監視

### 全て

```sh
$ gulp watch
```

### js

```sh
$ gulp watchify
```

### css

```sh
$ gulp csswatch
```

### image

```sh
$ gulp imgwatch
```

## productionモード

`production` モードビルドでは `docs` ディレクトリに出力される。

```sh
$ gulp build --production
$ gulp browserify --production
```
