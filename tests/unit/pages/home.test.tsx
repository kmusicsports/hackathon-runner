import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { customRender as render } from "#/setup/test-utils";
import HomePage from "@/app/pages/home";
import { appName } from "@/config";

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("should display the welcome message", () => {
    const welcomeText = screen.getByText("Welcome");
    expect(welcomeText).toBeVisible();
  });

  it("should display the app name", () => {
    const appNameElement = screen.getByText(appName);
    expect(appNameElement).toBeVisible();
  });

  it("should display the description text", () => {
    const description1 = screen.getByText(
      /あなたのハッカソンに対する技術レベルを診断し、/
    );
    const description2 = screen.getByText(
      /「ハッカソンまでに何を準備しておけば良いか」や「当日はどう振る舞えば良いか」を提案します。/
    );

    expect(description1).toBeVisible();
    expect(description2).toBeVisible();
  });

  it("should have a functioning diagnosis start button", () => {
    const startButton = screen.getByRole("link", { name: /さっそく診断/i });
    expect(startButton).toBeVisible();
    expect(startButton).toHaveAttribute("href", "/check/question");
  });
});
