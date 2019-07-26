// Richard Wen
// rrwen.dev@gmail.com

// (visualization) Main function for creating d3 visualization
var visualization = function (options) {
	var emptyData = {r:'0', text: '', fillOpacity: '0', strokeOpacity: '0'};
	
	// (options) Set default options
	var out = getDefaults(options);
	
	// (d3_svg) <svg> functions
	out.svg = {};
	
	// (d3_svg_add) Create <svg> inside <div>
	out.svg.add = function(svg) {
		out = addSVG(svg, out);
	};
	
	// (d3_svg_remove) Remove all <svg> inside <div>
	out.svg.remove = function() {
		removeSVG(out);
	};
	
	// (d3_svg_replace) Replace all <svg> with new <svg> options
	out.svg.replace = function(svg) {
		out.svg.remove();
		out.svg.add(svg);
	};
	
	// (d3_circles) <circle> functions
	out.circles = {};
	
	// (d3_circles_add) Add <circle> inside <svg>
	out.circles.add = function(data) {
		out = addCircles(data, out);
		out = addCirclesTransition(out);
		out = addMouseEvents('circles', out);
	};
	
	// (d3_circles_remove) Remove all <circle> inside <svg>
	out.circles.remove = function() {
		removeCircles(out);
	};
	
	// (d3_circles_replace) Replace all <circle> with new data
	out.circles.replace = function (data) {
		out.circles.remove();
		out.circles.add(data);
	};
	
	// (d3_lines) <line> functions
	out.lines = {};
	
	// (d3_lines_add) Add <line> inside <svg>
	out.lines.add = function(data) {
		out = addLines(data, out);
		out = addLinesTransition(out);
		out = addMouseEvents('lines', out);
	};
	
	// (d3_lines_remove) Remove all <line> inside <svg>
	out.lines.remove = function() {
		removeLines(out);
	};
	
	// (d3_lines_replace) Replace all <line> with new data
	out.lines.replace = function (data) {
		out.lines.remove();
		out.lines.add(data);
	};
	
	// (d3_text) <text> functions
	out.text = {};
	
	// (d3_text_add) Add <text> inside <svg>
	out.text.add = function(data) {
		out = addText(data, out);
		out = addTextTransition(out);
		out = addMouseEvents('text', out);
	};
	
	// (d3_text_remove) Remove all <text> inside <svg>
	out.text.remove = function() {
		removeText(out);
	};
	
	// (d3_text_replace) Replace all <text> with new data
	out.text.replace = function (data) {
		out.text.remove();
		out.text.add(data);
	};
	
	// (return_out) Initialize svg and return visualization object
	if (out.options.svg.initialize) {
		out.svg.remove();
		out.svg.add();
	}
	return out;
};