import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { customRender as render } from "#/setup/test-utils";
import ResultMessageList from "@/features/check/components/result-message-list";
import * as resultMessagesModule from "@/features/check/services/result-messages";

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

describe("ResultMessageList", () => {
  it("should render table rows matching the number of messages", () => {
    const mockMessages = [
      "Git, GitHubの勉強をしましょう。",
      "当日はスライド作成やアイデアを2、3個出せるように準備しておきましょう。",
      "プログラミング言語(JavaScript, PHP, Rubyなどから1つ)を勉強しておきましょう。",
    ];
    vi.spyOn(resultMessagesModule, "makeResultMessages").mockReturnValue(
      mockMessages
    );

    render(<ResultMessageList answers={mockAnswers} />);

    const cells = screen.getAllByRole("cell");
    expect(cells).toHaveLength(mockMessages.length);
  });

  it("should display result messages correctly", () => {
    const mockMessages = [
      "Git, GitHubの勉強をしましょう。",
      "当日はスライド作成やアイデアを2、3個出せるように準備しておきましょう。",
    ];
    vi.spyOn(resultMessagesModule, "makeResultMessages").mockReturnValue(
      mockMessages
    );

    render(<ResultMessageList answers={mockAnswers} />);

    for (const message of mockMessages) {
      const cell = screen.getByRole("cell", { name: message });
      expect(cell).toBeVisible();
    }
  });
});
