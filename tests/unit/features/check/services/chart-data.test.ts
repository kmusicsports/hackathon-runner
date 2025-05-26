import { describe, expect, test } from "vitest";

import { makeChartData } from "@/features/check/services/chart-data";

import type { Answers } from "@/features/check/types";

describe("makeChartData", () => {
  describe("プログラミング経験値の計算", () => {
    test("すべてのスキルが0の場合、スコアは0になる", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[0]).toEqual({
        index: "プログラミング経験値",
        score: 0,
      });
    });

    test("基礎スキルがある場合、スコアは1になる", () => {
      const answers: Answers = {
        development: 0,
        frontend: 1,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[0]).toEqual({
        index: "プログラミング経験値",
        score: 1,
      });
    });

    test("簡単なツール開発経験がある場合、スコアは2になる", () => {
      const answers: Answers = {
        development: 1,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[0]).toEqual({
        index: "プログラミング経験値",
        score: 2,
      });
    });

    test("ツール公開経験がある場合、スコアは3になる", () => {
      const answers: Answers = {
        development: 2,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[0]).toEqual({
        index: "プログラミング経験値",
        score: 3,
      });
    });

    test("設計・実装・テスト経験がある場合、スコアは4になる", () => {
      const answers: Answers = {
        development: 3,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[0]).toEqual({
        index: "プログラミング経験値",
        score: 4,
      });
    });
  });

  describe("チーム開発経験値の計算", () => {
    test("経験がない場合、スコアは0になる", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[1]).toEqual({
        index: "チーム開発経験値",
        score: 0,
      });
    });

    test("知人との開発経験がある場合、スコアは1になる", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 1,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[1]).toEqual({
        index: "チーム開発経験値",
        score: 1,
      });
    });

    test("ハッカソン1回の場合、スコアは2になる", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 1,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[1]).toEqual({
        index: "チーム開発経験値",
        score: 2,
      });
    });

    test("ハッカソン3回以上の場合、スコアは3になる", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 2,
        team: 0,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[1]).toEqual({
        index: "チーム開発経験値",
        score: 3,
      });
    });

    test("インターン経験がある場合、スコアは4になる", () => {
      const answers: Answers = {
        development: 1,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 2,
        git: 0,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[1]).toEqual({
        index: "チーム開発経験値",
        score: 4,
      });
    });
  });

  describe("Git, GitHub経験値", () => {
    test("answersのgit値がそのまま使用される", () => {
      const answers: Answers = {
        development: 0,
        frontend: 0,
        backend: 0,
        analysis: 0,
        hackathon: 0,
        team: 0,
        git: 2,
        video: 0,
        presentation: 0,
        design: 0,
        infrastructure: 0,
      };

      const result = makeChartData({ answers });
      expect(result[2]).toEqual({
        index: "Git, GitHub経験値",
        score: 2,
      });
    });
  });
});
