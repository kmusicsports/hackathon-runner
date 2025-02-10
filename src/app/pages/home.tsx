import { Link } from "react-router";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <div>
        ハッカソンに対する技術レベルを診断し、「ハッカソンまでに何を準備しておけば良いか」や「ハッカソンでどう振る舞えば良いか」を提案します。
      </div>
      <Button asChild>
        <Link to="/check/question">さっそく診断する</Link>
      </Button>
    </div>
  );
};

export default HomePage;
