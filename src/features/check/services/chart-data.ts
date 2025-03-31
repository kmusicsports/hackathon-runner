import type { Answers } from "@/features/check/types";

export const makeChartData = ({ answers }: { answers: Answers }) => {
  //プログラミング経験値
  let programmingScore = 0;

  if (answers.development === 0) {
    if (
      answers.frontend === 0 &&
      answers.backend === 0 &&
      answers.analysis === 0
    ) {
      // なし
      programmingScore = 0;
    } else {
      // 授業、趣味、独学でプログラミングの基礎を学んだことがある
      programmingScore = 1;
    }
  } else {
    // 簡単なツール（アプリ）を作ったことがある
    // ツール（アプリ）を公開したことがある
    // ツール（アプリ）開発で、設計・実装・テストを経験したがある
    programmingScore = answers.development + 1;
  }

  // チーム開発経験値
  let teamScore = 0;

  if (answers.hackathon === 0) {
    if (answers.team === 0) {
      // なし
      teamScore = 0;
    } else {
      // 知人（友人、研究室仲間）との開発経験
      teamScore = 1;
    }
  } else if (answers.team === 2) {
    // インターン・アルバイトでのチーム開発経験
    teamScore = 4;
  } else {
    // ハッカソンなど、即席チームでの開発経験 1, 2回or3回以上
    teamScore = answers.hackathon + 1;
  }

  return [
    { index: "プログラミング経験値", score: programmingScore },
    { index: "チーム開発経験値", score: teamScore },
    { index: "Git, GitHub経験値", score: answers.git },
  ];
};
