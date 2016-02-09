# auto-elems-from-dom

> Don't let DOM be your doom!

```javascript
var autoElemsFromDom = require('auto-elems-from-dom');

var a = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2 assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'attr', 'data-elo');
console.log(a, a.noi);

var b = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2 assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'data', 'elo');
console.log(b, b.noi);

var c = autoElemsFromDom('<div data-elo="s1" class="elo-s1"><div data-elo="s2" class="dssd elo-s2 assdsd">111</div></div><div data-elo="s1" class="ss elo-s1">111</div>', 'class', 'elo');
console.log(c, c.noi);
```
