// https://www.hackerrank.com/challenges/coin-change/problem
// Toggle this.memoize's value to view the difference between the number of computations
// with and without cache.

class CoinChange {
    constructor(coins, value) {
        this.coins = coins;
        this.value = value;
        this.memoize = true;
        this.verbose = false;
        this.computations = {};
        this.cache = [];
    }

    solve() {
        let n = this.coinChange(this.coins.length - 1, this.value);
        let totalComputations = Object.values(this.computations).reduce((sum, value) => { return sum + value; }, 0);

        if(this.verbose) {
            console.log(this.computations);
            console.log(`Total computations ${totalComputations}`);
        }
        return n;
    }

    // Returns the number of possibilites considering coins up until the i-est index
    coinChange(i, remainingValue) {
        let n = 0;

        if(this.memoize == true && this.cache[i] && this.cache[i][remainingValue])
            return this.cache[i][remainingValue];
        else {
            let key = `${i}-${remainingValue}`;
            this.computations[key] = this.computations[key] || 0;
            this.computations[key] += 1;
        }

        if(i == -1)
            return 0;

        if(remainingValue == 0)
            return 1;

        // Considering all combinations including the i-est coin
        if(this.coins[i] <= remainingValue)
            n += this.coinChange(i, remainingValue - this.coins[i]);

        // Considering all combinations without the i-est coin
        n += this.coinChange(i-1, remainingValue);

        if(this.memoize == true) {
            this.cache[i] = this.cache[i] || {};
            this.cache[i][remainingValue] = n;
        }

        return n;
    }
}

function solve(coins, value) {
    return (new CoinChange(coins, value)).solve();
};

module.exports = solve;
