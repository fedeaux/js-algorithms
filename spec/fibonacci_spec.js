const solve = require('../code/fibonacci');

describe("Fibonacci#solve", function() {
    it("solves for cool cases", function () {
        expect(solve(0)).toEqual(0);
        expect(solve(1)).toEqual(1);
        expect(solve(2)).toEqual(1);
        expect(solve(3)).toEqual(2);
        expect(solve(4)).toEqual(3);
        expect(solve(5)).toEqual(5);
        expect(solve(6)).toEqual(8);
    });
});
