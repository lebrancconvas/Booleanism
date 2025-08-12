import { describe, it, expect } from "bun:test";
import { P } from "../utils/proposition";
import { NOT, AND, IMPLY } from "../utils/operators";

describe("Reasoning Test.", () => {
  it("[Modus Ponen] Pre: (P -> Q), P; Con: Q", () => {
    expect(IMPLY(AND(IMPLY(true, true), true), true)).toBe(true);
    expect(IMPLY(AND(IMPLY(true, false), true), false)).toBe(true);
    expect(IMPLY(AND(IMPLY(false, true), false), true)).toBe(true);
    expect(IMPLY(AND(IMPLY(false, false), false), false)).toBe(true);
  });


  it("[Modus Tollens] Pre: (P -> Q), ~Q; Con: ~P", () => {
    expect(IMPLY(AND(IMPLY(true, true), NOT(true)), NOT(true))).toBe(true);
    expect(IMPLY(AND(IMPLY(true, false), NOT(false)), NOT(true))).toBe(true);
    expect(IMPLY(AND(IMPLY(false, true), NOT(true)), NOT(false))).toBe(true);
    expect(IMPLY(AND(IMPLY(false, false), NOT(false)), NOT(false))).toBe(true);
  });
});

