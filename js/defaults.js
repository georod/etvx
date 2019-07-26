// Richard Wen
// rrwen.dev@gmail.com

// (default) Set default options
var getDefaults = function(options) {
    var out = {};

    // (default_options) Default options
	out.options = options || {};
	out.options.id = out.options.id || 'body';
	
	// (default_svg) SVG options
	out.options.svg = options.svg || {};
	out.options.svg.initialize = out.options.svg.initialize !== false;
	out.options.svg.width = out.options.svg.width || '1000px';
	out.options.svg.height = out.options.svg.height || '100%';
	out.options.svg.class = out.options.svg.class || '';
	
	// (default_circle) Circle options
	out.options.circles = out.options.circles || {};
	out.options.circles.data = out.options.circles.data || [{}];
	out.options.circles.duration = (out.options.circles.duration == undefined) ? 1000 : out.options.circles.duration;
	out.options.circles.delay = (out.options.circles.delay == undefined) ? false : out.options.circles.delay;
	out.options.circles.r = out.options.circles.r || '10%';
	out.options.circles.cx = out.options.circles.cx || '50%';
	out.options.circles.cy = out.options.circles.cy || '50%';
	out.options.circles.class = out.options.circles.class || '';
	out.options.circles.fill = out.options.circles.fill || '#FFFFFF';
	out.options.circles.fillOpacity = out.options.circles.fillOpacity || '0.8';
	out.options.circles.stroke = out.options.circles.stroke || '#444';
	out.options.circles.strokeOpacity = out.options.circles.strokeOpacity || '0.8';
	out.options.circles.strokeWidth = out.options.circles.strokeWidth || '1';
	
	// (default_text) Text options
	out.options.text = out.options.text || {};
	out.options.text.data = out.options.text.data || [{}];
	out.options.text.duration = (out.options.text.duration == undefined) ? 1000 : out.options.text.duration;
	out.options.text.delay = (out.options.text.delay == undefined) ? false : out.options.text.delay;
	out.options.text.x = out.options.text.x || '45%';
	out.options.text.y = out.options.text.y || '70%';
	out.options.text.class = out.options.text.class || '';
	out.options.text.text = out.options.text.text || '';
	out.options.text.fontFamily = out.options.text.fontFamily || 'sans-serif';
	out.options.text.fontSize = out.options.text.fontSize || '12px';
	out.options.text.fontWeight = out.options.text.fontWeight || 'light';
	out.options.text.rotate = out.options.text.rotate || '0';
	out.options.text.fill = out.options.text.fill || '#4D4D4D';
	out.options.text.fillOpacity = out.options.text.fillOpacity || '0.8';
	out.options.text.stroke = out.options.text.stroke || 'white';
	out.options.text.strokeOpacity = out.options.text.strokeOpacity || '0';
	out.options.text.strokeWidth = out.options.text.strokeWidth || '0.15';
	
	// (default_lines) Line options
	out.options.lines = out.options.lines || {};
	out.options.lines.data = out.options.lines.data || [{}];
	out.options.lines.duration = (out.options.lines.duration == undefined) ? 1200 : out.options.lines.duration;
	out.options.lines.delay = (out.options.lines.delay == undefined) ? false : out.options.lines.delay;
	out.options.lines.x1 = out.options.lines.x1 || '25%';
	out.options.lines.x2 = out.options.lines.x2 || '75%';
	out.options.lines.y1 = out.options.lines.y1 || '25%';
	out.options.lines.y2 = out.options.lines.y2 || '25%';
	out.options.lines.class = out.options.lines.class || '';
	out.options.lines.fill = out.options.lines.fill || '#4D4D4D';
	out.options.lines.fillOpacity = out.options.lines.fillOpacity || '0.8';
	out.options.lines.stroke = out.options.lines.stroke || '#4D4D4D';
	out.options.lines.strokeOpacity = out.options.lines.strokeOpacity || '0.8';
    out.options.lines.strokeWidth = out.options.lines.strokeWidth || '0.5';
    return out;
}
