const Benchmark = require('benchmark');
const LCSnSSolve_Unoptimized = require('../code/longest_common_subsequence_n_strings.js');
const LCSnSSolve_Optimized = require('../code/longest_common_subsequence_n_strings_optimized.js');
var suite = new Benchmark.Suite;

// add tests
suite.add('unoptimized LCSnS', ()  => {
    LCSnSSolve_Unoptimized(
        'ababababababaababab',
        'abcbabcbabcbabcabca',
        'aaaaaaaaaaaaaaaaaaa',
        'abcdabcdabcdabcdacb',
        'abcdeabcdeabcdeabcd',
    );
}).add('optimized LCSnS', () => {
    LCSnSSolve_Optimized(
        'ababababababaababab',
        'abcbabcbabcbabcabca',
        'aaaaaaaaaaaaaaaaaaa',
        'abcdabcdabcdabcdacb',
        'abcdeabcdeabcdeabcd',
    );
}).run({ 'async': true }).on('complete', (result) => {
    console.log(result.currentTarget['0'].stats.mean);
    console.log(result.currentTarget['1'].stats.mean);
});
