import { describe, expect, it } from "@jest/globals";

function sum(a: number, b: number) {
  return a + b;
}

describe("sum", () => {
  it("should find a configuration", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
