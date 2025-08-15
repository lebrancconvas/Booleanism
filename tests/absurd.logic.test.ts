import { describe, it, expect } from "bun:test";
import { NOT, AND, OR, ABSURD_IMPLY, IFF } from "../utils/operators";

describe("Logic with Absurd System Law Test", () => {
  it("(P ~> Q) === (P ^ Q)", () => {
    expect(ABSURD_IMPLY(true, false)).toBe(AND(true, false));
    expect(ABSURD_IMPLY(false, true)).toBe(AND(false, true));
    expect(ABSURD_IMPLY(true, true)).toBe(AND(true, true));
    expect(ABSURD_IMPLY(false, false)).toBe(AND(false, false));
  });
});

