let animals = [];

describe("Animals Array Test", () => {
  beforeEach(() => {
    animals = ["elephant", "zebra", "bear", "tiger"];
  });

  it("should add animal to the end of the array", () => {
    let alligator = "alligator";
    animals.push(alligator);
    expect(animals[animals.length - 1]).toBe("alligator");
  });

  it("should add animal to the beginning of the array", () => {
    let monkey = "monkey";
    animals.unshift(monkey);
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});
