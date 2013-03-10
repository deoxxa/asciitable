#!/usr/bin/env node

var asciitable = require("./");

var options = {
  skinny: true,
  intersectionCharacter: "x",
  columns: [
    {field: "ab", name: "First"},
    {field: "b",  name: "Second"},
    {field: "c",  name: "Third"},
    {field: "de", name: "Fourth"},
  ],
};

var table = asciitable(options, [
  {ab: "a",              b: "b",   c: "c"            },
  {ab: "asddsfa",        b: "sss", c: "zxc"          },
  {ab: "dsgvdgsdvgssdf", b: "x",   c: "eryty"        },
  {ab: "m",              b: "n",   c: "o",    de: "p"},
  {ab: 5,                b: null,  c: {},     de: [] },
  {ab: function(){}},
]);

console.log(table);
