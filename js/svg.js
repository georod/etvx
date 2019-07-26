// Richard Wen
// rrwen.dev@gmail.com

// (svg_add) Add svg
var addSVG = function(svg, out) {
    out.options.svg = svg || out.options.svg;
    out.svg.element = d3.select(out.options.id)
        .append('svg')
        .attr('width', out.options.svg.width)
        .attr('height', out.options.svg.height)
        .classed(out.options.svg.class, true);
    return out;
};

// (svg_remove) Remove svg element
var removeSVG = function(out) {
    d3.select(out.options.id).selectAll('svg').remove();
};
