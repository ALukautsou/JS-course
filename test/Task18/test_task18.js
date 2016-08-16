describe("test/Task18/test_task18.js", function() {

    it("verify(regexp1) should return true", function() {
        expect(verify(/ca[rt]/,
                ["my car", "bad cats"],
                ["camper", "high art"])).toEqual(true);
    });

    it("verify(regexp2) should return true", function() {
        expect(verify(/pr?op/,
                ["pop culture", "mad props"],
                ["plop"])).toEqual(true);
    });

    it("verify(regexp3) should return true", function() {
        expect(verify(/ferr(et|y|ari)/,
                ["ferret", "ferry", "ferrari"],
                ["ferrum", "transfer A"])).toEqual(true);
    });

    it("verify(regexp4) should return true", function() {
        expect(verify(/ious\b/,
                ["how delicious", "spacious room"],
                ["ruinous", "consciousness"])).toEqual(true);
    });

    it("verify(regexp5) should return true", function() {
        expect(verify(/\s[.,:;]/,
                ["bad punctuation ."],
                ["escape the dot"])).toEqual(true);
    });

    it("verify(regexp6) should return true", function() {
        expect(verify(/\w{7,}/,
                ["hottentottententen"],
                ["no", "hotten totten tenten"])).toEqual(true);
    });

    it("verify(regexp7) should return true", function() {
        expect(verify(/\b[^e\s]+\b/,
                ["red platypus", "wobbling nest"],
                ["earth bed", "learning ape"])).toEqual(true);
    });
});
