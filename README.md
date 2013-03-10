asciitable
==========

Render tables in text for tabular terminal fun times!

Overview
--------

asciitable is the result of me extracting some code from another project. It can
render simple tables with headings and pretty hyphen/pipe character-based
formatting.

Installation
------------

Available via [npm](http://npmjs.org/):

> $ npm install asciitable

Or via git:

> $ git clone git://github.com/deoxxa/asciitable.git node_modules/asciitable

API
---

**asciitable**

Generates a table! Easy as pie!

```javascript
var table = asciitable(options, data);

// OR

var table = asciitable(data, options);

// OR

var table = asciitable(data);
```

```javascript
// basic table
var table = asciitable([
  {a: "a", b: "b", c: "c"},
  {a: "asddsfa", b: "sss", c: "zxc"},
  {a: "dsgvdgsdvgssdf", b: "x", c: "eryty"},
  {a: "m", b: "n", c: "o", d: "p"},
]);

console.log(table);

// pretty table
var table = asciitable([
  {a: "a", b: "b", c: "c"},
  {a: "asddsfa", b: "sss", c: "zxc"},
  {a: "dsgvdgsdvgssdf", b: "x", c: "eryty"},
  {a: "m", b: "n", c: "o", d: "p"},
], {
  skinny: true,
  intersectionCharacter: "@",
});
```

Arguments

* _options_ - an object specifying some things about the table you want
  generated. Options are optional.
* _data_ - an array of objects.

Options

* _fields_ - an array of field names you want to display. If omitted, asciitable
  will try to figure out what all the fields are for all the objects in the data
  array.
* _intersectionCharacter_ - changes what character to use at points where lines
  intersect. The default is "-".
* _skinny_ - trims the "hanging" characters used in the layout. Saves you two
  horizontal characters!

Example
-------

Also see [example.js](https://github.com/deoxxa/pillion/blob/master/example.js).

```javascript
var asciitable = require("asciitable");

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
```

Output:

```
x----------------x--------x-----------------x--------x
| First          | Second | Third           | Fourth |
x----------------x--------x-----------------x--------x
| a              | b      | c               |        |
| asddsfa        | sss    | zxc             |        |
| dsgvdgsdvgssdf | x      | eryty           |        |
| m              | n      | o               | p      |
| 5              | null   | [object Object] |        |
| function (){}  |        |                 |        |
x----------------x--------x-----------------x--------x
```

License
-------

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub ([deoxxa](http://github.com/deoxxa))
* Twitter ([@deoxxa](http://twitter.com/deoxxa))
* ADN ([@deoxxa](https://alpha.app.net/deoxxa))
* Email ([deoxxa@fknsrs.biz](mailto:deoxxa@fknsrs.biz))
