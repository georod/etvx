// Richard Wen
// rrwen.dev@gmail.com

// Example starter JavaScript for disabling form submissions if there are invalid fields
	
// Hide and show form
var vis;
var zoom = 1, minZoom = 0.25, maxZoom = 50;
var randomRisk = function() {
	var risk = (Math.random() * (1 - 0) + 0).toFixed(4);
	if (risk <= 0.2) {
		return (Math.random() * (0.3 - 0) + 0).toFixed(4)
	} else if (risk <= 0.5) {
		return (Math.random() * (0.5 - 0.3) + 0.3).toFixed(4)
	} else if (risk <= 0.7) {
		return (Math.random() * (0.7 - 0.5) + 0.5).toFixed(4)
	} else {
		return risk;
	}
};

$('#user-form').submit(function(e){
	e.preventDefault();
	
	$('#user-subtitle').fadeToggle(500);
	$('#user-age').fadeToggle(500);
	$('#user-gender').fadeToggle(500);
	$('#user-country').fadeToggle(500);
	$('#visualization').fadeIn(100);
	$('#calculate-button').fadeToggle(500, function(){
		
		// Visualization
		// colors from iwanthue.com
		var options = {
			id: '#visualization',
			circles: {
				r: '0',
				strokeWidth: '1',
				stroke: 'white',
				delay: function(d, i) {return i * 25;},
				duration: 1000
			},
			lines: {
				delay: function(d, i) {return i * 100;},
				duration: 1000
			},
			text: {
				delay: function(d, i) {return i * 100;},
				duration: 2000
			},
			risks: {
				data: [
					{risk: randomRisk() * 15, cause: 'Cancers', fill: '#7bc8db',
						description: 'Cancer is the uncontrolled growth and spread of cells. The growths often invade surrounding tissue and can metastasize to distant sites.',
						url: 'http://www.who.int/topics/cancer/en/'
					},
					{risk: randomRisk() * 15, cause: 'Cardiovascular Disease', fill: '#f0d099',
						description: 'Cardiovascular diseases are a group of disorders of the heart and blood vessels.',
						url: 'http://www.who.int/cardiovascular_diseases/about_cvd/en/'
					},
					{risk: randomRisk() * 3, cause: 'Respiratory Disease', fill: '#b1bf81',
						description: 'Chronic respiratory diseases are chronic diseases of the airways and other structures of the lung.',
						url: 'http://www.who.int/respiratory/about_topic/en/'
					},
					{risk: randomRisk() / 2, cause: 'Dementia', fill: '#beb9e9',
						description: 'Dementia is an umbrella term for several diseases affecting memory, other cognitive abilities and behaviour that interfere significantly with a person’s ability to maintain their activities of daily living.',
						url: 'http://www.who.int/mental_health/neurology/dementia/en/'
					},
					{risk: randomRisk(), cause: 'Diarrheal Diseases', fill: '#91ce99',
						description: 'Diarrhoea is the passage of 3 or more loose or liquid stools per day, or more frequently than is normal for the individual. It is usually a symptom of gastrointestinal infection, which can be caused by a variety of bacterial, viral and parasitic organisms.',
						url: 'http://www.who.int/topics/diarrhoea/en/'
					},
					{risk: randomRisk() / 2, cause: 'Malnutrition', fill: '#eaaecf',
						description: 'Malnutrition refers to deficiencies, excesses, or imbalances in a person’s intake of energy and/or nutrients.',
						url: 'http://www.who.int/topics/malnutrition/en/'
					},
					{risk: randomRisk() * 2, cause: 'Tuberculosis', fill: '#cdefb4',
						description: 'Tuberculosis (TB) is caused by bacteria (Mycobacterium tuberculosis) that most often affect the lungs.',
						url: 'http://www.who.int/en/news-room/fact-sheets/detail/tuberculosis'
					},
					{risk: randomRisk() * 2, cause: 'HIV/AIDS', fill: '#98c3a6',
						description: 'The Human Immunodeficiency Virus (HIV) targets the immune system and weakens people\'s defence systems against infections and some types of cancer. ',
						url: 'http://www.who.int/news-room/fact-sheets/detail/hiv-aids'
					},
					{risk: randomRisk(), cause: 'Malaria', fill: '#ecaa9a',
						description: 'Malaria is caused by Plasmodium parasites. The parasites are spread to people through the bites of infected female Anopheles mosquitoes, called "malaria vectors."',
						url: 'http://www.who.int/news-room/fact-sheets/detail/malaria'
					},
					{risk: randomRisk() / 2, cause: 'Drowning', fill: '#69dee0',
						description: 'Drowning is the process of experiencing respiratory impairment from submersion/immersion in liquid.',
						url: 'http://www.who.int/violence_injury_prevention/other_injury/drowning/en/'
					},
					{risk: randomRisk() * 3, cause: 'Road Incidents', fill: '#9ee3f3',
						description: 'Road traffic injuries cause considerable economic losses to individuals, their families, and to nations as a whole. ',
						url: 'http://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries'
					},
					{risk: randomRisk() / 3, cause: 'Natural Disasters', fill: '#e2e7b2',
						description: 'A natural disaster is an act of nature of such magnitude as to create a catastrophic situation in which the day-to-day patterns of life are suddenly disrupted and people are plunged into helplessness and suffering, and, as a result, need food, clothing, shelter, medical and nursing care and other necessities of life, and protection against unfavourable environmental factors and conditions.',
						url: 'http://www.who.int/environmental_health_emergencies/natural_events/en/'
					},
					{risk: randomRisk() / 2, cause: 'Suicide', fill: '#e8d1af',
						description: 'Suicide does not just occur in high-income countries, but is a global phenomenon in all regions of the world.',
						url: 'http://www.who.int/news-room/fact-sheets/detail/suicide'
					},
					{risk: randomRisk() * 2, cause: 'Smoking and Secondhand Smoke', fill: '#8dd5b3',
						description: 'Globally, more than a third of all people are regularly exposed to the harmful effects of smoke.',
						url: 'http://www.who.int/gho/phe/secondhand_smoke/en/'
					},
					{risk: randomRisk(), cause: 'Homicide', fill: '#b4cb9e',
						description: 'Homicide is the killing of a person by another with intent to cause death or serious injury, by any means. It excludes death due to legal intervention and operations of war.',
						url: 'http://apps.who.int/violence-info/homicide/'
					},
					{risk: randomRisk() / 3, cause: 'Terrorism-related Deaths', fill: '#b1edd8',
						description: 'Terrorism is usually understood as the use or threat of violence to further a political cause. ',
						url: 'https://ourworldindata.org/terrorism'
					}
				]
			}
		};
		
		// HTML for hover tooltip
		for (var i = 0; i < options.risks.data.length; i++){
			options.risks.data[i].html = '<b>' + options.risks.data[i].cause + '</b>' + '<br><br>Risk: ' + (Math.round(options.risks.data[i].risk * 100) / 100)
			+ '<br><br>"' + options.risks.data[i].description + '"<br><br>' + '<a href=' + options.risks.data[i].url + ' style="color:#c6c6c6;">' + options.risks.data[i].url + '</a>';
		};
		
		// Render visualization and adjust position
		$("#user-input").css("margin-top", "50px");
		vis = visualizeRisks(options);
		
		// Setup hover tooltip
		var tip = d3.tip()
			.attr('class', 'd3-tip')
			.direction('w')
			.offset([0, -10])
			.html(function(d) { return d.html;});
			
		// Add hover tooltip to visualization
		vis.svg.element.call(tip);
		vis.circles.element.on('mouseover', function(d, i) {
			var transition = d3.select(this)
				.transition()
				.style('stroke', '#4D4D4D')
			if (d.r * zoom < 15) {
				transition.attr('r', '15');
			}
			tip.show(d);
			vis.text.element
				.filter(function (d, it) { return it == i;})
				.transition()
				.style('fill', function(d) {return 'black';});
			vis.lines.element
				.filter(function (d, it) { return it == i;})
				.transition()
				.style('stroke', 'black')
				.style('stroke-opacity', 1)
				.style('stroke-width', 0.75);
		});
		vis.circles.element.on('mouseout', function(d, i) {
			d3.select(this)
				.transition()
				.style('stroke', d.stroke)
				.attr('r', d.r * zoom);
				tip.hide();
			vis.text.element
				.filter(function (d, it) { return it == i;})
				.transition()
				.style('fill', function(d) {return '#444';});
			vis.lines.element
				.filter(function (d, it) { return it == i;})
				.transition()
				.style('stroke', '#4D4D4D')
				.style('stroke-opacity', 0.8)
				.style('stroke-width', 0.5);
		});
		
		setTimeout(function() {
			$('#tools').fadeIn(800);
		}, 2500);
		
	});
});

