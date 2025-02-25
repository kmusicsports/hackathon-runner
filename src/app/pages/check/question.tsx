import { Link } from "react-router";

import { Button } from "@/components/ui/button";

const QuestionPage = () => {
  return (
    <div>
      <h1>診断</h1>
      <Button asChild>
        <Link to="/check/result">結果を見る</Link>
      </Button>
    </div>
  );
};

export default QuestionPage;
