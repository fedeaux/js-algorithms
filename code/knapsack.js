class Knapsack {
    constructor(values, weights, capacity) {
        this.values = values;
        this.weights = weights;
        this.capacity = capacity;
        this.knapsackTable = [];
    }

    solve() {
        return [this.knapsack(this.values.length - 1, this.capacity), this.selectedItems()];
    }

    // Returns the maximum value considering the first i items given a currentCapacity
    knapsack(i, currentCapacity) {
        if(i == -1)
            return 0;

        if(this.knapsackTable[i] && this.knapsackTable[i][currentCapacity])
            return this.knapsackTable[i][currentCapacity];

        if(this.weights[i] <= currentCapacity) { // We can add the current item
            let valueWithItem = this.knapsack(i - 1, currentCapacity - this.weights[i]) + this.values[i];
            let valueWithoutItem = this.knapsack(i - 1, currentCapacity);
            this.knapsackTable[i] = this.knapsackTable[i] || [];
            this.knapsackTable[i][currentCapacity] = Math.max(valueWithItem, valueWithoutItem);
            return this.knapsackTable[i][currentCapacity];
        } else { //We can't add the current item
            this.knapsackTable[i] = this.knapsackTable[i] || [];
            this.knapsackTable[i][currentCapacity] = this.knapsack(i - 1, currentCapacity);
            return this.knapsackTable[i][currentCapacity];
        }
    }

    selectedItems() {
        let items = [];
        let currentCapacity = this.capacity;

        for(let i = this.values.length - 1; i >= 0; i -= 1) {
            // Lets discover if this i-est item is part of the solution.
            let value = this.knapsackTable[i][currentCapacity];

            if(currentCapacity >= this.weights[i] && (
                (i == 0 && value == this.values[0]) ||
                value == this.knapsackTable[i - 1][currentCapacity - this.weights[i]] + this.values[i])
              ) {
                items.push(i);
                currentCapacity -= this.weights[i];
            }
        }

        return items.sort();
    }
}

function solve(values, weights, capacity) {
    return (new Knapsack(values, weights, capacity)).solve();
};

module.exports = solve;
