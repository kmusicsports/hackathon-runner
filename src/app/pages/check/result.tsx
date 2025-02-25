import { Link } from "react-router";

import { Button } from "@/components/ui/button";

const ResultPage = () => {
  return (
    <div>
      <h1>診断結果</h1>
      <Button asChild>
        <Link to="/">ホームへ戻る</Link>
      </Button>
    </div>
  );
};

export default ResultPage;
