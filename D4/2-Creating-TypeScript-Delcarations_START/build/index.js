"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let a = lodash_1.default.multiply(2, 5);
let b = lodash_1.default.reverse(arr1);
let c = lodash_1.default.reverse(arr2);
let d = lodash_1.default.dropRight(['a', 'b', 'c', 4, 5, 6], 1);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
