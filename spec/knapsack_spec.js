const solve = require('../code/knapsack.js');

describe("Knapsack#solve", function() {
    it("solves for cool cases", function () {
        expect(solve([60, 100, 120], [10, 20, 30], 50)).toEqual([220, [1, 2]]);
        expect(solve([7, 9, 5, 12, 14, 6, 12], [3, 4, 2, 6, 7, 3, 5], 15)).toEqual([34, [0, 1, 5, 6]]);
    });
});
