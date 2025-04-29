import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { customRender as render } from "#/setup/test-utils";
import ResultPage from "@/app/pages/check/result";

import type { Answers } from "@/features/check/types";

// モックデータ
const mockAnswers: Answers = {
  hackathon: 3,
  team: 2,
  development: 3,
  git: 2,
  video: 1,
  presentation: 2,
  design: 3,
  frontend: 2,
  backend: 1,
  infrastructure: 2,
  analysis: 3,
};

// URLSearchParams用にvalueを文字列に変換
const mockAnswersAsString = Object.fromEntries(
  Object.entries(mockAnswers).map(([key, value]) => [key, String(value)])
);

// ResultMessageListのモック
vi.mock("@/features/check/components/result-message-list", () => ({
  default: ({ answers }: { answers: Answers }) => (
    <div data-testid="result-messages">
      <div data-testid="total-score">
        {Object.values(answers).reduce((a, b) => a + b, 0)}
      </div>
      <div data-testid="categories">{Object.keys(answers).join(",")}</div>
    </div>
  ),
}));

// ResultScoreのモック
vi.mock("@/features/check/components/result-score", () => ({
  default: ({ answers }: { answers: Answers }) => (
    <div data-testid="result-score">
      <div>
        {Object.entries(answers).map(([key, value]) => (
          <div key={key} data-testid={`score-${key}`}>
            {value}
          </div>
        ))}
      </div>
    </div>
  ),
}));

describe("ResultPage", () => {
  beforeEach(() => {
    const searchParams = new URLSearchParams(mockAnswersAsString).toString();
    render(<ResultPage />, { route: `/check/result?${searchParams}` });
  });

  it("should display result heading", () => {
    const heading = screen.getByRole("heading", { name: /診断結果/ });
    expect(heading).toBeVisible();
  });

  it("should render result messages with correct answers", () => {
    const messages = screen.getByTestId("result-messages");
    expect(messages).toBeVisible();

    // 合計スコアの確認
    const totalScore = screen.getByTestId("total-score");
    expect(totalScore).toHaveTextContent("24"); // 3+2+3+2+1+2+3+2+1+2+3 = 24

    // 全カテゴリーが含まれているか確認
    const categories = screen.getByTestId("categories");
    expect(categories).toHaveTextContent(Object.keys(mockAnswers).join(","));
  });

  it("should render result score with correct values", () => {
    const score = screen.getByTestId("result-score");
    expect(score).toBeVisible();

    // 各カテゴリーのスコアを確認
    for (const [key, value] of Object.entries(mockAnswers)) {
      const categoryScore = screen.getByTestId(`score-${key}`);
      expect(categoryScore).toHaveTextContent(String(value));
    }
  });

  it("should have a link to return home", () => {
    const homeButton = screen.getByRole("link", { name: /ホームへ戻る/ });
    expect(homeButton).toBeVisible();
    expect(homeButton).toHaveAttribute("href", "/");
  });
});
