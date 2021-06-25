import { MessageGenerator } from ".";

describe("src/index.ts", () => {
  it("Should show [Hello world] message", () => {
    const generator = new MessageGenerator();
    const message = generator.generateHello();
    expect(message).toBe("Hello world");
  });
});
