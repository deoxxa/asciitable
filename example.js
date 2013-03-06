#!/usr/bin/env node

var asciitable = require("./");

var table = asciitable([
  {ab: "a", b: "b", c: "c"},
  {ab: "asddsfa", b: "sss", c: "zxc"},
  {ab: "dsgvdgsdvgssdf", b: "x", c: "eryty"},
  {ab: "m", b: "n", c: "o", de: "p"},
  {ab: 5, b: null, c: {}, de: []},
  {ab: function(){}},
]);

console.log(table);
