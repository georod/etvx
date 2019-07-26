// Richard Wen
// rrwen.dev@gmail.com

var visualizeRisks = function(options) {
	
	// (options_circles) Default circles options
	options.circles.cx = options.circles.cx || '50%';
	
	// (options_risks) Default risks options
	options.risks = options.risks || {};
	options.risks.data = options.risks.data || [{cause: 'Cause Name', risk: 0.5}];
	options.risks.colorMap = options.risks.colorMap || {};
	options.risks.lineLength = options.risks.lineLength || 15; // as %
	options.risks.maxCircleSize = options.risks.maxCircleSize || 100;
	options.risks.maxCircleSize = Number(options.risks.maxCircleSize);
	options.risks.spaceAboveText = options.risks.spaceAboveText || 5;
	options.risks.spaceBeforeText = options.risks.spaceBeforeText || 1; // as %
	options.risks.spaceBetweenCircles = options.risks.spaceBetweenCircles || 15;
	options.risks.spaceAfterVisualization = options.risks.spaceAfterVisualization || 75;
	
	// (data) Set data for visualizing risks
	var data = options.risks.data;
	
	// (risks_sort) Sort causes from high to low risk
	data.sort(function(a, b) {
		return b.risk - a.risk;
	});
	
	// (risks_total) Calculate total risk for all causes
	var riskTotal = data.reduce(function(total, d) {
		return total + Number(d.risk);
	}, 0);
	
	// (risks_data) Add visualization data based on risks
	var cause, risk, r;
	var circlesData = [], linesData = [], textData = [], cy = 0;
	for (var i = 0; i < data.length; i++) {
		
		// (risks_data_vars) Variables used for visualization data
		cause = data[i].cause;
		risk = Number(data[i].risk);
		r = (risk / riskTotal) * options.risks.maxCircleSize;
		
		// (risks_data_cy) Set y position of circles
		cy += r + options.risks.spaceBetweenCircles;
		if (i > 0) {
			cy += circlesData[i - 1].r;
		}
		
		// (risks_data_circles) Circles data
		circlesData[i] = {
			r: r,
			cx: options.circles.cx,
			cy: cy,
			stroke: data[i].stroke || options.risks.colorMap[cause],
			fill: data[i].fill,
			html: data[i].html
		};
		
		// (risks_data_lines) Lines data
		linesData[i] = {
			x1: options.circles.cx,
			y1: cy,
			x2: (parseFloat(options.circles.cx) + options.risks.lineLength).toString() + '%',
			y2: cy
		};
		
		// (risks_data_text) Text data
		textData[i] = {
			x: (parseFloat(linesData[i].x2) + options.risks.spaceBeforeText).toString() + '%',
			y: linesData[i].y2 + options.risks.spaceAboveText,
			text: cause
		};
	}
	
	// (svg_height) Calculate minimum height
	var svgHeight = circlesData[circlesData.length - 1].cy + options.risks.spaceAfterVisualization;
	options.svg = options.svg || {};
	options.svg.height = options.svg.height || svgHeight;
	
	// (risks_visualize) Visualize risks
	var vis = visualization(options);
	vis.circles.add(circlesData);
	vis.lines.add(linesData);
	vis.text.add(textData);
	return(vis);
};
