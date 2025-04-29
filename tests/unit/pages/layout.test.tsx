import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { customRender as render } from "#/setup/test-utils";
import RootLayout from "@/app/pages/layout";

describe("RootLayout", () => {
  beforeEach(() => {
    render(<RootLayout />);
  });

  it("should render header", () => {
    const header = screen.getByRole("banner");
    expect(header).toBeVisible();
  });

  it("should render main content area", () => {
    const main = screen.getByRole("main");
    expect(main).toBeVisible();
  });
});
