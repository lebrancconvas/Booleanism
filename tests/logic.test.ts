import { describe, it, expect } from "bun:test";
import { P } from "../utils/proposition";
import { AND, NOT, OR, IMPLY, IFF } from "../utils/operators";

describe("Logic Test", () => {
  it("~(~P) === P", () => {
    expect(NOT(NOT(true))).toBe(true);
    expect(NOT(NOT(false))).toBe(false);
  });

  it("P v ~P === T", () => {
    expect(OR(true, NOT(true))).toBe(true);
    expect(OR(false, NOT(false))).toBe(true);
  });

  it("P ^ ~P === F", () => {
    expect(AND(true, NOT(true))).toBe(false);
    expect(AND(false, NOT(false))).toBe(false);
  });

  it("P ^ P === P", () => {
    expect(AND(true, true)).toBe(true);
    expect(AND(false, false)).toBe(false);
  });

  it("P v P === P", () => {
    expect(OR(true, true)).toBe(true);
    expect(OR(false, false)).toBe(false);
  });

  it("P ^ F === F", () => {
    expect(AND(true, false)).toBe(false);
    expect(AND(false, false)).toBe(false);
  });

  it("P ^ T === P", () => {
    expect(AND(true, true)).toBe(true);
    expect(AND(false, true)).toBe(false);
  });

  it("P v T === T", () => {
    expect(OR(true, true)).toBe(true);
    expect(OR(false, true)).toBe(true);
  });

  it("P v F === P", () => {
    expect(OR(true, false)).toBe(true);
    expect(OR(false, false)).toBe(false);
  });

  it("(P -> Q) === (~Q -> ~P)", () => {
    expect(IMPLY(true, false)).toBe(IMPLY(NOT(false), NOT(true)));
    expect(IMPLY(false, true)).toBe(IMPLY(NOT(true), NOT(false)));
    expect(IMPLY(true, true)).toBe(IMPLY(NOT(true), NOT(true)));
    expect(IMPLY(false, false)).toBe(IMPLY(NOT(false), NOT(false)));
  });

  it("(P -> Q) === (~P v Q)", () => {
    expect(IMPLY(true, false)).toBe(OR(NOT(true), false));
    expect(IMPLY(false, true)).toBe(OR(NOT(false), true));
    expect(IMPLY(true, true)).toBe(OR(NOT(true), true));
    expect(IMPLY(false, false)).toBe(OR(NOT(false), false));
  })

  it("~(P ^ Q) === (~P v ~Q)", () => {
    expect(NOT(AND(true, false))).toBe(OR(NOT(true), NOT(false)));
    expect(NOT(AND(false, true))).toBe(OR(NOT(false), NOT(true)));
    expect(NOT(AND(true, true))).toBe(OR(NOT(true), NOT(true)));
    expect(NOT(AND(false, false))).toBe(OR(NOT(false), NOT(false)));
  });

  it("~(P v Q) === (~P ^ ~Q)", () => {
    expect(NOT(OR(true, false))).toBe(AND(NOT(true), NOT(false)));
    expect(NOT(OR(false, true))).toBe(AND(NOT(false), NOT(true)));
    expect(NOT(OR(true, true))).toBe(AND(NOT(true), NOT(true)));
    expect(NOT(OR(false, false))).toBe(AND(NOT(false), NOT(false)));
  });

  it("(P <-> Q) === (P -> Q) ^ (Q -> P)", () => {
    expect(IFF(true, false))
      .toBe(AND(IMPLY(true, false), IMPLY(false, true)));
    expect(IFF(false, true))
      .toBe(AND(IMPLY(false, true), IMPLY(true, false)));
    expect(IFF(true, true))
      .toBe(AND(IMPLY(true, true), IMPLY(true, true)));
    expect(IFF(false, false))
      .toBe(AND(IMPLY(false, false), IMPLY(false, false)));
  });
});
