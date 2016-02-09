var arrayFrom = Function.prototype.call.bind(Array.prototype.slice); // Array.from

// without additional div
function getDocumentFragmentFromString(html) {
  // return document.createRange().createContextualFragment(html); // FU safari
  var range = document.createRange();
  range.selectNode(document.body);// safari
  return range.createContextualFragment(html);
}

function autoElemsFromDom(dom, type, name, flat) {

  var elemsSelect;
  var elems;

  if (!name) throw new Error('no-name not allowed');

  if (typeof dom === 'string') {
    dom = getDocumentFragmentFromString(dom);
  }

  if (!dom.nodeType) {
    throw new Error('string or DOM node');
  }

  if (flat) {
    elems = dom;
  } else {
    elems = dom.elems = {};
  }

  if (type === 'data') name = 'data-' + name;

  if (type === 'data' || type === 'attr') {
    elemsSelect = dom.querySelectorAll('[' + name + ']');
  } else if (type === 'class') {
    elemsSelect = dom.querySelectorAll('[class*="' + name + '-"]');
  } else {
    throw new Error('type "' + type + '" unsupported');
  }

  arrayFrom(elemsSelect).forEach(function (e) {

    var varName;

    if (type === 'data' || type === 'attr') {
      varName = e.getAttribute(name);
    } else {
      varName = e.className.match(new RegExp(name + '-' + '((-?\\w+)+)'));
      if (varName && varName.length) varName = varName[1];
    }

    if (!varName) return;
    if (!elems[varName]) elems[varName] = [];
    if (elems[varName]) elems[varName].push(e);

  });

  return dom;

}

module.exports = autoElemsFromDom;
