import { useState } from "react";

import { ChevronLeft } from "lucide-react";

import { H4 } from "@/components/elements/typography/heading";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    question: "ハッカソン参加経験",
    answers: ["なし", "1, 2回", "3回以上"],
  },
  {
    id: 2,
    question: "チーム開発経験",
    answers: [
      "なし",
      "知人（友人, 研究室仲間）との開発経験がある",
      "インターン・アルバイトやハッカソンでのチーム開発経験がある",
    ],
  },
  {
    id: 3,
    question: "ツール・アプリ開発経験",
    answers: [
      "なし",
      "簡単なツール・アプリを作ったことがある",
      "ツール・アプリを公開したことがある",
      "ツール・アプリ開発で設計・実装・テストを経験したことがある",
    ],
  },
  {
    id: 4,
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
    id: 5,
    question: "動画編集経験",
    answers: ["なし", "あり"],
  },
  {
    id: 6,
    question: "プレゼン経験",
    answers: ["なし", "大多数が初対面の観衆に向けてプレゼンをしたことがある"],
  },
  {
    id: 7,
    question: "デザインスキル",
    answers: [
      "なし",
      "デザインツール(Figma等)の基礎レベルorデザイン知識あり",
      "デザインツールの応用レベル(コンポーネント機能などを使いこなせる)",
    ],
  },
  {
    id: 8,
    question: "フロントエンド開発スキル",
    answers: [
      "なし",
      "HTML, CSS, JavaScript の基礎知識がある",
      "フレームワーク(React, Vue, Angular等)を使った開発経験がある",
    ],
  },
  {
    id: 9,
    question: "バックエンド開発スキル",
    answers: [
      "なし",
      "サーバーサイド言語(Go, Java, PHP, Python, Ruby等)の基礎知識がある",
      "フレームワーク(Gin, Spring, Laravel, Django, Ruby on Rails等)を使った開発経験がある",
    ],
  },
  {
    id: 10,
    question: "インフラ・サーバー構築経験",
    answers: ["なし", "あり(AWS, GCP, Azure, Firebase, Vercel, Heroku等)"],
  },
  {
    id: 11,
    question: "データ分析・画像処理経験",
    answers: [
      "なし",
      "データ分析・画像処理系のライブラリ(Numpy, Pandas, OpenCV等)を利用したことがある",
      "AIを利用した機能を実装したことがある",
    ],
  },
];

const QuestionPage = () => {
  const [progress, setProgress] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handlePrev = () => {
    if (currentQuestion === 0) {
      // route back
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
    setProgress(progress - 9);
  };

  const handleNext = () => {
    setProgress(progress + 9);
    if (currentQuestion === questions.length - 1) {
      // submit
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="mx-auto w-1/2">
      <Button
        variant={"outline"}
        size={"icon"}
        className="mt-2"
        onClick={() => handlePrev()}
      >
        <ChevronLeft />
      </Button>

      <div className="mt-4">
        <Progress value={progress} className="" />
        <p className="mt-1 text-muted-foreground">診断</p>
      </div>

      {/* 以下をコンポーネント化 */}
      <H4 className="mt-6">{questions[currentQuestion].question}</H4>

      <div className="mt-6 space-y-2">
        {questions[currentQuestion].answers.map((answer, i) => (
          <Button
            key={i}
            className="w-full"
            variant={"outline"}
            size={"lg"}
            onClick={() => handleNext()}
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
