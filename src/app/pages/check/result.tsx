import { Link, useSearchParams } from "react-router";

import { H2 } from "@/components/elements/typography/heading";
import { Button } from "@/components/ui/button";
import ResultMessageList from "@/features/check/components/result-message-list";

import type { Answers } from "@/features/check/types";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const answers: Answers = {
    hackathon: Number(searchParams.get("hackathon")),
    team: Number(searchParams.get("team")),
    development: Number(searchParams.get("development")),
    git: Number(searchParams.get("git")),
    video: Number(searchParams.get("video")),
    presentation: Number(searchParams.get("presentation")),
    design: Number(searchParams.get("design")),
    frontend: Number(searchParams.get("frontend")),
    backend: Number(searchParams.get("backend")),
    infrastructure: Number(searchParams.get("infrastructure")),
    analysis: Number(searchParams.get("analysis")),
  };

  return (
    <div className="mx-auto mt-4 w-1/2 space-y-4">
      <H2 className="text-center">診断結果</H2>

      <ResultMessageList answers={answers} />

      <Button className="w-full" asChild>
        <Link to="/">ホームへ戻る</Link>
      </Button>
    </div>
  );
};

export default ResultPage;
