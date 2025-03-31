import { useState } from "react";

import { useNavigate } from "react-router";

import BackButton from "@/components/elements/back-button";
import { Progress } from "@/components/ui/progress";
import { questionNum } from "@/features/check/assets/questions";
import QuestionList from "@/features/check/components/question-list";
import { useProgress } from "@/features/check/hooks/use-progress";
import { useCounter } from "@/hooks/use-counter";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [progress, { incrementProgress, decrementProgress }] = useProgress();
  const [count, { incrementCount, decrementCount }] = useCounter();
  const [answers, setAnswers] = useState({
    hackathon: "0",
    team: "0",
    development: "0",
    git: "0",
    video: "0",
    presentation: "0",
    design: "0",
    frontend: "0",
    backend: "0",
    infrastructure: "0",
    analysis: "0",
  });

  const handlePrev = () => {
    if (count === 0) {
      navigate("/");
      return;
    }
    decrementCount();
    decrementProgress();
  };

  const handleNext = ({ id, value }: { id: string; value: number }) => {
    incrementProgress();

    const updatedAnswers = { ...answers, [id]: String(value) };
    setAnswers(updatedAnswers);

    if (count === questionNum - 1) {
      const searchParams = new URLSearchParams(updatedAnswers).toString();
      navigate(`/check/result?${searchParams}`);
      return;
    }
    incrementCount();
  };

  return (
    <div className="mx-auto mt-2 w-10/12 max-w-2xl lg:w-1/2">
      <BackButton onClick={handlePrev} />

      <div className="mt-4">
        <Progress value={progress} />
        <p className="mt-1 text-muted-foreground">診断</p>
      </div>

      <QuestionList currentQuestion={count} handleNext={handleNext} />
    </div>
  );
};

export default QuestionPage;
