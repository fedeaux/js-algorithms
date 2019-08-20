const solve = require('../code/longest_common_subsequence_n_strings.js');

describe("LongestCommonSubsequenceNStrings#solve", function() {
    it("solves ugly cases", function() {
        expect(solve('aaa', 'aa', 'aaaa')).toEqual(2);
        expect(solve('abc', 'ad', 'aefg')).toEqual(1);
        expect(solve('abc', 'dcf', 'ghc')).toEqual(1);
        expect(solve('abcd', 'abcde', 'abcde', 'abcde', 'abcde')).toEqual(4);
        expect(solve('abcd', 'abcdef', 'abcde', 'abcde', 'abcde')).toEqual(4);
        expect(solve('aaaaa', 'abadea', 'aaabcd', 'gggaaha', 'alala')).toEqual(3);
    });
});
