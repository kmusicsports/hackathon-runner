import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";

import QuestionPage from "./app/pages/check/question.tsx";
import ResultPage from "./app/pages/check/result.tsx";
import HomePage from "./app/pages/home.tsx";
import RootLayout from "./app/pages/layout.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />

          <Route path="check">
            <Route path="question" element={<QuestionPage />} />
            <Route path="result" element={<ResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