$('#recalculate-button').click(function(){
	
	$('#visualization').fadeOut(800, function() {
		vis.svg.remove();
	});
	
	$('#tools').fadeToggle(800, function() {
		
		$("#user-input").css("margin-top", "125px");
		$("#user-input").css("margin-top", "30vh");
	
		$('#user-subtitle').fadeToggle(800);
		$('#user-age').fadeToggle(800);
		$('#user-gender').fadeToggle(800);
		$('#user-country').fadeToggle(800);
		$('#calculate-button').fadeToggle(800);
	});
	
});

$('#zoomreset-button').click(function(){
	zoom = 1;
	vis.circles.element
		.transition()
		.duration(500)
		.attr('r', function(d) {return d.r * zoom});
	$('#zoomout-button').prop('disabled', false);	
	$('#zoomin-button').prop('disabled', false);
});

$('#zoomin-button').click(function(){
	
	if (zoom <= 1) {
		zoom += 0.25;
	} else if (zoom >= 10) {
		zoom += 5;
	} else {
		zoom += 1;
	}
	
	vis.circles.element
		.transition()
		.duration(500)
		.attr('r', function(d) {return d.r * zoom});
			
	if (zoom >= maxZoom) {
		$('#zoomin-button').prop('disabled', true);
	} else {
		$('#zoomout-button').prop('disabled', false);
	}
});

$('#zoomout-button').click(function(){
	
	if (zoom <= 1) {
		zoom -= 0.25;
	} else if (zoom >= 10) {
		zoom -= 5;
	} else {
		zoom -= 1;
	}
	
	vis.circles.element
		.transition()
		.duration(500)
		.attr('r', function(d) {return d.r * zoom});

	if (zoom <= minZoom) {
		$('#zoomout-button').prop('disabled', true);
	} else {
		$('#zoomin-button').prop('disabled', false);
	}
	
});
