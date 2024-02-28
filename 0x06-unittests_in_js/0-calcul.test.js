const assert = require('assert');

const calculateNumber = require("./0-calcul.js");

describe('number calculator', () => {
    it('first rounded', () => {
        res = calculateNumber(0.5, 1)
        assert.strictEqual(res, 2)
    })
    it('second rounded', () => {
        res = calculateNumber(1, 0.5)
        assert.strictEqual(res, 2)
    })
    it('both rounded', () => {
        res = calculateNumber(1.4, 0.5)
        assert.strictEqual(res, 2)
    })
})