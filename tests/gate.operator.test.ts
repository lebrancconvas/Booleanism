import { describe, it, expect } from "bun:test";
import { NAND, NOR, XNOR, XOR } from "../utils/operators/gate";

describe("Logic Gate Operator Test.", () => {
  it("NAND Operator Test.", () => {
    expect(NAND(true, true)).toBe(false);
    expect(NAND(true, false)).toBe(true);
    expect(NAND(false, true)).toBe(true);
    expect(NAND(false, false)).toBe(true);
  });

  it("NOR Operator Test.", () => {
    expect(NOR(true, true)).toBe(false);
    expect(NOR(true, false)).toBe(false);
    expect(NOR(false, true)).toBe(false);
    expect(NOR(false, false)).toBe(true);
  });

  it("XOR Operator Test.", () => {
    expect(XOR(true, true)).toBe(false);
    expect(XOR(true, false)).toBe(true);
    expect(XOR(false, true)).toBe(true);
    expect(XOR(false, false)).toBe(false);
  });

  it("XNOR Operator Test.", () => {
    expect(XNOR(true, true)).toBe(true);
    expect(XNOR(true, false)).toBe(false);
    expect(XNOR(false, true)).toBe(false);
    expect(XNOR(false, false)).toBe(true);
  })
});
