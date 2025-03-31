export const questions = [
  {
    id: "hackathon",
    question: "ハッカソン参加経験",
    answers: ["なし", "1, 2回", "3回以上"],
  },
  {
    id: "team",
    question: "チーム開発経験",
    answers: [
      "なし",
      "知人（友人, 研究室仲間）との開発経験がある",
      "インターン・アルバイトやハッカソンでのチーム開発経験がある",
    ],
  },
  {
    id: "development",
    question: "ツール・アプリ開発経験",
    answers: [
      "なし",
      "簡単なツール・アプリを作ったことがある",
      "ツール・アプリを公開したことがある",
      "ツール・アプリ開発で設計・実装・テストを経験したことがある",
    ],
  },
  {
    id: "git",
    question: "Git, GitHub使用経験",
    answers: [
      "なし",
      "clone または fork をしたことがある",
      "push したことがある",
      "add, commit したことがある",
      "pull, branch, checkout, merge や pull request をしたことがある",
    ],
  },
  {
    id: "video",
    question: "動画編集経験",
    answers: ["なし", "あり"],
  },
  {
    id: "presentation",
    question: "プレゼン経験",
    answers: ["なし", "大多数が初対面の観衆に向けてプレゼンをしたことがある"],
  },
  {
    id: "design",
    question: "デザインスキル",
    answers: [
      "なし",
      "デザインツール(Figma等)の基礎レベルorデザイン知識あり",
      "デザインツールの応用レベル(コンポーネント機能などを使いこなせる)",
    ],
  },
  {
    id: "frontend",
    question: "フロントエンド開発スキル",
    answers: [
      "なし",
      "HTML, CSS, JavaScript の基礎知識がある",
      "フレームワーク(React, Vue, Angular等)を使った開発経験がある",
    ],
  },
  {
    id: "backend",
    question: "バックエンド開発スキル",
    answers: [
      "なし",
      "サーバーサイド言語(Go, Java, PHP, Python, Ruby等)の基礎知識がある",
      "フレームワーク(Gin, Spring, Laravel, Django, Ruby on Rails等)を使った開発経験がある",
    ],
  },
  {
    id: "infrastructure",
    question: "インフラ・サーバー構築経験",
    answers: ["なし", "あり(AWS, GCP, Azure, Firebase, Vercel, Heroku等)"],
  },
  {
    id: "analysis",
    question: "データ分析・画像処理経験",
    answers: [
      "なし",
      "データ分析・画像処理系のライブラリ(Numpy, Pandas, OpenCV等)を利用したことがある",
      "AIを利用した機能を実装したことがある",
    ],
  },
];

export const questionNum = questions.length;
