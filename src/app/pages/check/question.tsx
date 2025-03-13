import { useState } from "react";

import { useNavigate } from "react-router";

import { questionNum } from "@/assets/questions";
import BackButton from "@/components/elements/back-button";
import { Progress } from "@/components/ui/progress";
import QuestionList from "@/features/check/components/question-list";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
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
    if (currentQuestion === 0) {
      navigate("/");
      return;
    }
    setCurrentQuestion(currentQuestion - 1);
    setProgress(progress - 9);
  };

  const handleNext = ({ id, value }: { id: string; value: number }) => {
    setProgress(progress + 9);

    const updatedAnswers = { ...answers, [id]: String(value) };
    setAnswers(updatedAnswers);

    if (currentQuestion === questionNum - 1) {
      const searchParams = new URLSearchParams(updatedAnswers).toString();
      navigate(`/check/result?${searchParams}`);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="mx-auto mt-2 w-1/2">
      <BackButton onClick={handlePrev} />

      <div className="mt-4">
        <Progress value={progress} />
        <p className="mt-1 text-muted-foreground">診断</p>
      </div>

      <QuestionList currentQuestion={currentQuestion} handleNext={handleNext} />
    </div>
  );
};

export default QuestionPage;
