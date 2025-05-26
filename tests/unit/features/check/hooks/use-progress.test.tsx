import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useProgress } from "@/features/check/hooks/use-progress";

describe("useProgress", () => {
  it("should initialize with 1", () => {
    const { result } = renderHook(() => useProgress());
    const [progress] = result.current;
    expect(progress).toBe(1);
  });

  it("should increment progress by 9", () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current[1].incrementProgress();
    });
    const [progress] = result.current;
    expect(progress).toBe(10);
  });

  it("should not increment progress beyond 100", () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current[1].setProgress(95);
      result.current[1].incrementProgress();
    });
    const [progress] = result.current;
    expect(progress).toBe(100);
  });

  it("should decrement progress by 9", () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current[1].setProgress(20);
      result.current[1].decrementProgress();
    });
    const [progress] = result.current;
    expect(progress).toBe(11);
  });

  it("should not decrement progress below 1", () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current[1].setProgress(5);
      result.current[1].decrementProgress();
    });
    const [progress] = result.current;
    expect(progress).toBe(1);
  });

  it("should set progress to specific value", () => {
    const { result } = renderHook(() => useProgress());
    act(() => {
      result.current[1].setProgress(50);
    });

    const [progress] = result.current;
    expect(progress).toBe(50);
  });

  it("should return the correct tuple structure", () => {
    const { result } = renderHook(() => useProgress());
    const [progress, methods] = result.current;

    expect(typeof progress).toBe("number");
    expect(typeof methods.setProgress).toBe("function");
    expect(typeof methods.incrementProgress).toBe("function");
    expect(typeof methods.decrementProgress).toBe("function");
  });
});
