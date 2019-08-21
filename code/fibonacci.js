class Fibonacci {
    constructor(n) {
        this.n = n;
    }

    solve() {
        return this.fibonacci(this.n)[0];
    }

    fibonacci(n) {
        let fibo;

        if(n == 0)
            return [0, 0];

        if(n == 1)
            return [1, 0];

        fibo = this.fibonacci(n-1);
        return [fibo[0] + fibo[1], fibo[0]];
    }
}

function solve(n) {
    return (new Fibonacci(n)).solve();
};

module.exports = solve;
