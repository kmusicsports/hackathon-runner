import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { customRender as render } from "#/setup/test-utils";
import { questions } from "@/features/check/assets/questions";
import QuestionList from "@/features/check/components/question-list";

const mockCurrentQuestion = 0;
const mockHandleNext = vi.fn();

describe("QuestionList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(
      <QuestionList
        currentQuestion={mockCurrentQuestion}
        handleNext={mockHandleNext}
      />
    );
  });

  it("should display the current question correctly", () => {
    const question = screen.getByRole("heading", {
      name: questions[mockCurrentQuestion].question,
    });
    expect(question).toBeVisible();
  });

  it("should render answer buttons correctly", () => {
    const answers = questions[mockCurrentQuestion].answers;
    for (const answer of answers) {
      const button = screen.getByRole("button", { name: answer });
      expect(button).toBeVisible();
    }
  });

  it("should call handleNext with correct arguments when button is clicked", async () => {
    const targetAnswer = questions[mockCurrentQuestion].answers[1];
    const button = screen.getByRole("button", { name: targetAnswer });

    await userEvent.click(button);

    expect(mockHandleNext).toHaveBeenCalledTimes(1);
    expect(mockHandleNext).toHaveBeenCalledWith({
      id: questions[mockCurrentQuestion].id,
      value: 1,
    });
  });
});
