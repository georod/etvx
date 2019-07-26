// Richard Wen
// rrwen.dev@gmail.com

// (circles_add) Add circle svgs
var addCircles = function(data, out) {
    var emptyData = {r:'0', text: '', fillOpacity: '0', strokeOpacity: '0'};

    // (circles_add_default) Set default data
    out.options.circles.data = data || out.options.circles.data;
    out.options.circles.data.unshift(emptyData);

    // (circles_add_element) Add circles element
    out.circles.element = out.svg.element.selectAll('circle')
		
        // (circles_add_data) Add data from array of objects
        .data(out.options.circles.data, function(d) {
            return d;
        })
        
        // (circles_add_append) Add <circle> based on data
        .enter()
        .append('circle')
        
        // (circles_add_attr) Add initial circle attribute tags
        .attr('r', out.options.circles.r)
        .attr('cx', function(d) {
            return d.cx || out.options.circles.cx;
        })
        .attr('cy', function(d) {
            return d.cy || out.options.circles.cy;
        });
    return out;
};

// (circles_transition) Add initial circles transition
var addCirclesTransition = function(out) {
    out.circles.transition = out.circles.element
        .transition()

        // (circles_transition_attr) Add circle attr from data
        .attr('r', function(d) {
            return d.r || out.options.circles.r;
        })
        .attr('class', function(d) {
            return d.class || out.options.circles.class;
        })
        
        // (circles_transition_style) Add circle styles from data
        .style('fill', function(d) {
            return d.fill || out.options.circles.fill;
        })
        .style('fill-opacity', function(d) {
            return d.fillOpacity || out.options.circles.fillOpacity;
        })
        .style('stroke', function(d) {
            return d.stroke || out.options.circles.stroke;
        })
        .style('stroke-opacity', function(d) {
            return d.strokeOpacity || out.options.circles.strokeOpacity;
        })
        .style('stroke-width', function(d) {
            return d.strokeWidth || out.options.circles.strokeWidth;
        });
    
    // (circles_transition_time) Set transition time
    if (out.options.circles.duration !== false) {
        out.circles.transition.duration(out.options.circles.duration);
    }
    if (out.options.circles.delay !== false) {
        out.circles.transition.delay(out.options.circles.delay);
    }
    return out;
};

// (circles_remove) Remove circles from svg
var removeCircles = function(out) {
    out.svg.element.selectAll('circle').remove();
};
