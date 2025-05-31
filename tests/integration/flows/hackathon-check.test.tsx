import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import QuestionPage from "@/app/pages/check/question";
import ResultPage from "@/app/pages/check/result";
import HomePage from "@/app/pages/home";
import { questions } from "@/features/check/assets/questions";

import { customRender } from "../../setup/test-utils";

describe("ハッカソン診断フロー", () => {
  test("全ての質問に回答して結果を確認できる", async () => {
    const user = userEvent.setup();

    // 1. ホームページから開始
    customRender(<HomePage />, { route: "/" });

    // 診断開始ボタンをクリック
    const startButton = screen.getByRole("link", { name: "さっそく診断" });
    expect(startButton).toBeVisible();
    await user.click(startButton);

    // 質問ページへの遷移を待つ
    await screen.findByText(questions[0].question);

    // 2. 全ての質問に回答（11問）
    for (let i = 0; i < 11; i++) {
      // 各質問で最後の選択肢をクリック（最高値を選択）
      const buttons = screen.getAllByRole("button", { name: /^(?!戻る).+/ });
      const lastAnswerButton = buttons[buttons.length - 1];
      expect(lastAnswerButton).toBeVisible();
      await user.click(lastAnswerButton);
    }

    // 3. 結果ページで正しいスコアと結果が表示される
    expect(screen.getByText("診断結果")).toBeVisible();
    // スコアが表示される（グラフ）
    expect(screen.getByTestId("result-score")).toBeVisible();
    // 結果メッセージが表示される（テーブル）
    expect(screen.getByRole("table")).toBeVisible();

    // ホームに戻るボタンが表示される
    expect(screen.getByRole("link", { name: "ホームへ戻る" })).toBeVisible();
  });

  test("戻るボタンで前の質問に戻れる", async () => {
    const user = userEvent.setup();

    // 質問ページを表示
    customRender(<QuestionPage />, { route: "/check/question" });

    // プログレスバーの初期値を確認
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeVisible();
    expect(progressBar).toHaveAttribute("aria-valuenow", "1");

    // 最初の質問に回答
    // 選択肢の最後のボタンをクリック
    const buttons = screen.getAllByRole("button");
    const lastAnswerButton = buttons[buttons.length - 1];
    expect(lastAnswerButton).toBeVisible();
    await user.click(lastAnswerButton);

    // プログレスバーが更新される
    expect(progressBar).toHaveAttribute("aria-valuenow", "10");

    // 戻るボタンをクリック
    const backButton = screen.getByRole("button", { name: "戻る" });
    expect(backButton).toBeVisible();
    await user.click(backButton);

    // プログレスバーが元に戻る
    expect(progressBar).toHaveAttribute("aria-valuenow", "1");
  });

  test("最初の質問で戻るボタンを押すとホームに戻る", async () => {
    const user = userEvent.setup();

    // 質問ページを表示
    customRender(<QuestionPage />, { route: "/check/question" });

    // 戻るボタンをクリック
    const backButton = screen.getByRole("button", { name: "戻る" });
    expect(backButton).toBeVisible();
    await user.click(backButton);

    // ホームページに遷移することを確認
    expect(window.location.pathname).toBe("/");
  });

  test("結果ページで正しいパラメータが設定される", () => {
    // URLパラメータを設定して結果ページをレンダリング
    const searchParams = new URLSearchParams({
      hackathon: "2",
      team: "2",
      development: "2",
      git: "2",
      video: "2",
      presentation: "2",
      design: "2",
      frontend: "2",
      backend: "2",
      infrastructure: "2",
      analysis: "2",
    });

    customRender(<ResultPage />, {
      route: `/check/result?${searchParams.toString()}`,
    });

    // スコアと結果メッセージが表示される
    // レーダーチャートと結果メッセージが表示される
    const chart = screen.getByTestId("result-score");
    const resultTable = screen.getByRole("table");

    expect(chart).toBeVisible();
    expect(resultTable).toBeVisible();
  });
});
