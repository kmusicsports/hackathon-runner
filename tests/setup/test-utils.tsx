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

import QuestionPage from "@/app/pages/check/question";
import ResultPage from "@/app/pages/check/result";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  route?: string;
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/*">
        <Route index element={ui} />
        <Route path="check/question" element={<QuestionPage />} />
        <Route path="check/result" element={<ResultPage />} />
      </Route>
    ),
    {
      initialEntries: [options?.route || "/"],
    }
  );

  return testingLibraryRender(<RouterProvider router={router} />, options);
};

export { customRender };
