import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useCounter } from "@/hooks/use-counter";

describe("useCounter", () => {
  it("should initialize with 0", () => {
    const { result } = renderHook(() => useCounter());
    const [count] = result.current;
    expect(count).toBe(0);
  });

  it("should increment counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current[1].incrementCount();
    });

    const [count] = result.current;
    expect(count).toBe(1);
  });

  it("should decrement counter", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current[1].setCount(5);
      result.current[1].decrementCount();
    });
    const [count] = result.current;
    expect(count).toBe(4);
  });

  it("should not decrement below zero", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current[1].setCount(0);
      result.current[1].decrementCount();
    });
    const [count] = result.current;
    expect(count).toBe(0);
  });

  it("should set counter to specific value", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current[1].setCount(10);
    });

    const [count] = result.current;
    expect(count).toBe(10);
  });

  it("should return the correct tuple structure", () => {
    const { result } = renderHook(() => useCounter());
    const [count, methods] = result.current;

    expect(typeof count).toBe("number");
    expect(typeof methods.setCount).toBe("function");
    expect(typeof methods.incrementCount).toBe("function");
    expect(typeof methods.decrementCount).toBe("function");
  });
});
