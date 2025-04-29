import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { customRender as render } from "#/setup/test-utils";
import QuestionPage from "@/app/pages/check/question";

describe("QuestionPage", () => {
  beforeEach(() => {
    render(<QuestionPage />);
  });

  it("should render progress bar", () => {
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeVisible();
  });

  it("should show progress text", () => {
    const progressText = screen.getByText("診断");
    expect(progressText).toBeVisible();
  });

  it("should navigate to home when clicking back button on first question", async () => {
    // アイコンのSVGを含むボタンを探す
    const backButton = screen.getByRole("button", {
      name: "",
    });
    expect(backButton).toBeVisible();

    await userEvent.click(backButton);
    expect(window.location.pathname).toBe("/");
  });
});
