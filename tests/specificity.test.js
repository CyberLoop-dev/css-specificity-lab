import test from "node:test";
import assert from "node:assert/strict";
import {calculateSpecificity,compareSelectors} from "../public/specificity.js";
test("counts IDs, classes, and types",()=>assert.deepEqual(calculateSpecificity("#app .card h2"),[1,1,1]));
test(":where contributes zero",()=>assert.deepEqual(calculateSpecificity(":where(#x) .item"),[0,1,0]));
test(":is uses the strongest argument",()=>assert.deepEqual(calculateSpecificity(":is(.a,#b) span"),[1,0,1]));
test("compares tuples lexicographically",()=>assert.equal(compareSelectors("#x","main.card").winner,"A"));
