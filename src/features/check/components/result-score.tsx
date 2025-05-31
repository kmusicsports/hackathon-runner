import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { makeChartData } from "@/features/check/services/chart-data";

import type { Answers } from "@/features/check/types";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const ResultScore = ({ answers }: { answers: Answers }) => {
  const chartData = makeChartData({ answers });

  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Hackathon Score</CardTitle>
        <CardDescription>
          あなたのハッカソンに対するスコアです。
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} data-testid="result-score">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="index" />
            <PolarGrid />
            <Radar
              dataKey="score"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ResultScore;
