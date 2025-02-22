"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADVERBS = void 0;
exports.getNthWord = getNthWord;
exports.thirdToFirstPerson = thirdToFirstPerson;
function getNthWord(str, n, apostrophe = false) {
    if (n < 1)
        return ""; // Return empty string if n is less than 1
    const regex = apostrophe ? /[\w']+/g : /\w+/g;
    const words = str.match(regex);
    return words && words.length >= n ? words[n - 1] : "";
}
exports.ADVERBS = [
    "absolutely",
    "accordingly",
    "actually",
    "additionally",
    "admittedly",
    "also",
    "always",
    "anyway",
    "certainly",
    "chiefly",
    "clearly",
    "consequently",
    "constantly",
    "continually",
    "conversely",
    "definitely",
    "especially",
    "even",
    "exclusively",
    "finally",
    "frequently",
    "furthermore",
    "hence",
    "however",
    "indeed",
    "infrequently",
    "instead",
    "just",
    "largely",
    "likewise",
    "literally",
    "mainly",
    "meanwhile",
    "merely",
    "moreover",
    "mostly",
    "namely",
    "never",
    "nevertheless",
    "next",
    "nonetheless",
    "notably",
    "now",
    "occasionally",
    "often",
    "only",
    "otherwise",
    "particularly",
    "precisely",
    "primarily",
    "principally",
    "purely",
    "rarely",
    "rather",
    "regularly",
    "scarcely",
    "seldom",
    "similarly",
    "simply",
    "solely",
    "sometimes",
    "specifically",
    "still",
    "subsequently",
    "surely",
    "then",
    "therefore",
    "thus",
    "truly",
    "undoubtedly",
    "usually",
];
// This was "inspired by" (copied from)
// https://github.com/tandrewnichols/conjugate by Andrew Nichols
function thirdToFirstPerson(verb) {
    const patterns = [
        {
            pattern: /^is$/,
            process: (_) => "are",
        },
        {
            pattern: /^has$/,
            process: (_) => "have",
        },
        {
            pattern: /^(can|could|should|may)$/,
            process: (verb) => verb,
        },
        {
            pattern: /(oes|sses|shes|ches|zes|jes|xes)$/,
            process: (verb) => {
                return verb.slice(0, -2);
            },
        },
        {
            pattern: /^ies$/,
            process: (verb) => {
                return verb.slice(0, -3) + "y";
            },
        },
        {
            pattern: /s$/,
            process: (verb) => {
                return verb.slice(0, -1);
            },
        },
    ];
    for (const { pattern, process } of patterns) {
        if (pattern.test(verb)) {
            return process(verb);
        }
    }
    return verb;
}
