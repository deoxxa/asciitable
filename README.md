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
```

Arguments

* _options_ - an object specifying some things about the table you want
  generated. Options are optional.
* _data_ - an array of objects.

Options

* _fields_ - an array of field names you want to display. If omitted, asciitable
  will try to figure out what all the fields are for all the objects in the data
  array.
* _plusIntersections_ - enables using a `+` character at line intersections.
  Default is false. Or undefined. Whatever, default is "not enabled".

Example
-------

Also see [example.js](https://github.com/deoxxa/pillion/blob/master/example.js).

```javascript
var asciitable = require("asciitable");

var table = asciitable([
  {a: "a", b: "b", c: "c"},
  {a: "asddsfa", b: "sss", c: "zxc"},
  {a: "dsgvdgsdvgssdf", b: "x", c: "eryty"},
  {a: "m", b: "n", c: "o", d: "p"},
  {a: 5, b: null, c: {}, d: []},
  {a: function(){}},
]);

console.log(table);
```

Output:

```
-+----------------+------+-----------------+---+-
 | a              | b    | c               | d |
-+----------------+------+-----------------+---+-
 | a              | b    | c               |   |
 | asddsfa        | sss  | zxc             |   |
 | dsgvdgsdvgssdf | x    | eryty           |   |
 | m              | n    | o               | p |
 | 5              | null | [object Object] |   |
 | function (){}  |      |                 |   |
-+----------------+------+-----------------+---+-
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
