// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var current = arguments[1] || document.body;
  var result = arguments[2] || [];

  if (current.classList.contains(className)) {
  	result.push(current);
  }

  // This may also have been implemented using current.children instead of 
  // the required current.childNodes. This would have eliminated the need
  // for the conditional checking that the node is an element node.
  // Element.children only returns the elements (what we want).
  // Node.childNodes returns all child nodes, including text nodes (we don't want those)
  Array.prototype.slice.apply(current.childNodes).forEach(function(node) {
  	if (node.nodeType === Node.ELEMENT_NODE) {
  		getElementsByClassName(className, node, result);
  	}
  });

  return result;
};
