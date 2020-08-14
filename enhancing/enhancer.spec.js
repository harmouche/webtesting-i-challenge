const enhancer = require('./enhancer.js');
// test away!

describe("enhancer testing", () => {
    describe("repair", () => {
        const item = {
        name: "Item 1",
        enhancement: 9,
        durability: 78,
        };
    
        it("can repair an items durability to 100", () => {
        const expectedDurability = 100;
        const actualOutput = enhancer.repair(item);
        expect(actualOutput.durability).toBe(expectedDurability);
        });
    });

    describe("success", () => {
        const item = {
        name: "Item 1",
        enhancement: 14,
        durability: 65,
        };
    
        it("can enhance an item by 1", () => {
        const expectedOutput = 15;
        const actualOutput = enhancer.success(item);
        expect(actualOutput.enhancement).toBe(expectedOutput);
        expect(actualOutput.durability).toBe(65);
        });
    
        it("will not enhance an item already at the max enhancement", () => {
        const maxEnhancement = {
            name: "Item 1",
            enhancement: 20,
            durability: 65,
        };
    
        const expectedOutput = 20;
        const actualOutput = enhancer.success(maxEnhancement);
        expect(actualOutput.enhancement).toBe(expectedOutput);
        });
    });

    describe("fail", () => {
        it("will decrease by 5 if enhancement is less than 15", () => {
        const item = {
            name: "Item 1",
            enhancement: 11,
            durability: 65,
        };
        const expected = 6;
        const actual = enhancer.fail(item);
        expect(actual.enhancement).toBe(expected);
        });
    
        it("will decrease by 1 if enhancement is greater than 16", () => {
        const item = {
            name: "Item 1",
            enhancement: 18,
            durability: 65,
        };
        const expected = 17;
        const actual = enhancer.fail(item);
        expect(actual.enhancement).toBe(expected);
        });
    
        it("will decrease by 10 if enhancement is greater than 15 and less than 16", () => {
        const item = {
            name: "Item 1",
            enhancement: 16,
            durability: 65,
        };
        const expected = 6;
        const actual = enhancer.fail(item);
        expect(actual.enhancement).toBe(expected);
        });
    });

    describe("get", () => {
        it("no change if enhancement is 0", () => {
        const item = {
            name: "Item 1",
            enhancement: 0,
            durability: 70,
        };
        const expected = "Item 1";
        const actual = enhancer.get(item);
        expect(actual.name).toBe(expected);
        });
    
        it("include enhancement level if it is greater than 0", () => {
        const item = {
            name: "Item 1",
            enhancement: 5,
            durability: 70,
        };
        const expected = "[+5] Item 1";
        const actual = enhancer.get(item);
        expect(actual.name).toBe(expected);
        });
    });
});