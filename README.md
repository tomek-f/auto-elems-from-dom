# auto-elems-from-dom

> Get elements from DOM easily!

## About

* get elements from DOM (reference to DOM, document fragment) or string
* returns DOM (reference to DOM, document fragment) and elements' references

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

// autoElemsFromDom(dom, type, name, flat)

// type: attr, name: data-elo
var a = autoElemsFromDom('<div data-elo="s1"><div data-elo="s2">111</div></div><div data-elo="s1">111</div>', 'attr', 'data-elo');
console.log(a, a.elems); // dom, elems ({s1: [], s2: []})

// type: data, name: elo
var b = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2 assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'data', 'elo');
console.log(b, b.elems); // dom, elems ({s1: [], s2: []})

// type: class, name: elo
var c = autoElemsFromDom('<div class="elo-s1"><div class="dssd elo-s2 assdsd">111</div></div><div class="ss elo-s1">111</div>', 'class', 'elo');
console.log(c, c.elems); // dom, elems ({s1: [], s2: []})

// type: class, name: elo, flat: true
var d = autoElemsFromDom('<div class="elo-s1"><div class="dssd elo-s2 assdsd">111</div></div><div class="ss' +
 ' elo-s1">111</div>', 'class', 'elo', true);
console.log(d, d.s1, d.s2); // dom, elems (dom.s1, dom.s2)
```
## Changelog

[View on github](https://github.com/tomek-f/auto-elems-from-dom/blob/master/changelog.md).
