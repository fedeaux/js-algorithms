const solve = require('../code/coin_change.js');

describe("CoinChange#solve", function() {
    it("solves for cool cases", function () {
        expect(solve([1, 2, 3], 4)).toEqual(4);
        expect(solve([2, 5, 3, 6], 10)).toEqual(5);
    });
});
