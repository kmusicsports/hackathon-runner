# hackathon-runner
ハッカソンに対する不安を解消することで、ハッカソンに参加したい・参加する人たちを支援するためのWebアプリケーション「HackathonRunner」。

<img src="https://private-user-images.githubusercontent.com/62631497/416439553-d8963481-52b9-4c67-996c-d3108b6b0a2e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUwMzcyMjgsIm5iZiI6MTc0NTAzNjkyOCwicGF0aCI6Ii82MjYzMTQ5Ny80MTY0Mzk1NTMtZDg5NjM0ODEtNTJiOS00YzY3LTk5NmMtZDMxMDhiNmIwYTJlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE5VDA0Mjg0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNkOTRlZTM3MzZiZWIxNjdjOWVkMDdkYmZhODFhYWE0Yjg3ZGJmMDNiMjY0N2M0Yjc0MDIxM2Y4NWUwZGMyNjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.eYsoz-2_wroRmc1esU4ox4vk0Ejq-P7Hlz20uGpfEV0">

**URL**: https://hackathon-runner.pages.dev

## チームJavalerのHackathonRunner

このアプリは、私が所属する[チームJavaler](https://github.com/Javaler/)において、2022年4月から2023年3月まで開発されていたアプリを、個人で作り直し、変更を加えたものです。（もちろん、メンバーから許可は得ています。）

- [チームJavalerで開発したHackathonRunner](https://github.com/Javaler/HackathonRunner)
- [チームJavalerでの開発を振り返った記事](https://qiita.com/NMS/items/4d43e3acb02d29cc6cc4)

## 個人開発で行った主な変更

- 機能
  - 需要のあった診断機能のみに限定
- UI
  - 診断機能における各質問への回答方法を変更
    - 1つの画面内で全質問を回答 → 1つの画面につき1つの質問を回答
    - ラジオボタンで回答を選択 → ボタンで回答を選択
  - 文言の変更
- 技術構成（詳細は[技術構成](#技術構成)を参照）
  - SPA化
  - フロントエンドの技術を少しモダンに
  - バックエンドを作らない（今後変更予定）

## 機能仕様

### 診断機能

- 選択式の質問約10個に回答すると、ハッカソンに対する技術レベルを診断し、「ハッカソンまでに何を準備しておけば良いか」や「ハッカソンでどう振る舞えば良いか」といった提案をする
- ハッカソンに対する技術レベルをチャートで表示する
- 質問へ回答する際の画面スクリーンショット（質問1つ目）
<img src="https://private-user-images.githubusercontent.com/62631497/428508482-acb98f3e-1448-4b88-90e0-654c3d68a694.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUwNDAzNDIsIm5iZiI6MTc0NTA0MDA0MiwicGF0aCI6Ii82MjYzMTQ5Ny80Mjg1MDg0ODItYWNiOThmM2UtMTQ0OC00Yjg4LTkwZTAtNjU0YzNkNjhhNjk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDE5VDA1MjA0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU0NGUxZWMyNmJkZTE3M2Q2N2Q0NDgwOTI3M2ViZGFjMDU5NzIxY2FhYTM2OWE2MGNjNzM1NDAwNmM5NjliZWQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Jrl4BA7KyYYnxx_jvEAtYkfZBUPL934PnOYIyXM3les">

## 技術構成

- フロントエンド
  - **Vite**
  - **React**
  - **TypeScript**
  - **TailwindCSS**
  - **shadcn/ui**
  - **Recharts**
- インフラ・クラウド
  - **Cloudflare Pages**
- 開発環境
  - **Visual Studio Code**
  - **Docker, Docker Compose**
  - **Devcontainer**

<details>
<summary>
補足情報（チームJavalerによるHackathonRunnerの技術構成）
</summary>

- フロントエンド
  - **HTML/CSS**
  - **JavaScript**
  - **Bootstrap**
  - **Chart.js**
- バックエンド
  - **Java**
  - **Maven**
  - **Spring Boot**
- インフラ・クラウド
  - **Azure App Service**
  - **Azure Functions**
  - **Azure Database for PostgreSQL**
- 開発環境
  - **Visual Studio Code**
  - **SpringToolSuite4**

</details>
