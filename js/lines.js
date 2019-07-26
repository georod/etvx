// Richard Wen
// rrwen.dev@gmail.com

// (lines_add) Add line svgs
var addLines = function(data, out) {
    var emptyData = {r:'0', text: '', fillOpacity: '0', strokeOpacity: '0'};
    
    // (lines_add_default) Set default data
    out.options.lines.data = data || out.options.lines.data;
    out.options.lines.data.unshift(emptyData);
    
    // (lines_add_element) Add lines element
    out.lines.element = out.svg.element.selectAll('line')
		
        // (line_add_data) Add data from array of objects
        .data(out.options.lines.data, function(d) {
            return d;
        })
        
        // (line_add_append) Add <line> based on data
        .enter()
        .append('line')
        
        // (line_add_attr) Add initial line attribute tags
        .attr('x1', function(d) {
            return d.x1 || out.options.lines.x1;
        })
        .attr('y1', function(d) {
            return d.y1 || out.options.lines.y1;
        })
        .attr('x2', function(d) {
            return d.x1 || out.options.lines.x1;
        })
        .attr('y2', function(d) {
            return d.y1 || out.options.lines.y1;
        })
        
        // (line_add_style) Add initial line styles
        .style('stroke-opacity', 0)
        .style('fill-opacity', 0);
    return out;
};

// (lines_transition) Add line transitions
var addLinesTransition = function(out) {
    out.lines.transition = out.lines.element
        .transition()
        
        // (lines_transition_attr) Add line attribute tags from data
        .attr('x2', function(d) {
            return d.x2 || out.options.lines.x2;
        })
        .attr('y2', function(d) {
            return d.y2 || out.options.lines.y2;
        })
        .attr('class', function(d) {
            return d.class || out.options.lines.class;
        })
        
        // (lines_transition_style) Add line styles from data
        .style('fill', function(d) {
            return d.fill || out.options.lines.fill;
        })
        .style('stroke', function(d) {
            return d.stroke || out.options.lines.stroke;
        })
        .style('stroke-opacity', function(d) {
            return d.strokeOpacity || out.options.lines.strokeOpacity;
        })
        .style('stroke-width', function(d) {
            return d.strokeWidth || out.options.lines.strokeWidth;
        })
        .style('fill-opacity', function(d) {
            return d.fillOpacity || out.options.lines.fillOpacity;
        });

    // (lines_transition_time) Set transition time
    if (out.options.lines.duration !== false) {
        out.lines.transition.duration(out.options.lines.duration);
    }
    if (out.options.lines.delay !== false) {
        out.lines.transition.delay(out.options.lines.delay);
    }
    return out;
};

// (lines_remove) Remove lines from svg
var removeLines = function(out) {
    out.svg.element.selectAll('line').remove();
};
