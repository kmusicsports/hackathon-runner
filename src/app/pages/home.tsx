import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { appName } from "@/config";

const HomePage = () => {
  return (
    <div className="bg-[url(/hr-women.png)] bg-cover bg-center bg-no-repeat text-primary-foreground">
      <div className="flex h-screen flex-col items-center justify-center space-y-16 bg-[rgba(0,0,0,0.4)]">
        <div className="flex scroll-m-20 flex-col items-center space-y-5 text-5xl font-extrabold tracking-tight lg:text-6xl">
          <span>Welcome</span>
          <span>to</span>
          <span className="italic">{appName}</span>
        </div>

        <div className="xs:text-lg flex flex-col items-center text-base sm:text-xl">
          <span>あなたのハッカソンに対する技術レベルを診断し、</span>
          <span className="max-w-sm sm:max-w-[30rem] lg:max-w-none">
            「ハッカソンまでに何を準備しておけば良いか」や「当日はどう振る舞えば良いか」を提案します。
          </span>
        </div>

        <Button size={"lg"} className="rounded-full" asChild>
          <Link to="/check/question" className="text-xl">
            さっそく診断
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
