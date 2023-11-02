## デプロイ確認

[https://demo-next-mantine.vercel.app/](https://demo-next-mantine.vercel.app/)
※とりあえず Vercel に上げてます。

## 前提条件

- 推奨バージョン
  - node：v20.9.0（[インストール方法参考記事](https://kinsta.com/jp/blog/how-to-install-node-js/)）
  - pnpm：v8.10（[インストール方法](https://pnpm.io/ja/installation)）

## セットアップ方法

```
# パッケージのインストール
pnpm install

# Next.js起動
pnpm dev

# Storybook起動
pnpm storybook

# Vitestのテスト実行
pnpm test

※その他のコマンドは、package.jsonに記載
```

## 使用技術

- TypeScript
- Next.js（App Router）
- Mantine v7
- Tailwind CSS
- Storybook
- Vitest
