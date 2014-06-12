// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result;

  if (obj === null) {
  	return 'null';
  }

  if (obj === undefined) {
    return undefined;
  }

  if (typeof obj === 'function') {
    return undefined;
  }

  if (typeof obj === 'boolean') {
  	return obj ? 'true' : 'false';
  }

  if (typeof obj === 'number') {
  	return obj.toString();
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
  	result = '[';
  	obj.forEach(function(el) {
  		result += stringifyJSON(el) + ',';
  	});
    // Remove trailing comma
  	if (obj.length > 0) {
  		result = result.slice(0,-1);
  	}
  	result += ']';
  	return result;
  }

  // last possibility, obj is a generic object
  result = '{';
  var count = 0;
  Object.keys(obj).forEach(function(key) {
    if (stringifyJSON(obj[key]) !== undefined) {
      result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      count++;
    }
  });
  // Remove trailing comma
  if (count > 0) {
    result = result.slice(0,-1);
  }
  result += '}';
  return result;

};
