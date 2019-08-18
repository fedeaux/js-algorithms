const solve = require('../code/longest_common_subsequence.js');

describe("LongestCommonSubsequence#solve", function() {
    it("solves ugly cases", function() {
        // Ugly cases
        expect(solve('', '')).toEqual(0);
        expect(solve('a', '')).toEqual(0);
        expect(solve('', 'a')).toEqual(0);
    });

    it("solves for strings with lengths 1 and 1", function () {
        expect(solve('a', 'a')).toEqual(1);
        expect(solve('a', 'b')).toEqual(0);
    });

    it("solves for strings with lengths 2 and 1", function () {
        // 0 LCS
        expect(solve('ab', 'c')).toEqual(0);

        // 1 LCS
        expect(solve('ab', 'a')).toEqual(1);
        expect(solve('ba', 'a')).toEqual(1);
        expect(solve('aa', 'a')).toEqual(1);
    });

    it("solves for strings with lengths 2 and 2", function () {
        // 0 LCS
        expect(solve('ab', 'cd')).toEqual(0);

        // 1 LCS
        // 1 Matching
        expect(solve('ab', 'ac')).toEqual(1); // [| ]
        expect(solve('ab', 'ca')).toEqual(1); // [\]
        expect(solve('ba', 'ac')).toEqual(1); // [/]
        expect(solve('ba', 'ca')).toEqual(1); // [ |]

        // 2 Matchings
        expect(solve('aa', 'ab')).toEqual(1); // [|/]
        expect(solve('ab', 'aa')).toEqual(1); // [|\]
        expect(solve('aa', 'ba')).toEqual(1); // [\|]
        expect(solve('ba', 'aa')).toEqual(1); // [/|]
        expect(solve('ab', 'ba')).toEqual(1); // [x]

        // 2 LCS
        expect(solve('ab', 'ab')).toEqual(2); // [x]
        expect(solve('aa', 'aa')).toEqual(2); // [x]
    });

    it("solves for long cases", function () {
        expect(solve('aaaaaaaaaaaaaaaaa', 'a')).toEqual(1);
        expect(solve('aaaaaaaaaaaaaaaaa', 'abcdefghijlmnopq')).toEqual(1);
        expect(solve('aaaaaaaaaaaaaaaaa', 'bcdefghaijlmnopq')).toEqual(1);
        expect(solve('aaaaaaaaaaaaaaaaa', 'bcdefghijlmnopqa')).toEqual(1);
        expect(solve('aaaaaaaaaaaaaaaaa', 'abcdefghijlmnopqa')).toEqual(2);

        expect(solve('abcdefghijlmnopq', 'abcdefghijlmnopq')).toEqual(16);
        expect(solve('abcdefghijlmnopq', 'abcdefghijlmnopa')).toEqual(15);
        expect(solve('abcdefgahijlmnopq', 'abcdefghijlmnopq')).toEqual(16);
        expect(solve('abcdefahijlmnopq', 'abcdefghijlmnopq')).toEqual(15);
    });

    it("solves for cool cases", function () {
        expect(solve('abcde', 'ahbhchdheh')).toEqual(5);
        expect(solve('agbgcde', 'ahbhchdheh')).toEqual(5);
    });
});
