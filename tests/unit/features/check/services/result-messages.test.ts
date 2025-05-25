import { describe, expect, test } from "vitest";

import { makeResultMessages } from "@/features/check/services/result-messages";

import type { Answers } from "@/features/check/types";

describe("addGitMessages", () => {
  test("Git経験なしの場合、Git学習を推奨するメッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain("Git, GitHubの勉強をしましょう。");
  });

  test("Git経験ありの場合、メッセージは追加されない", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 1,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).not.toContain("Git, GitHubの勉強をしましょう。");
  });
});

describe("addHackathonMessages", () => {
  describe("ハッカソン参加経験なしの場合", () => {
    test("開発経験なしの場合、準備に関するメッセージを含む", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeResultMessages({ answers });
      expect(result).toContain(
        "当日はスライド作成やアイデアを2、3個出せるように準備しておきましょう。"
      );
    });

    test("開発経験ありの場合、チーム開発の学習を推奨するメッセージを含む", () => {
      const answers: Answers = {
        development: 1,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeResultMessages({ answers });
      expect(result).toContain(
        "Git, GitHubを使ったチーム開発方法を調べましょう。"
      );
    });

    test("チーム開発経験ありの場合、リーダー役割を推奨するメッセージを含む", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 1,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeResultMessages({ answers });
      expect(result).toContain(
        "チームにハッカソン参加経験者がいないならリーダーの役割を担いましょう。"
      );
    });
  });

  describe("ハッカソン参加経験ありの場合", () => {
    test("次回参加とPMを促すメッセージを含む", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 1,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeResultMessages({ answers });
      expect(result).toContain(
        "どんどん次のハッカソンに参加して、賞を目指しましょう！"
      );
      expect(result).toContain(
        "今までリーダーの経験がなければリーダーの役割を担ってPMしてみましょう。"
      );
    });
  });
});

describe("addSkillMessages", () => {
  test("開発経験あり かつ Git経験なしの場合、リーダー検討のメッセージを含む", () => {
    const answers: Answers = {
      development: 2,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain(
      "チーム内にハッカソン参加経験者やチーム開発経験者がいなくて、ツール（アプリ）開発経験のある人が他にいない場合は、リーダーの役割を検討しましょう。"
    );
  });

  test("動画編集経験ありの場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 1,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain(
      "動画編集できることを伝えましょう。プレゼン資料作成などで役に立つはずです。"
    );
  });

  test("プレゼン経験ありの場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 1,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain(
      "プレゼン資料の作成や発表を積極的に担当しましょう。ハッカソンではプレゼンの出来も評価対象です。"
    );
  });

  test("デザインツール基礎知識ありの場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 1,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain(
      "チームにデザインツールの応用レベルの人がいれば、その人のサポート役を担いましょう。"
    );
  });

  test("デザインツール応用レベルの場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 2,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain("デザイン作成ができることを伝えましょう。");
  });

  test("JavaScript基礎の場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 1,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain(
      "JavaScriptのフレームワークを使える人がいれば、その人のサポート役を担いましょう。"
    );
  });

  test("JavaScriptフレームワーク使用可能の場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 2,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain(
      "フロントエンドの開発を行えることを伝えましょう。"
    );
  });

  test("バックエンド言語基礎ありの場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 1,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain("使えるバックエンド言語を伝えましょう。");
  });

  test("インフラ経験ありの場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 1,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain("使えるインフラツールを伝えましょう。");
  });

  test("データ分析・画像処理経験ありの場合、関連メッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 2,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain("機械学習を組み込めることを伝えましょう。");
  });
});

describe("addNoSkillMessages", () => {
  test("すべてのスキルが0の場合、プログラミング学習を推奨するメッセージを含む", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toContain(
      "プログラミング言語(JavaScript, PHP, Rubyなどから1つ)を勉強しておきましょう。"
    );
  });

  test("いずれかのスキルがある場合、メッセージは追加されない", () => {
    const answers: Answers = {
      development: 0,
      frontend: 1,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 0,
      presentation: 0,
      design: 0,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).not.toContain(
      "プログラミング言語(JavaScript, PHP, Rubyなどから1つ)を勉強しておきましょう。"
    );
  });
});

describe("makeResultMessages", () => {
  test("各種メッセージ生成関数が順番に呼ばれ、結果が結合される", () => {
    const answers: Answers = {
      development: 0,
      frontend: 0,
      backend: 0,
      analysis: 0,
      hackathon: 0,
      team: 0,
      git: 0,
      video: 1,
      presentation: 1,
      design: 1,
      infrastructure: 0,
    };

    const result = makeResultMessages({ answers });
    expect(result).toEqual([
      "Git, GitHubの勉強をしましょう。",
      "当日はスライド作成やアイデアを2、3個出せるように準備しておきましょう。",
      "動画編集できることを伝えましょう。プレゼン資料作成などで役に立つはずです。",
      "プレゼン資料の作成や発表を積極的に担当しましょう。ハッカソンではプレゼンの出来も評価対象です。",
      "チームにデザインツールの応用レベルの人がいれば、その人のサポート役を担いましょう。",
    ]);
  });
});
