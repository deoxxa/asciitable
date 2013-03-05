#!/usr/bin/env node

var asciitable = require("./");

var table = asciitable([
  {a: "a", b: "b", c: "c"},
  {a: "asddsfa", b: "sss", c: "zxc"},
  {a: "dsgvdgsdvgssdf", b: "x", c: "eryty"},
  {a: "m", b: "n", c: "o", d: "p"},
  {a: 5, b: null, c: {}, d: []},
  {a: function(){}},
]);

console.log(table);
