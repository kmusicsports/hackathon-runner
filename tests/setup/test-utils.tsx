import type { ReactElement } from "react";

import {
  render as testingLibraryRender,
  type RenderOptions,
} from "@testing-library/react";
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  route?: string;
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={ui} />
        <Route path="/check/question" element={ui} />
        <Route path="/check/result" element={ui} />
      </Route>
    ),
    {
      initialEntries: [options?.route || "/"],
    }
  );

  return testingLibraryRender(<RouterProvider router={router} />, options);
};

export { customRender };
