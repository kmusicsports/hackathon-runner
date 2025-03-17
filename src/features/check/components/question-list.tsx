import { H4 } from "@/components/elements/typography/heading";
import { Button } from "@/components/ui/button";
import { questions } from "@/features/check/assets/questions";

type QuestionListProps = {
  currentQuestion: number;
  handleNext: ({ id, value }: { id: string; value: number }) => void;
};

const QuestionList = ({ currentQuestion, handleNext }: QuestionListProps) => {
  return (
    <>
      <H4 className="mt-6">{questions[currentQuestion].question}</H4>

      <div className="mt-6 space-y-2">
        {questions[currentQuestion].answers.map((answer, i) => (
          <Button
            key={i}
            className="w-full"
            variant={"outline"}
            size={"lg"}
            onClick={() =>
              handleNext({ id: questions[currentQuestion].id, value: i })
            }
          >
            {answer}
          </Button>
        ))}
      </div>
    </>
  );
};

export default QuestionList;
