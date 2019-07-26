// Richard Wen
// rrwen.dev@gmail.com

// (text_add) Add text svgs
var addText = function(data, out) {
    var emptyData = {r:'0', text: '', fillOpacity: '0', strokeOpacity: '0'};

    // (text_add_default) Set default data
    out.options.text.data = data || out.options.text.data;
    out.options.text.data.unshift(emptyData);

    // (text_add_create) Create text svgs
    out.text.element = out.svg.element.selectAll('text')

        // (text_add_data) Add data from array of objects
        .data(out.options.text.data, function(d) {
            return d;
        })
        
        // (text_add_append) Add <text> based on data
        .enter()
        .append('text')
        
        // (text_add_attr) Add dynamic attribute tags
        .attr('x', function(d) {
            return d.x || out.options.text.x;
        })
        .attr('y', function(d) {
            return d.y || out.options.text.y;
        })
        .attr('class', function(d) {
            return d.class || out.options.text.class;
        })
        .text(function (d) {
            return d.text || out.options.text.text;
        })
        
        // (text_add_style_opacity) Add initial text opacity
        .style('stroke-opacity', 0)
        .style('fill-opacity', 0)
        
        // (text_add__style_font) Add font styles from data
        .style('font-family', function(d) {
            return d.fontFamily || out.options.text.fontFamily;
        })
        .style('font-size', function(d) {
            return d.fontSize || out.options.text.fontSize;
        })
        .style('font-weight', function(d) {
            return d.fontWeight || out.options.text.fontWeight;
        })
        .style('rotate', function(d) {
            return d.rotate || out.options.text.rotate;
        })
        .style('stroke-width', function(d) {
            return d.strokeWidth || out.options.text.strokeWidth;
        })
        
        // (text_add_style_color) Add color styles from data
        .style('fill', function(d) {
            return d.fill || out.options.text.fill;
        })
        .style('stroke', function(d) {
            return d.stroke || out.options.text.stroke;
        });
    return out;
};

// (text_transition) Add text transition effect
var addTextTransition = function(out) {
    out.text.transition = out.text.element
        .transition()
        
        // (text_transition_style) Add text styles from data
        .style('stroke-opacity', function(d) {
            return d.strokeOpacity || out.options.text.strokeOpacity;
        })
        .style('fill-opacity', function(d) {
            return d.fillOpacity || out.options.text.fillOpacity;
        });

    // (text_transition_time) Set transition time
    if (out.options.text.duration !== false) {
        out.text.transition.duration(out.options.text.duration);
    }
    if (out.options.text.delay !== false) {
        out.text.transition.delay(out.options.text.delay);
    }
    return out;
};

// (text_remove) Remove text from svg
var removeText = function(out) {
    out.svg.element.selectAll('text').remove();
};
