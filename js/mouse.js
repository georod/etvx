// Richard Wen
// rrwen.dev@gmail.com

// (mouse_on) Single mouse event
var onMouseEvent = function(event, type, d, i, d3Object, out) {

	// (mouse_on_vars) Set datum and default function
	var dFunction = d[event];
	var defaultFunction = out.options[type][event];

	// (mouse_on_function) Call datum func first, otherwise call default func
	if (typeof dFunction === 'function') {
		return dFunction(d3Object, d, i);
	} else if (typeof defaultFunction === 'function') {
		return defaultFunction(d3Object, d, i);
	}
};

// (mouse_add) Add mouse events to d3 elements
var addMouseEvents = function(type, out) {
	out[type].on = out[type].element
		.on('click', function(d, i) {
			return onMouseEvent('click', type, d, i, d3.select(this), out);
		})
		.on('dblclick', function(d, i) {
			return onMouseEvent('dblclick', type, d, i, d3.select(this), out);
		})
		.on('mousedown', function(d, i) {
			return onMouseEvent('mousedown', type, d, i, d3.select(this), out);
		})
		.on('mouseup', function(d, i) {
			return onMouseEvent('mouseup', type, d, i, d3.select(this), out);
		})
		.on('mouseenter', function(d, i) {
			return onMouseEvent('mouseenter', type, d, i, d3.select(this), out);
		})
		.on('mouseleave', function(d, i) {
			return onMouseEvent('mouseleave', type, d, i, d3.select(this), out);
		})
		.on('mouseover', function(d, i) {
			return onMouseEvent('mouseover', type, d, i, d3.select(this), out);
		})
		.on('mouseout', function(d, i) {
			return onMouseEvent('mouseout', type, d, i, d3.select(this), out);
        });
    return out;
};
