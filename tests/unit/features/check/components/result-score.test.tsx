import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { customRender as render } from "#/setup/test-utils";
import ResultScore from "@/features/check/components/result-score";
import * as chartDataModule from "@/features/check/services/chart-data";

import type { Answers } from "@/features/check/types";

const mockAnswers: Answers = {
  hackathon: 0,
  team: 0,
  development: 0,
  git: 0,
  video: 0,
  presentation: 0,
  design: 0,
  frontend: 0,
  backend: 0,
  infrastructure: 0,
  analysis: 0,
};

describe("ResultScore", () => {
  it("should display card title and description", () => {
    render(<ResultScore answers={mockAnswers} />);

    const title = screen.getByText("Hackathon Score");
    expect(title).toBeVisible();

    const description = screen.getByText(
      "あなたのハッカソンに対するスコアです。"
    );
    expect(description).toBeVisible();
  });

  it("should render chart container", () => {
    const mockChartData = [
      { index: "プログラミング経験値", score: 2 },
      { index: "チーム開発経験値", score: 3 },
      { index: "Git, GitHub経験値", score: 4 },
    ];
    vi.spyOn(chartDataModule, "makeChartData").mockReturnValue(mockChartData);

    render(<ResultScore answers={mockAnswers} />);

    const chartContainer = screen.getByTestId("chart-r1");
    expect(chartContainer).toBeVisible();
  });

  it("should generate chart data based on answers", () => {
    const spy = vi.spyOn(chartDataModule, "makeChartData");

    render(<ResultScore answers={mockAnswers} />);

    expect(spy).toHaveBeenCalledWith({
      answers: mockAnswers,
    });
  });
});
