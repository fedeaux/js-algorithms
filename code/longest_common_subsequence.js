class LongestCommonSubsequence {
    constructor(string1, string2) {
        this.string1 = string1;
        this.string2 = string2;

        this.lcsTable = Array.from(Array(this.string1.length), () => new Array(this.string2.length));
    }

    solve() {
        this.populateLcsTable();
        return this.fromLcsTable(this.string1.length - 1, this.string2.length - 1);
    }


    populateLcsTable() {
        for(let i = 0; i < this.string1.length; i += 1) {
            for(let j = 0; j < this.string2.length; j += 1) {
                this.lcsTable[i][j] = this.lcs(i, j);
            }
        }
    }

    lcs(i, j) {
        if(this.string1[i] == this.string2[j])
            return this.fromLcsTable(i-1, j-1) + 1;

        return Math.max(this.fromLcsTable(i-1, j), this.fromLcsTable(i, j-1));
    }

    fromLcsTable(i, j) {
        if(i < 0 || j < 0)
            return 0;

        return this.lcsTable[i][j];
    }
}

function solve(string1, string2) {
    return (new LongestCommonSubsequence(string1, string2)).solve();
};

module.exports = solve;
