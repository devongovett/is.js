/*
 * is.js
 * Function that returns whether an object is of a given type.
 * Pass multiple types to test whether an object is of any of the types
 * Originally by Dmitry Baranovskiy
 * Modified by Devon Govett to support multiple types
 */

function is(o /*, type, type */) {
	var types = Array.prototype.slice.call(arguments, 1);

	for(var i = 0, len = types.length; i < len; i++) {
	    var type = String(types[i]).toLowerCase();

	    if((type == "null" && o === null) ||
	       (type == typeof o) ||
	       (type == "object" && o === Object(o)) ||
	       (type == "array" && Array.isArray && Array.isArray(o)) ||
	       Object.prototype.toString.call(o).slice(8, -1).toLowerCase() == type) return true;
	}

	return false;
}