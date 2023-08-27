const jst = require("jest");

const isPrime = require("./utility");

describe("Find prime numbers cases", () => {
  it("2 is a prime number", () => {
    expect(isPrime(2)).toBe(true);
  });

  it("3 is a prime number", () => {
    expect(isPrime(3)).toBe(true);
  });

  it("5 is a prime number", () => {
    expect(isPrime(5)).toBe(true);
  });

  it("8 is a prime number", () => {
    expect(isPrime(8)).toBe(false);
  });
});
