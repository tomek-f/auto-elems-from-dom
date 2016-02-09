# auto-elems-from-dom

> Don't let DOM be your doom!

## Installation

```bash
$ npm install --save auto-elems-from-dom
```

## Polyfill range.createContextualFragment (ie9, ie10, ...)

```javascript
require('auto-elems-from-dom/polyfill');
```

## Usage

```javascript
var autoElemsFromDom = require('auto-elems-from-dom');

var a = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2 assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'attr', 'data-elo');
console.log(a, a.elems); // dom, elems

var b = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2 assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'data', 'elo');
console.log(b, b.elems); // dom, elems

var c = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2 assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'class', 'elo');
console.log(c, c.elems); // dom, elems

var d = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2' +
 ' assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'class', 'elo', true);
console.log(d, d.s1, d.s2); // dom, elems
```
## Changelog

[View on github](https://github.com/tomek-f/auto-elems-from-dom/blob/master/changelog.md).
