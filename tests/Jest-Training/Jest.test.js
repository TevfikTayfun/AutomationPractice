const sum = require("./Jest");

describe("example tests", () => {
  it("should add 1 + 2 equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment" , () => {
    const obj = {};
    //does not work because actually it's pointing to a specific location in the memory not the value of it.
    //yerine to Equal kullanırsak çalışır
    expect(obj).toEqual({});
    //expect(obj).toBe({});
  })
});

describe("truthy or falsy",() =>{
    it("null",()=>{
        const n = null;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy()
    })

})

describe("numbers",()=>{

    it("two plus two", ()=>{
        const value = 2+2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
    })
})

describe("arrays", ()=>{
    it("array contains",()=>{
        const shoppingLists = ['diapers', 'kleenex', 'trashbag','milk']
        expect(shoppingLists).toContain('milk')

    })
})
