class LongestCommonSubsequenceNStrings {
    constructor(strings) {
        this.strings = strings;
        this.lcsTable = [];
    }

    solve() {
        this.populateLcsTable();
        return this.fetchLcsTableEntry(this.strings.map((s) => { return s.length - 1; }));
    }

    populateLcsTable() {
        let indexes = Array(this.strings.length).fill(0);
        let wentThroughTheWholeTable = false;

        while(!wentThroughTheWholeTable) {
            let currentIndex = indexes.length - 1;
            let updatedAllIndexes = false;
            this.setLcsTableEntry(indexes, this.lcs(indexes));

            while(currentIndex >= 0) {
                if(indexes[currentIndex] < this.strings[currentIndex].length - 1) {
                    // We can increase indexes[currentIndex] by 1 and stop.
                    indexes[currentIndex] += 1;
                    currentIndex = -1;
                } else {
                    // The currentIndex has reached its maximum value. If it is the first index,
                    // we are done, otherwise set it to 0
                    if(currentIndex == 0)
                        wentThroughTheWholeTable = true;
                    else
                        indexes[currentIndex] = 0;

                    currentIndex -= 1;
                }
            }
        }
    }

    setLcsTableEntry(indexes, value) {
        let currentArray = this.lcsTable;

        for(let index of indexes.slice(0, indexes.length - 1)) {
            if(!currentArray[index])
                currentArray[index] = [];

            currentArray = currentArray[index];
        }

        currentArray[indexes[indexes.length - 1]] = value;
    }

    fetchLcsTableEntry(indexes) {
        let currentArray = this.lcsTable;

        if(indexes[indexes.length - 1] <= 0)
            return 0;

        for(let index of indexes.slice(0, indexes.length - 1)) {
            if(index <= 0)
                return 0;

            currentArray = currentArray[index];
        }

        return currentArray[indexes[indexes.length - 1]];
    }

    lcs(indexes) {
        let areAllEqual = false;

        for(let i = 1; i < this.strings.length; i += 1) {
            areAllEqual = this.strings[0][indexes[0]] == this.strings[i][indexes[i]];

            if(!areAllEqual)
                break;
        }

        if(areAllEqual) {
            let newIndexes = indexes.map((i) => { return i - 1; });
            return this.fetchLcsTableEntry(newIndexes) + 1;
        }

        let newIndexes = indexes.slice(0);

        return Math.max(...indexes.map((index, i) => {
            if(i > 0)
                newIndexes[i-1] = newIndexes[i-1] + 1;

            newIndexes[i] = newIndexes[i] - 1;
            return this.fetchLcsTableEntry(newIndexes);
        }));
    }
}

function solve(...strings) {
    return (new LongestCommonSubsequenceNStrings(strings)).solve();
};

module.exports = solve;
