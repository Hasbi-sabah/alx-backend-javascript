const assert = require('assert');

const calculateNumber = require("./0-calcul.js");

describe('number calculator', () => {
    it('0 and 0', () => {
        res = calculateNumber(0, 0)
        assert.strictEqual(res, 0)
    })
    it('round up pos', () => {
        res = calculateNumber(1.5, 0)
        assert.strictEqual(res, 2)
    })
    it('round down pos', () => {
        res = calculateNumber(1.4, 0)
        assert.strictEqual(res, 1)
    })
    it('round up neg', () => {
        res = calculateNumber(-1.5, 0)
        assert.strictEqual(res, -1)
    })
    it('round down neg', () => {
        res = calculateNumber(-1.6, 0)
        assert.strictEqual(res, -2)
    })
})