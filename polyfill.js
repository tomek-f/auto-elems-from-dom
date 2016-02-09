// ie 9, ie 10
if ((typeof Range !== 'undefined') && !Range.prototype.createContextualFragment) {
  Range.prototype.createContextualFragment = function(html) {
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    frag.appendChild(div);
    div.outerHTML = html;
    return frag;
  };
}
