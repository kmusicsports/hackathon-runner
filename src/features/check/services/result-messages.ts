import type { Answers } from "@/features/check/types";

const addGitMessages = (messages: string[], answers: Answers): string[] => {
  if (answers.git === 0) {
    // 0: Git, GitHub使用経験なし
    messages.push("Git, GitHubの勉強をしましょう。");
  }
  return messages;
};

const addHackathonMessages = (
  messages: string[],
  answers: Answers
): string[] => {
  if (answers.hackathon === 0) {
    if (answers.team === 0) {
      if (answers.development === 0) {
        // 1: ハッカソン参加経験なし、チーム開発経験なし、ツール（アプリ）開発経験なし
        messages.push(
          "当日はスライド作成やアイデアを2、3個出せるように準備しておきましょう。"
        );
      } else {
        // 4: ハッカソン参加経験なし、チーム開発経験なし、ツール（アプリ）開発経験あり
        messages.push("Git, GitHubを使ったチーム開発方法を調べましょう。");
        messages.push(
          "チーム内にハッカソン参加経験者やチーム開発経験者がいなくて、ツール（アプリ）開発経験のある人が他にいない場合は、リーダーの役割を検討しましょう。"
        );
      }
    } else {
      // 2: ハッカソン参加経験なし、チーム開発経験あり
      messages.push(
        "チームにハッカソン参加経験者がいないならリーダーの役割を担いましょう。"
      );
    }
  } else {
    // 3: ハッカソン参加経験あり
    messages.push("どんどん次のハッカソンに参加して、賞を目指しましょう！");
    messages.push(
      "今までリーダーの経験がなければリーダーの役割を担ってPMしてみましょう。"
    );
  }
  return messages;
};

const addSkillMessages = (messages: string[], answers: Answers): string[] => {
  if (answers.development > 1 && answers.git === 0) {
    // 5: ツール（アプリ）開発経験あり、Git, GitHub使用経験なし
    messages.push(
      "チーム内にハッカソン参加経験者やチーム開発経験者がいなくて、ツール（アプリ）開発経験のある人が他にいない場合は、リーダーの役割を検討しましょう。"
    );
  }

  if (answers.video === 1) {
    // 6: 動画編集経験あり
    messages.push(
      "動画編集できることを伝えましょう。プレゼン資料作成などで役に立つはずです。"
    );
  }

  if (answers.presentation === 1) {
    // 7: プレゼン経験あり
    messages.push(
      "プレゼン資料の作成や発表を積極的に担当しましょう。ハッカソンではプレゼンの出来も評価対象です。"
    );
  }

  if (answers.design === 1) {
    // 8: デザインツールの基礎知識あり
    messages.push(
      "チームにデザインツールの応用レベルの人がいれば、その人のサポート役を担いましょう。"
    );
  }

  if (answers.design === 2) {
    // 9: デザインツールの応用レベル
    messages.push("デザイン作成ができることを伝えましょう。");
  }

  if (answers.frontend === 1) {
    // 10: JavaScriptの基礎
    messages.push(
      "JavaScriptのフレームワークを使える人がいれば、その人のサポート役を担いましょう。"
    );
  }

  if (answers.frontend === 2) {
    // 11: JavaScriptのフレームワークを使える
    messages.push("フロントエンドの開発を行えることを伝えましょう。");
  }

  if (answers.backend === 1) {
    // 12: バックエンド言語の基礎あり
    messages.push("使えるバックエンド言語を伝えましょう。");
  }

  if (answers.infrastructure === 1) {
    // 13: インフラ経験あり
    messages.push("使えるインフラツールを伝えましょう。");
  }

  if (answers.analysis > 1) {
    // 14: データ分析・画像処理経験あり
    messages.push("機械学習を組み込めることを伝えましょう。");
  }

  return messages;
};

const addNoSkillMessages = (messages: string[], answers: Answers): string[] => {
  if (
    answers.video === 0 &&
    answers.presentation === 0 &&
    answers.design === 0 &&
    answers.frontend === 0 &&
    answers.backend === 0 &&
    answers.infrastructure === 0 &&
    answers.analysis === 0
  ) {
    // 15: 技術的技能なし
    messages.push(
      "プログラミング言語(JavaScript, PHP, Rubyなどから1つ)を勉強しておきましょう。"
    );
  }
  return messages;
};

export const makeResultMessages = ({ answers }: { answers: Answers }) => {
  let messages: string[] = [];
  messages = addGitMessages(messages, answers);
  messages = addHackathonMessages(messages, answers);
  messages = addSkillMessages(messages, answers);
  messages = addNoSkillMessages(messages, answers);
  return messages;
};
