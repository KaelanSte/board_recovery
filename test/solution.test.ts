import { describe, expect, test } from "vitest";

import { RecoverBoardInput, recoverBoard } from "../src/solution";

describe("recoverBoard", () => {
  test("Should parse and correctly return response", () => {
    const expectedOutput = "110,110";

    const input: RecoverBoardInput = {
      columnValues: [2, 2, 0],
      lowerCounts: 2,
      upperCounts: 2,
    };

    expect(recoverBoard(input)).toEqual(expectedOutput);
  });

  test("Should return IMPOSSIBLE for impossible input", () => {
    const impossibleInput: RecoverBoardInput = {
      columnValues: [2, 2, 0],
      lowerCounts: 0,
      upperCounts: 0,
    };

    const expectedOutput = "IMPOSSIBLE";

    expect(recoverBoard(impossibleInput)).toEqual(expectedOutput);
  });

  test("should return IMPOSSIBLE if there is left over data", () => {
    const extraDataInput: RecoverBoardInput = {
      columnValues: [2, 2, 0],
      lowerCounts: 2,
      upperCounts: 3,
    };

    const expectedOutput = "IMPOSSIBLE";

    expect(recoverBoard(extraDataInput)).toEqual(expectedOutput);
  });

  test("empty columns -> both empty rows when counts are zero", () => {
    const input: RecoverBoardInput = {
      columnValues: [],
      upperCounts: 0,
      lowerCounts: 0,
    };

    expect(recoverBoard(input)).toBe(",");
  });

  test("returns IMPOSSIBLE if there are no values in the count array", () => {
    const input: RecoverBoardInput = {
      columnValues: [0, 0, 0],
      upperCounts: 1,
      lowerCounts: 2,
    };

    expect(recoverBoard(input)).toBe("IMPOSSIBLE");
  });

  test("all 2s with exact counts", () => {
    const input: RecoverBoardInput = {
      columnValues: [2, 2, 2],
      upperCounts: 3,
      lowerCounts: 3,
    };

    expect(recoverBoard(input)).toBe("111,111");
  });
});
